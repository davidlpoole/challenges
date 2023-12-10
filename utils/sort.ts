export default function mergeSort(unsorted: number[]): number[] {
  if (unsorted.length <= 1) return unsorted;

  const splitIndex = Math.floor(unsorted.length / 2);
  const listA = mergeSort(unsorted.slice(0, splitIndex));
  const listB = mergeSort(unsorted.slice(splitIndex));
  return sort(listA, listB);
}

export function sort(listA: number[], listB: number[]): number[] {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < listA.length && j < listB.length) {
    if (listA[i] < listB[j]) {
      result.push(listA[i]);
      i++;
    } else {
      result.push(listB[j]);
      j++;
    }
  }
  return result.concat(listA.slice(i), listB.slice(j));
}
