import * as project from '../../module1/project.mjs';

test('primes till 5', ()=>{
    expect(project.findPrimes(5)).toEqual([1,2,3,5]);
})
