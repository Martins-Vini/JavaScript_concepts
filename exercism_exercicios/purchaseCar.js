
/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return kind == "car" || kind == "truck";
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  let array = [option1, option2]
  let betterCar = array.sort();
  return `${betterCar[0]} is clearly the better choice.`
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if(age < 3){
      let newPrice = 0.8*originalPrice;
      return newPrice;
  } else if(age > 10){
      let newPrice = 0.5*originalPrice;
      return newPrice;
  } else if(age >= 3 && age <= 10){
      let newPrice = 0.7*originalPrice;
      return newPrice;
  }
}

console.log(needsLicense("car"));
console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));
console.log(calculateResellPrice(1000, 1));