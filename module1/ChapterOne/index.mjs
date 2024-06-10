import readLine from '../../readLine.mjs';
import { checkForEven,
    natureOfNumbers,
    convertToMinutes
 } from './javascriptOperators.mjs';

export function executeActivity1(){ 
 readLine.on('line', checkForEven);
}

export function executeActivity2(){ 
    readLine.on('line', natureOfNumbers);
   }
   
export function executeActivity3(){ 
    readLine.on('line', convertToMinutes);
   }
   