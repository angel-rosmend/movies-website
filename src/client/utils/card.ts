export function formatRuntime(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  if (hours === 0) {
    return `${remainingMinutes}min`
  }

  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}min` : `${hours}h`
}

export function formatRating(rating: number): { filledStars: number; displayRating: string } {
  // Convert rating (e.g., 8.5) to stars out of 5
  const filledStars = Math.round((rating / 10) * 5)
  const displayRating = rating >= 1000 ? `${(rating / 1000).toFixed(1)}K` : rating.toString()

  return { filledStars, displayRating }
}

export function formatCount(count: number | string): string {
  const num = typeof count === "string" ? Number.parseFloat(count) : count

  if (num >= 1000000) {
    return Math.floor(num / 1000000) + "M"
  }
  if (num >= 1000) {
    return Math.floor(num / 1000) + "K"
  }
  return Math.floor(num).toString()
}