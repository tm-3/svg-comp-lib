# components

- all components emit events whenever their state changes
- all components have an enabled, visible, and none display state
- elements within components can be replaced by replacing their SVG definitions. This can be done globally by using the actual name
- all components observe their app-container's state and watch for changes. (Need a better name for app-container)
- Events should emit:
  - ID (all do by default)
  - Value - If a control contains a value such as text, drop down, etc.
  - State - All state variables
  - Model Path - Need to think about this, but the controls should build an object that can be used in API's.
- Validation rules should be applied when state changes
- user input controls should have a valid/invalid state along with an optional message detailing what is wrong. This should be a state variable and passed in via validation method?
- Accessibility / Aria values need to be considered.

## specifity

- SVG Definitions take priority over everything
- CSS classes can be overridden, but not merged
- Apply CSS classes to <use> elements in component definitions
- All components should have properties that allow each individual element to be replaced
- slotted only works with shadow dom

## Global Config

- consider using data-\* to set global properties or at least properties from within an app-container.
  - This could be used to set the path to a file containing SVG definitions
  - Doing this at the app-container control level could allow for multiple files
  - Components could then be configured from a single property when they 'register' themselves in the app-container

## Shadow DOM

- prefer this to all scoped css or cascade
- When shadow DOM is used, definitions must come from a

## Filters

- svg filters do not seem to work in shadow dom
- Look to do this programmatically
