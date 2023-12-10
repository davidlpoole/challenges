/**
 * Sorts an array of numbers using the merge sort algorithm.
 *
 * @param {number[]} unsorted - The array of numbers to be sorted.
 * @return {number[]} - The sorted array of numbers.
 */
export default function mergeSort(unsorted: number[]): number[] {
  // Base case: If the array has 0 or 1 element, it is already sorted
  if (unsorted.length <= 1) return unsorted;

  // Split the array into two halves
  const splitIndex = Math.floor(unsorted.length / 2);
  const listA = mergeSort(unsorted.slice(0, splitIndex)); // Sort the first half recursively
  const listB = mergeSort(unsorted.slice(splitIndex)); // Sort the second half recursively

  // Merge the sorted halves and return the result
  return sort(listA, listB);
}

/**
 * Sorts two lists and returns a new sorted list that combines the elements from both lists in ascending order.
 *
 * @param {number[]} listA - The first list to be sorted.
 * @param {number[]} listB - The second list to be sorted.
 * @return {number[]} - A new sorted list that contains all the elements from listA and listB in ascending order.
 */
export function sort(listA: number[], listB: number[]): number[] {
  // Create an empty array to store the sorted elements
  const result = [];

  // Initialize two pointers to track the current position in each list
  let i = 0;
  let j = 0;

  // Compare the elements from both lists and add the smaller element to the result array
  while (i < listA.length && j < listB.length) {
    if (listA[i] < listB[j]) {
      result.push(listA[i]);
      i++;
    } else {
      result.push(listB[j]);
      j++;
    }
  }

  // Add the remaining elements from listA and listB to the result array
  return result.concat(listA.slice(i), listB.slice(j));
}
