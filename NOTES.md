# Week 4 Accessibility Notes

## Modal comparison

- The custom modal traps Tab and Shift+Tab with a local keydown handler and restores focus to the element that opened it. The generated `DialogContent` delegates focus handling to Radix `FocusScope`, with `loop` and `trapped` enabled while the dialog is open, focus guards, and an `onCloseAutoFocus` handler that returns focus to the trigger. The custom implementation covers the required keyboard path, but does not guard against focus being moved outside the dialog by other means.
- The generated `DialogDescription` wraps Radix's description primitive. When present, Radix connects it to the dialog with `aria-describedby`. The custom modal labels its dialog with `aria-labelledby`, but its explanatory paragraph is not associated as the dialog's accessible description.

## Tabs comparison

- The custom tabs implement a horizontal automatic-activation pattern: Left/Right, Home, and End change the selected tab. They do not provide vertical orientation or ArrowUp/ArrowDown navigation. The generated `Tabs` component forwards `orientation` to Radix, whose roving-focus group uses it to provide orientation-appropriate arrow navigation.
- The generated `TabsTrigger` accepts Radix's `disabled` prop, removes disabled triggers from roving focus, and reports their disabled state. The custom component has a fixed list with no disabled-tab support. Radix Tabs also accepts `activationMode`, while the custom tabs always activate as focus moves.

## Keyboard Testing

### Modal

- Tab and Shift+Tab remain trapped inside the dialog.
- Escape closes the dialog.
- Focus returns to the element that opened the dialog.

### Tabs

- ArrowLeft and ArrowRight navigate between tabs.
- Home moves to the first tab.
- End moves to the last tab.
- The active tab and panel stay synchronized.

### Disclosure

- Tab reaches each disclosure button.
- Enter toggles the disclosure.
- Space toggles the disclosure.
- aria-expanded updates correctly.

## What I learned

The custom components make the essential semantics and keyboard behavior visible, but their hand-written focus logic only covers the cases explicitly implemented. Comparing the generated source and its Radix primitives showed how focus scopes, focus guards, description relationships, orientation-aware navigation, and disabled states are handled as reusable component behavior.
