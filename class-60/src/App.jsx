//Module-2: Adding Interactivity // Chapters: Queueing a Series of State Updates, Updating Objects in State(Part-1)

import Counter from "./components/Counter"
import Form from "./components/Form"
import MovingDot from "./components/MovingDot"

export default function App() {
  return (
    <>
      <Counter/> <br/> <br/>
      <MovingDot/> <br/> <br/>
      <Form/>
    </>
  )
}






//Note: ## 🔥 React async state update + await (Full Visualization Note)

// ### 📌 Example Code:

// ```js
// async function handleClick() {
//   setPending(pending + 1);
//   await delay(3000);
//   setPending(pending - 1);
//   setCompleted(completed + 1);
// }
// ```

// ---

// ## 🧠 STEP-BY-STEP FLOW (Timeline)

// 🟢 USER CLICK
// ↓
// handleClick() start

// ↓
// 1️⃣ setPending(pending + 1)
// → queue te joma

// ↓
// 2️⃣ await delay(3000)
// → function PAUSE
// → React dhore ney handler sesh

// ↓
// 🔥 QUEUE PROCESS
// 🔥 RENDER #1

// 👉 UI: pending = 1 dekhay

// ---

// ⏱️ 3 SECOND WAIT...

// ---

// ▶️ function RESUME

// ↓
// 3️⃣ setPending(pending - 1)
// → queue te joma

// 4️⃣ setCompleted(completed + 1)
// → queue te joma

// ↓
// 🔥 QUEUE PROCESS
// 🔥 RENDER #2

// 👉 UI:
// pending = -1 ❌
// completed = 1

// ---

// ## ⚠️ PROBLEM (Stale State)

// initial pending = 0

// click →
// setPending(0 + 1) → 1

// after 3s →
// setPending(0 - 1) → -1 ❌ (old value use)

// ---

// ## ✅ CORRECT WAY (Updater Function)

// ```js
// setPending(p => p - 1);
// setCompleted(c => c + 1);
// ```

// ✔ React always latest state use kore
// ✔ pending: 1 → 0
// ✔ completed: 1

// ---

// ## 🧩 CORE CONCEPT

// ✔ Same synchronous block → batching → 1 render
// ❌ await → batching break → new render or multiple render

// ---

// ## 🔁 FINAL FLOW (SHORT)

// click → first update → await pause → render (pending 1)
// → 3s por → next updates → render again

// ---

// ## 🧠 ONE LINE MEMORY

// 👉 await = batching break → multiple render
// 👉 direct state use = stale value risk
// 👉 updater function = always safe ✅

// ---
