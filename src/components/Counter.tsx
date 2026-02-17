import { signal } from "@preact/signals";
import { h } from "preact";

const count = signal(0);

export default function Counter() {
  return (
    <div class="p-8 bg-zinc-800 rounded-2xl text-center mt-12">
      <p class="text-3xl mb-6">Лічильник: {count.value}</p>
      <button
        onClick={() => count.value++}
        class="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg"
      >
        +1 (Preact + Signals)
      </button>
    </div>
  );
}
