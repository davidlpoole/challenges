import MergeSort from "../../islands/merge/MergeSort.tsx";
import LinkButton from "../../components/LinkButton.tsx";

export default function Home() {
  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold pb-4">Merge Sort</h1>
          <p>
            Merge Sort is a divide-and-conquer algorithm that sorts an array by
            recursively dividing it into smaller sub-arrays, sorting them, and
            then merging them back together.
          </p>
          <p class="text-2xl pt-6">Example</p>
          <p class="">
            Use the following form to add numbers to an array which will then be
            sorted using the merge sort algorithm.
          </p>
          <MergeSort />
        </div>
      </div>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center pb-6 gap-2">
          <LinkButton href="/">
            Home
          </LinkButton>
          <LinkButton
            href="https://github.com/davidlpoole/challenges/blob/main/utils/sort.ts"
            target="_blank"
          >
            <img
              class="inline-block mr-1 pb-1"
              src="/brand-github.svg"
              width="20"
              height="20"
              alt="the GitHub logo: OctoCat"
            />
            View full <strong>sort.ts</strong> on GitHub
          </LinkButton>
        </div>
        <div>
          <pre>
          <code class='text-gray-500'>
  {`export default function mergeSort(unsorted: number[]): number[] {
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
}`}
</code>
          </pre>
        </div>
      </div>
    </>
  );
}
