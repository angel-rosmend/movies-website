import { z } from "zod";

export const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const ImageSchema = z.object({
  url: z.string(),
  alt: z.string().optional(),
  title: z.string().optional(),
});

const ProductionCompanySchema = z.object({
  id: z.number(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
});

const ProductionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
});

const SpokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
});

export const MovieSchema = z.object({
  adult: z.boolean().nullable(),
  backdrop_path: z.string().nullable(),
  belongs_to_collection: z.null(), // or z.object({...}) if you want to support collections
  budget: z.number(),
  genres: z.array(GenreSchema),
  homepage: z.string().url().nullable(),
  id: z.number(),
  imdb_id: z.string().nullable(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  production_companies: z.array(ProductionCompanySchema),
  production_countries: z.array(ProductionCountrySchema),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number(),
  spoken_languages: z.array(SpokenLanguageSchema),
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const MovieCardSchema = MovieSchema.pick({
  id: true,
  title: true,
  runtime: true,
  vote_average: true,
  vote_count: true,
}).extend({ image: ImageSchema });

export const HeroSchema = MovieSchema.pick({
  id: true,
  title: true,
  overview: true,
}).extend({ image: ImageSchema });

export type HeroType = z.infer<typeof HeroSchema>;
export type MovieType = z.infer<typeof MovieSchema>;
export type MovieCardType = z.infer<typeof MovieCardSchema>;


export interface TMDBResponse {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}
export type MovieCategory =
  | "popular"
  | "top_rated"
  | "upcoming"
  | "now_playing";
