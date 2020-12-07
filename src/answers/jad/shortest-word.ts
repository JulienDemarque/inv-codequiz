import { flow, split, reduce } from 'lodash/fp'
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

const BIG_NUMBER = Number.POSITIVE_INFINITY
const findShort = (s: string) => {
  return flow(
    split(' '),
    reduce((acc, current) => (current.length < acc ? current.length : acc), BIG_NUMBER)
  )(s)
}

export { findShort }
