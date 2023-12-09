export default function Home() {
  const unsorted = [3, 6, 4, 8, 1, 2];
  const sorted = mergeSort(unsorted);

  function mergeSort(unsorted: number[]): number[] {
    if (unsorted.length <= 1) return unsorted;

    const splitIndex = Math.floor(unsorted.length / 2);
    const listA = mergeSort(unsorted.slice(0, splitIndex));
    const listB = mergeSort(unsorted.slice(splitIndex));
    return sort(listA, listB);
  }

  function sort(listA: number[], listB: number[]): number[] {
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

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold pb-4">Merge Sort</h1>
        <div>Unsorted list: {unsorted.join(", ")}</div>
        <div>Sorted list: {sorted.join(", ")}</div>
      </div>
    </div>
  );
}
