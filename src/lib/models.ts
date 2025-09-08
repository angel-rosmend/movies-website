import { z } from "zod";

export const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const ImageSchema = z.object({
  url: z.string(),
  alt: z.string().optional(),
  title: z.string().optional(

  ),
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
  belongs_to_collection: z.object({id: z.number(), name: z.string(), poster_path: z.string(), backdrop_path: z.string()}).nullable(),
  budget: z.number(),
  genres: z.array(GenreSchema),
  homepage: z.string().nullable(),
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
  popularity: true,
  vote_average: true,
  vote_count: true,
}).extend({ image: ImageSchema });

export const HeroSchema = MovieSchema.pick({
  id: true,
  title: true,
  overview: true,
  popularity: true,
  vote_average: true,
  vote_count: true,
  poster_path: true,
}).extend({ image: ImageSchema });

export const CastMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  character: z.string(),
  profile_path: z.string().nullable(),
  order: z.number(),
})

export const CrewMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  job: z.string(),
  department: z.string(),
  profile_path: z.string().nullable().optional(),
})

export const CreditsSchema = z.object({
  cast: z.array(CastMemberSchema),
  crew: z.array(CrewMemberSchema),
})

export const ReviewAuthorDetailsSchema = z.object({
  name: z.string(),
  username: z.string(),
  avatar_path: z.string().nullable(),
  rating: z.number().nullable(),
})

export const ReviewSchema = z.object({
  id: z.string(),
  author: z.string().optional(),
  author_details: ReviewAuthorDetailsSchema.optional(),
  content: z.string().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
})


export type HeroType = z.infer<typeof HeroSchema>;
export type MovieType = z.infer<typeof MovieSchema>;
export type MovieCardType = z.infer<typeof MovieCardSchema>;
export type CastMemberType = z.infer<typeof CastMemberSchema>
export type CrewMemberType = z.infer<typeof CrewMemberSchema>
export type CreditsType = z.infer<typeof CreditsSchema>
export type ReviewType = z.infer<typeof ReviewSchema>


export interface Response {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}

export enum MovieCategoryEnum  {
  Popular = "popular",
  TopRated = "top_rated",
  Upcoming =  "upcoming",
  NowPlaying =  "now_playing"
}
export type MovieCategory =
  | MovieCategoryEnum.Popular
  | MovieCategoryEnum.TopRated
  | MovieCategoryEnum.Upcoming
  | MovieCategoryEnum.NowPlaying

