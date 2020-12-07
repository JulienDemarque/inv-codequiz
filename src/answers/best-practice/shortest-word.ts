import { flow, split, map, min } from 'lodash/fp'
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

const findShort = (s: string) => {
  return flow(
    split(' '),
    map((w: string) => w.length),
    min
  )(s)
}

export { findShort }
