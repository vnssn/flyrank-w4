import { useId, useRef, useState } from "react";

const tabs = [
  { label: "Overview", content: "A quick overview of the accessible tabs pattern." },
  { label: "Features", content: "Arrow keys move between tabs; Home and End jump to either end." },
  { label: "Resources", content: "Use the tab key to leave the tab list and enter its panel." },
];

function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const id = useId();

  function activateTab(index: number) {
    const nextIndex = (index + tabs.length) % tabs.length;
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        activateTab(index + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        activateTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        activateTab(0);
        break;
      case "End":
        event.preventDefault();
        activateTab(tabs.length - 1);
        break;
    }
  }

  return (
    <div className="tabs">
      <div className="tab-list" role="tablist" aria-label="Playground examples">
        {tabs.map((tab, index) => {
          const tabId = `${id}-tab-${index}`;
          const panelId = `${id}-panel-${index}`;

          return (
            <button
              key={tab.label}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={panelId}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, index) => {
        const tabId = `${id}-tab-${index}`;
        const panelId = `${id}-panel-${index}`;

        return (
          <div
            key={tab.label}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            tabIndex={0}
            hidden={activeIndex !== index}
            className="tab-panel"
          >
            <p>{tab.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;