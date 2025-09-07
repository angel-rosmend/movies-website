"use server";
import { TMDB_BASE_URL, TMDB_KEY, TMDB_TOKEN } from "@/server/constants/urls";
import { MovieCategory, TMDBResponse } from "../types/movie";
import z from "zod";
import {
  CreditsSchema,
  CreditsType,
  MovieCardSchema,
  MovieCardType,
  MovieSchema,
  MovieType,
  ReviewSchema,
  ReviewType,
} from "@/lib/models";
import { getImageUrl } from "@/server/utils/getImageUrl";

async function fetchFromTMDB(endpoint: string): Promise<TMDBResponse> {
  const baseUrl = z.string({ error: "Missing base url" }).parse(TMDB_BASE_URL);
  const token = z.string({ error: "Missing tmdb token" }).parse(TMDB_TOKEN);
  const key = z.string({ error: "Missing tmdb key" }).parse(TMDB_KEY);
  const url = `${baseUrl}${endpoint}api_key=${key}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      switch (response.status) {
        case 401:
          throw new Error(
            "Invalid TMDB API key. Please check your API key in environment variables."
          );
        case 404:
          throw new Error("Requested resource not found.");
        case 429:
          throw new Error(
            "TMDB API rate limit exceeded. Please try again later."
          );
        default:
          throw new Error(
            `TMDB API error: ${response.status} ${response.statusText}`
          );
      }
    }

    const data: TMDBResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`TMDB API Error: ${error.message}`);
      throw error;
    }
    throw new Error("Failed to fetch data from TMDB");
  }
}

/**
 * Fetch movies by category (popular, top_rated, upcoming, now_playing)
 * @param category - The movie category to fetch
 * @param page - Page number (default: 1)
 * @returns Promise<TMDBResponse> - Movies data with pagination info
 */
export async function getMoviesByCategory(
  category: MovieCategory,
  page = 1
): Promise<MovieCardType[]> {
  const response = await fetchFromTMDB(`/movie/${category}?page=${page}`);
  const parsedData = response.results.map((item) =>
    MovieCardSchema.parse({
      ...item,
      image: {
        url: getImageUrl(item.poster_path),
        alt: item.original_title,
        title: item.title,
      },
    })
  );
  return parsedData;
}

/**
 * Search for movies by query string
 * @param query - Search term
 * @param page - Page number (default: 1)
 * @returns Promise<TMDBResponse> - Search results with pagination info
 */
export async function searchMovies(
  query: string,
  page = 1
): Promise<TMDBResponse> {
  if (!query.trim()) {
    throw new Error("Search query cannot be empty");
  }

  const encodedQuery = encodeURIComponent(query.trim());
  return fetchFromTMDB(`/search/movie?query=${encodedQuery}&page=${page}`);
}

export async function fetchMovieCredits(movieId: number): Promise<CreditsType> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${movieId}/credits?api_key=${TMDB_KEY}`
  );
  const data = await response.json();
  return CreditsSchema.parse(data);
}

export async function fetchMovieReviews(movieId: number): Promise<ReviewType[]> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${movieId}/reviews?api_key=${TMDB_KEY}&page=1`
  );
  const data = await response.json();
  return data.results.map((item: ReviewType) => ReviewSchema.parse(item));
}

export async function getMovieDetails(movieId: number): Promise<MovieType> {
  const data = await fetchFromTMDB(`/movie/${movieId}`);
  const parsedData = MovieSchema.parse(data);
  return parsedData;
}
export async function getCompleteMovieDetails(movieId: number) {
  const [details, credits, reviews] = await Promise.all([
    getMovieDetails(movieId),
    fetchMovieCredits(movieId),
    fetchMovieReviews(movieId),
  ]);
  const director = credits.crew.find((member) => member.job === "Director");
  const cast = credits.cast.slice(0, 8);
  return { ...details, credits: { director, cast }, reviews };
}
