import { signal } from "@preact/signals";
import { h } from "preact";

const count = signal(0);

export default function PreactTest() {
  return (
    <div class="p-8 bg-zinc-800 rounded-2xl text-center shadow-xl">
      <p class="text-3xl font-bold mb-6 text-cyan-400">
        Preact + Signals: {count.value}
      </p>
      <button
        onClick={() => (count.value += 1)}
        class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition"
      >
        Натисни (клієнтський лічильник)
      </button>
    </div>
  );
}
