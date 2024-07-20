function longestConsecutiveSubsequence(arr) {
    // Your code goes here

    arr = arr.sort((a, b) => a - b);

    let sequence = 1, maxSequence = 1;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] - 1 == arr[i - 1]) {
            sequence++;
        } else {
            if (sequence > maxSequence) maxSequence = sequence;
            sequence = 1;
        }

    }
    if (sequence > maxSequence) maxSequence = sequence;

    return maxSequence;
}