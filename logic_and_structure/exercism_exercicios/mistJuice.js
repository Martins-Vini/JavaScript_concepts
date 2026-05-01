import inquirer from "inquirer";
export function timeToMixJuice(name) {
  let timeWaiting = 0;
  try{
    switch(name){
      case "Pure Strawberry Joy":
        timeWaiting = 0.5
        return timeWaiting;
        break;
      case "Energizer":
        timeWaiting = 1.5
        return timeWaiting;
        break;
      case "Green Garden":
        timeWaiting = 1.5;
        return timeWaiting
        break;
      case "Tropical Island":
        timeWaiting = 3
        return timeWaiting;
        break;
      case "All or Nothing":
        timeWaiting = 5;
        return timeWaiting;
        break;
      case "Berries & Lime":
        timeWaiting = 6;
        return timeWaiting;
        break;
      default:
        timeWaiting = 2.5;
        return timeWaiting;  
    }
  } catch(e){
    return console.error(e.message)
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let cont = 0;
  let contLimes = 0;

  if(wedgesNeeded <= 0){
    return 0;
  }

  
  for(let i = 0; i < limes.length && cont < wedgesNeeded; i++){
    switch(limes[i]){
      case "small":
          cont+=6
          contLimes++;
      break;
      case "medium":
          cont +=8
          contLimes++;
      break;
      case "large":
          cont+=10
          contLimes++;
      break;
      default:
        return cont+=0;
    }

    if(cont >= wedgesNeeded){
      break;
    } else{
      continue;
    };
    
  }

  return contLimes;
  
}

export function remainingOrders(timeLeft, orders) {
  
  if(timeLeft <= 0){
    return 0;
  }
  
  for(let i = 0;i < orders.length;i++){
    let timeWaiting = 0;
    switch(orders[i]){
        case "Pure Strawberry Joy":
        timeWaiting = 0.5
        break;
      case "Energizer":
      case "Green Garden":
        timeWaiting = 1.5;
        break;
      case "Tropical Island":
        timeWaiting = 3
        break;
      case "All or Nothing":
        timeWaiting = 5;
        break;
      case "Berries & Lime":
        timeWaiting = 6;
        break;
      default:
        timeWaiting += 2.5;  
    }

      timeLeft -= timeWaiting; 

    if(timeLeft <= 0){
      return orders.slice(i+1);
    }
    
  };

  return []; 

}

//Principal section

let juicesFlavor = ["Pure Strawberry Joy", "Energizer", "Green Garden", "Tropical Island", "All or Nothing", "Berries & Lime"];
juicesFlavor.sort(()=> Math.random() - 0.5);

let limes = ['small', 'small', 'large', 'medium', 'small'];

let remainingJuices = ['Energizer', 'All or Nothing', 'Green Garden']

console.log(timeToMixJuice(juicesFlavor));
console.log(limesToCut(25, limes));
console.log(remainingOrders(5, remainingJuices));