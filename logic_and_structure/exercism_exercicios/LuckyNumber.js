// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let stringsTranform = array1.join('');
  let stringsTransform2 = array2.join('');

  let n1 = Number(stringsTranform);
  let n2 = Number(stringsTransform2);

  return n1+n2;
  
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let numString = String(value);
  const pal = numString.split('').reverse().join('')
  const palN = Number(pal)

  if(value === palN){
    return true
  } else{
    return false
  }
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return 'Required field';
  }
  
   let num = Number(input);

  if(isNaN(num) || num === 0){
    return 'Must be a number besides 0'
  }

  return ""
  
}

console.log(twoSum([1, 2, 3], [0, 7]));

console.log(luckyNumber(1441)); 

console.log(errorMessage('123'));