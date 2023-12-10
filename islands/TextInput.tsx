import { h } from "https://esm.sh/preact@10.19.2";
import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface TextInputProps {
  text: Signal<string>;
  list: Signal<number[]>;
}

export default function TextInput(props: TextInputProps) {
  function handleSubmit(e: h.JSX.TargetedEvent<HTMLFormElement>) {
    e.preventDefault();
    props.list.value = [...props.list.value, Number(props.text.value)];
    props.text.value = "";
  }
  return (
    <>
      <div>
        Add a number to the unsorted list
      </div>
      <form class="flex gap-2 py-6" onSubmit={(e) => handleSubmit(e)}>
        <input
          id="addNumber"
          class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
          type="number"
          required
          value={props.text.value}
          onChange={(e) =>
            props.text.value = (e.target as HTMLInputElement)?.value}
        >
        </input>
        <Button>Add</Button>
      </form>
    </>
  );
}
