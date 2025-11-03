//Nível = Aprendizado
//Objetivo = Compreender mais sobre arrays

//Conceito: Arrays são variáveis compostas em que é possível guardar mais de um dado temporário nessa variável, sendo semelhante a uma lista com índices. Essa lista pode ser de um tipo de dado, ou uma tupla, guardando vários tipos de dados.

let array = [1, 'two', false, {}, 2, 4, true, 5]

//Método length

console.log(array.length)

//Troca de valor numa posição
array[1] = 2;

//Método push

array.push(6); //Envia um valor para a última posição do array 

//Método unshift

array.unshift('olá') //Coloca valor na primeira posição do array

//Método pop

array.pop(); //Deleta valor da última posição do array

//Método shif

array.shift() //Remove valor da primeira posição do array 

//Método splice

array.splice(3, 1 , 3) //Troca valor de qualquer posição do array (Não altera o array original, faz uma cópia assim como todos os outros métodos

//Aviso: Os métodos podem ser aplicados juntos e resolver uma gama de problemas

// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
  const array = cards;
  return array[position];
}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
  const array = cards;
  array[position] = replacementCard;
  return array;
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
  const array = cards;
  array.push(newCard);
  return array;
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  const array = cards;
  const mod = array.splice(position, 1);
  return array;
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
  const array = cards;
  const mod = array.pop();
  return array;
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
  const array = cards;
  const mod = cards.unshift(newCard);
  return array;
}

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards){
  const array = cards;
  const mod = array.shift();
  return array;
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize){
  const array = cards;
  if(array.length === stackSize){
    return true;
  } else{
    return false;
  }
}

console.log(getItem([1,2,3,4], 3));
console.log(setItem([1, 2, 4, 1], 2, 6));
console.log(insertItemAtTop([5, 9, 7, 1], 8));
console.log(removeItem([3, 2, 6, 4, 8] , 2));
console.log(removeItemFromTop([3, 2, 6, 4, 8]));
console.log(insertItemAtBottom([5, 9, 7, 1], 8));
console.log(removeItemAtBottom([8, 5, 9, 7, 1]));
console.log(checkSizeOfStack([3, 2, 6, 4, 8], 4))