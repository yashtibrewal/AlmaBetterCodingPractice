import { implementBubbleSort, mergeSort } from "../../../module2/Chapter2/lesson1.mjs";

test('empty array should return empty array - bubble sort', () => {
    const result = implementBubbleSort([]);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
});

test('randomly placed elements should return sorted array - bubble sort', () => {
    const result = implementBubbleSort([3,99,14,12,41]);
    expect(Array.isArray(result)).toBe(true);
    expect(result.toString()).toBe([3,12,14,41,99].toString());
});

test('decending order should return ascending order - bubble sort', () => {
    const result = implementBubbleSort([99,41,14,12,3]);
    expect(Array.isArray(result)).toBe(true);
    expect(result.toString()).toBe([3,12,14,41,99].toString());
});

test('empty array should return empty array - merge sort', () => {
    const input = [];
    mergeSort(input,0,0);
    console.log(input)
    expect(Array.isArray(input)).toBe(true);
    expect(input.length).toBe(0);
});

test('randomly placed elements should return sorted array - merge sort', () => {
    const input = [3,99,14,12,41];
    mergeSort(input,0,4);
    expect(Array.isArray(input)).toBe(true);
    expect(input.toString()).toBe([3,12,14,41,99].toString());
});

test('decending order should return ascending order - merge sort', () => {
    const input =[99,41,14,12,3]
    mergeSort(input,0,4);
    expect(Array.isArray(input)).toBe(true);
    expect(input.toString()).toBe([3,12,14,41,99].toString());
});