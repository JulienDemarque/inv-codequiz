import { flow, split, filter } from 'lodash/fp'
/*
    Write a function that takes an integer as input,
    and returns the number of bits that are equal to one in the binary representation of that number. 
    You can guarantee that input is non-negative.

    Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

export function countBits(n: number) {
  // Program Me
  return flow(
    (n: number) => n.toString(2),
    split(''),
    filter((c: string) => c === '1'),
    (a: string[]) => a.length
  )(n)
}
