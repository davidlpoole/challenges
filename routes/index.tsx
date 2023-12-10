import { Button } from "../components/Button.tsx";
import LinkButton from "../components/LinkButton.tsx";

export default function Home() {
  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center gap-2">
          <h1 class="text-4xl font-bold pb-4">Coding Challenges</h1>
          <LinkButton href="/merge">
            Merge Sort
          </LinkButton>
          <LinkButton href="/factory">
            Factory Functions
          </LinkButton>
        </div>
      </div>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center pb-6 gap-2">
          <LinkButton
            href="https://davidpoole.deno.dev"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-copyright inline-block mr-1 pb-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173" />
            </svg>
            David Poole
          </LinkButton>
          <LinkButton
            href="https://github.com/davidlpoole/challenges/"
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
