// Code your solutions in this file
/****************IMPLEMENTATION NUMBER 1 OF writeCards()***************/
function writeCards(nameArray){
  let cardArray = [...nameArray];

  for (let i = 0 ; i < cardArray.length ; ++i){
    cardArray[i] = `Thank you, ${cardArray[i]}, for the wonderful surprise gift!`;
  }

  return cardArray;
  
}

/****************IMPLEMENTATION NUMBER 2 OF writeCards()***************/
// function writeCards(nameArray){
//   let cardArray = [];

//   for (let i = 0 ; i < nameArray.length ; ++i){
//     cardArray.push(`Thank you, ${nameArray[i]}, for the wonderful surprise gift!`);
//   }

//   return cardArray;
// }


function countDown(startingNumber){

  for (let i = startingNumber ; i >= 0 ; --i){
    console.log(i);
  }

}