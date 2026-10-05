import { useState } from "react";
import Disclosure from "./components/Disclosure";
import Modal from "./components/Modal";
import ShadcnComparison from "./components/ShadcnComparison";
import Tabs from "./components/Tabs";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="playground">
      <h1>Accessible Components Playground</h1>

      <section>
        <h2>Modal</h2>
        <p>Open the dialog, then try Tab, Shift+Tab, and Escape.</p>
        <button type="button" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>
      </section>

      <section>
        <h2>Tabs</h2>
        <p>Use the arrow keys to move between tabs; Home and End jump to the first and last.</p>
        <Tabs />
      </section>

      <section>
        <h2>Disclosure</h2>
        <p>Use Enter or Space to expand and collapse each section.</p>
        <Disclosure />
      </section>

      <ShadcnComparison />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

export default App;
