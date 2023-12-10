import { useSignal } from "@preact/signals";
import TextInput from "../merge/TextInput.tsx";
import List from "../../components/List.tsx";
import mergeSort from "../../utils/sort.ts";

export default function MergeSort() {
  const text = useSignal("");
  const unsorted = useSignal([]);
  const sorted = mergeSort(unsorted.value);
  return (
    <>
      <TextInput
        text={text}
        list={unsorted}
        placeholder="Type a number"
      />
      <List name="Unsorted numbers" list={unsorted.value} />
      <List name="Sorted numbers" list={sorted} />
    </>
  );
}
