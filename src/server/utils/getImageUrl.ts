export function getImageUrl(
  path: string | null,
  size: "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original" = "w500",
): string {
  if (!path) {
    return `/placeholder.svg?height=750&width=500&text=No+Image`
  }
  return `https://image.tmdb.org/t/p/${size}${path}`
}