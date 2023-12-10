import { describe, it } from "https://deno.land/std@0.208.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

import mergeSort, { sort } from "./sort.ts";

describe("mergeSort", () => {
  it("should return an empty array when given an empty array", () => {
    const unsorted: number[] = [];
    const sorted = mergeSort(unsorted);
    const expected: number[] = [];
    assertEquals(sorted, expected);
  });

  it("should return the same array when given an array with only one element", () => {
    const unsorted: number[] = [5];
    const sorted = mergeSort(unsorted);
    const expected = [5];
    assertEquals(sorted, expected);
  });

  it("should sort the array in ascending order when given an unsorted array", () => {
    const unsorted: number[] = [9, 3, 7, 2, 5, 1, 8, 4, 6];
    const sorted = mergeSort(unsorted);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    assertEquals(sorted, expected);
  });

  it("should handle arrays with repeated elements", () => {
    const unsorted: number[] = [5, 2, 7, 2, 1, 5, 9, 7];
    const sorted = mergeSort(unsorted);
    const expected = [1, 2, 2, 5, 5, 7, 7, 9];
    assertEquals(sorted, expected);
  });
});

describe("sort", () => {
  it("should sort two empty arrays", () => {
    const listA: number[] = [];
    const listB: number[] = [];
    const expected: number[] = [];

    const result = sort(listA, listB);

    assertEquals(result, expected);
  });

  it("should sort two arrays with equal elements", () => {
    const listA: number[] = [1, 3, 5];
    const listB: number[] = [2, 4, 6];
    const expected: number[] = [1, 2, 3, 4, 5, 6];

    const result = sort(listA, listB);

    assertEquals(result, expected);
  });

  it("should sort two arrays with overlapping elements", () => {
    const listA: number[] = [1, 3, 5, 7];
    const listB: number[] = [2, 4, 6];
    const expected: number[] = [1, 2, 3, 4, 5, 6, 7];

    const result = sort(listA, listB);

    assertEquals(result, expected);
  });

  it("should sort two arrays with one empty array", () => {
    const listA: number[] = [1, 3, 5];
    const listB: number[] = [];
    const expected: number[] = [1, 3, 5];

    const result = sort(listA, listB);

    assertEquals(result, expected);
  });
});
