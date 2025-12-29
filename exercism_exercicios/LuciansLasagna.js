//Nível = Aprendizado
//Objetivo = Trabalhar com funções e parâmetros de funções
//Helping Lucian make a dinner for your girlfriend with JavaScript

// @ts-check

const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */

export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * @param {number} actualMinutesInOven
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  const result = EXPECTED_MINUTES_IN_OVEN-actualMinutesInOven;
  if(result > 0){
    return result;
  } else{
    return result;
  }
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers*PREPARATION_MINUTES_PER_LAYER;
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return (numberOfLayers*2)+actualMinutesInOven;
}

console.log(remainingMinutesInOven(17));
console.log(preparationTimeInMinutes(4));
console.log(totalTimeInMinutes(4, 17));