//Nível = Aprendizado
//Objtivo = Trabalhar com tipos de dados numéricos
// @ts-check
// Get those rates calculated!
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 
 * @returns {number} the rate per day
 */
export const WORK_DAILY = 8;
/**
 * @param {number} ratePerHour
 */
export function dayRate(ratePerHour) {
  return ratePerHour*WORK_DAILY;
}
/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const DAILY_MONEY = ratePerHour*WORK_DAILY;
  return Math.floor(budget/DAILY_MONEY);
}
/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  //valor dos dias faturáveis
  const BILLABLE_DAYS = 22;
  //meses trabalhados
  const MONTHLY_WORK = Math.floor(numDays/BILLABLE_DAYS)
  
  //Valor por dia e por mês (sem desconto)
  const DAILY_MONEY = ratePerHour*WORK_DAILY;
  const MONTHLY_MONEY = BILLABLE_DAYS*DAILY_MONEY;
  //valor dos dias restantes
  const REMAINING_MONEY = (numDays % BILLABLE_DAYS)*DAILY_MONEY;
  const MONTHLY_MONEY_DISCOUNT = (MONTHLY_MONEY-(MONTHLY_MONEY*discount))*MONTHLY_WORK;
  //Retorno do preço com desconto
  return Math.ceil(MONTHLY_MONEY_DISCOUNT+REMAINING_MONEY);
}
console.log(dayRate(89));
console.log(daysInBudget(20000,89));
console.log(priceWithMonthlyDiscount(89, 230, 0.42));