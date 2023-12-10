import { Button } from "../components/Button.tsx";
import LinkButton from "../components/LinkButton.tsx";

export default function Home() {
  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center gap-2">
          <h1 class="text-4xl font-bold pb-4">Coding Challenges</h1>
          <Button>
            <a href="merge">Merge Sort</a>
          </Button>
          <Button>
            <a href="factory">Factory Functions</a>
          </Button>
        </div>
      </div>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center pb-6">
          <LinkButton
            href="https://github.com/davidlpoole/merge-sort/"
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
    </>
  );
}
