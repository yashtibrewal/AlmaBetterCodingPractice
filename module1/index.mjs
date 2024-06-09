import readline from 'readline';
import { checkForEven,
    natureOfNumbers,
    convertToMinutes
 } from './javascriptOperators.mjs';

/**
 * Since I only need the input, and I will use console.log for ouput.
 */
const readLine = readline.createInterface(
    process.stdin, null
)

export function executeActivity1(){ 
 readLine.on('line', checkForEven);
}

export function executeActivity2(){ 
    readLine.on('line', natureOfNumbers);
   }
   
export function executeActivity3(){ 
    readLine.on('line', convertToMinutes);
   }
   