
function countVowels(str) {
    // Your code goes here
    let count = 0;
    str = str.toLowerCase();
    const vowels = ['a','e','i','o','u'];
    str.split("").forEach(char=>{
        if(vowels.includes(char)) count++;
    });
    return count;
  }

  console.log(countVowels("Hellow world!"));