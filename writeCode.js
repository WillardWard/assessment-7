//////////////////////////////////////////////////
//////  Runtime Analysis Step 2: Write Code //////
//////////////////////////////////////////////////


//////////////////////////////////////
/*            1) SUM ZERO          */
/////////////////////////////////////

const addToZero = (numArr) => {
  let zeroCheck = false
  for(let i = 0; i <= numArr.length; i++) {
    for(let j = i + 1; j <= numArr.length-1; j++) {
      let sum = numArr[i] + numArr[j]
      console.log(`${numArr[i]} + ${numArr[j]} = ${sum}`)
      if( numArr[i] + numArr[j] === 0 ){
        zeroCheck = true;
      };
    };
  };
  return zeroCheck;
};

// console.log(addToZero([]));
// console.log(addToZero([1]));
// console.log(addToZero([1,2,3]));
// console.log(addToZero([1,2,3,-2]));

/*   
    The runtime for the addToZero function is O (n^2)
*/

////////////////////////////////////////
/*        2) Unique Characters       */
///////////////////////////////////////

const hasUniqueChars = (string) => {
  let unique = true
  for(let i = 0; i <= string.length; i++) {
    for(let j = i + 1; j <= string.length-1; j++) {
      // let sum = numArr[i] + numArr[j]
      // console.log(`${numArr[i]} + ${numArr[j]} = ${sum}`)
      if( string[i] == string[j]){
        unique = false;
      };
    };
  };
  return unique;
}

// console.log(hasUniqueChars("Monday"));
// console.log(hasUniqueChars("Moonday"));

/*
    The runtime for hasUniqueChars is also O (n^2)
*/

////////////////////////////////////////
/*        3) Pangram Sentence        */
///////////////////////////////////////

const sentence = 'The quick brown fox jumps over the lazy dog!';

const isPangram = (string) => {
  string = string.toLowerCase();
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const alphaArr = alphabets.split('');
  for (let i = 0; i <= string.length; i++) {
    const index = alphaArr.indexOf(string[i])
      if (index !== -1 ) {
        alphaArr.splice(index, 1);
      }
    
  }
  return !alphaArr.length
}

// console.log(isPangram(sentence))
// console.log(isPangram("I like cats, but not mice"))

/*
    The runtime for isPangram is O (n)
*/

////////////////////////////////////////
/*        4) Longest Word            */
///////////////////////////////////////

const wordArr = ["hi", "hello", "bye"]

console.log(wordArr.length)


const findLongestWord = (array) => {
  let current = 0
  for (let i = 0; i < array.length; i++) {
    let word = array[i].length
    if ( word > current){
      current = word
    }
  }
  return current
}

console.log(findLongestWord(wordArr));

/*
    The runtime for findLongestWord is O (n)
*/