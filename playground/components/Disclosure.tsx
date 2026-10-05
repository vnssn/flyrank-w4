import { useId, useState } from "react";

const sections = [
  {
    title: "What makes this modal accessible?",
    content: "It moves focus into the dialog, traps Tab navigation, closes with Escape, and restores focus to its opener.",
  },
  {
    title: "How do the tabs work?",
    content: "The selected tab is the only tab stop in the tab list. Arrow keys, Home, and End change the selected tab.",
  },
  {
    title: "Why use native buttons?",
    content: "Buttons already support keyboard activation with Enter and Space, so the disclosure triggers need no custom key handlers.",
  },
];

function Disclosure() {
  const [openSections, setOpenSections] = useState<boolean[]>(() => sections.map(() => false));
  const id = useId();

  function toggleSection(index: number) {
    setOpenSections((current) =>
      current.map((isOpen, sectionIndex) => (sectionIndex === index ? !isOpen : isOpen))
    );
  }

  return (
    <div className="disclosures">
      {sections.map((section, index) => {
        const triggerId = `${id}-trigger-${index}`;
        const panelId = `${id}-panel-${index}`;
        const isOpen = openSections[index] ?? false;

        return (
          <section className="disclosure" key={section.title}>
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleSection(index)}
              >
                {section.title}
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen}>
              <p>{section.content}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Disclosure;