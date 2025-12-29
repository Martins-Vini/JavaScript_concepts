//Nível = Aprendizado
//Objetivo = Manipulação de dados strings (caracteres)

// @ts-check
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
   const FIRST_LETTER = line[0]
   return FIRST_LETTER;
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} WORD the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(WORD){
  const CAP_WORD =   WORD.toLowerCase();
  const S_UPPER = CAP_WORD[0].toUpperCase();
  const REST = CAP_WORD.slice(1);
  const CORRECTLY_WORD = S_UPPER+REST;
  return CORRECTLY_WORD;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  const WITHOUT_BLANK = line.replaceAll(' ','')
  const COMP_VERS = (WITHOUT_BLANK.trim()).length;
  const LAST_LETTER = WITHOUT_BLANK[COMP_VERS-1];
  return LAST_LETTER;
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  const FIRST_LETTER = word[0].toUpperCase();
  const REST_WORD = word.slice(1);
  const CORRECTLY_WORD = FIRST_LETTER+REST_WORD;
  return CORRECTLY_WORD+', please';
}

console.log(frontDoorResponse('Stands so high'));
console.log(frontDoorPassword('SHIRE'));
console.log(backDoorResponse('Stands so high'));
console.log('horse');