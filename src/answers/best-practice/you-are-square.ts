// export function isSquare(n: number): boolean {
//   return Number.isInteger(Math.sqrt(n))
// }

// or
export function isSquare(n: number): boolean {
  return Math.sqrt(n) % 1 === 0
}
