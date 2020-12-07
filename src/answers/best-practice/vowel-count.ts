/*
    Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).

    The input string will only consist of lower case letters and/or spaces.
*/

export const getCount = (str: string) => {
  let list = str.match(/[aeiou]/gi)
  return list ? list.length : 0
}

// Or

// export const getCount = (str: string) => {
//   return str.replace(/[^aeiou]/gi, '').length
// }
