'use strict'
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    country: "USA"
  };

function keysInObject(obj){
  return Object.keys(obj);
}

console.log(keysInObject(person));

function removeVovels(sentence){

  const vowels = ['a','e','i','o','u'];

  if(typeof sentence == "string"){

    return sentence.split("").filter(ch => !(vowels.includes(ch))).join("");

  }

}

console.log(removeVovels("Hello, how are you?"));