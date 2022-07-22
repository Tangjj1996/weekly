import { describe, it, expect } from "vitest";
import MinHeap from "../heap";

describe("min heap", () => {
  it("getMin feature", () => {
    const heap = new MinHeap();

    heap.insert(1);
    heap.insert(2);

    expect(heap.getMin()).toBe(1);
  });

  it("remove feature", () => {
    const heap = new MinHeap();

    heap.insert(1);
    heap.insert(2);
    heap.insert(3);
    const res = heap.remove();

    expect(res).toBe(1);
    expect(heap.getMin()).toBe(2);
  });
});
