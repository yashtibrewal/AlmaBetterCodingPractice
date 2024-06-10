import readline from 'readline';

/**
 * Since I only need the input, and I will use console.log for ouput.
 */
const readLine = readline.createInterface(
    process.stdin, null
)


export default readLine;