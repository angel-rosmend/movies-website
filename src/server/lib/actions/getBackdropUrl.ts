import { TMDB_IMAGE_BASE_URL } from "@/server/constants/urls"

export function getImageUrl(path: string | null, size: "w300" | "w780" | "w1280" | "original" = "w1280"): string {
  if (!path) {
    return `/placeholder.svg?height=720&width=1280&text=No+Backdrop`
  }
  return `${TMDB_IMAGE_BASE_URL}${size}${path}`
}
