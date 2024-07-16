function isBalanced(exp) {
    // Your code goes here

    let stack = [];

    for (let item of exp) {
        console.log(item);
        console.log(stack);
        if (item == '(' || item == '{' || item == '[') {
            stack.push(item);
        } else {
            switch (item) {

                case ')': {

                    if (stack.pop() != '(') return false;
                    break;
                }
                case '}': {

                    if (stack.pop() != '{') return false;
                    break;
                }
                case ']': {

                    if (stack.pop() != '[') return false;
                    break;
                }

            }
        }
    }
    return true;
}

console.log(isBalanced('{([])}'));