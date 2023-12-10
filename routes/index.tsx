import MergeSort from "../islands/MergeSort.tsx";
import LinkButton from "../components/LinkButton.tsx";

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
          <MergeSort />
        </div>
      </div>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <LinkButton
            href="https://github.com/davidlpoole/merge-sort/blob/main/utils/sort.ts"
            target="_blank"
          >
            <img
              class="inline-block mr-1 pb-1"
              src="/brand-github.svg"
              width="20"
              height="20"
              alt="the GitHub logo: OctoCat"
            />
            View code on GitHub
          </LinkButton>
        </div>
      </div>
      <div>
      </div>
    </>
  );
}
