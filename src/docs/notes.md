# components

- all components emit events whenever their state changes
- all components have an enabled, visible, and none display state
- elements within components can be replaced by replacing their SVG definitions
- all components observe their app-container's state and watch for changes. (Need a better name for app-container)
- Events should emit:
  - ID (all do by default)
  - Value - If a control contains a value such as text, drop down, etc.
  - State - All state variables
  - Model Path - Need to think about this, but the controls should build an object that can be used in API's.
- Validation rules should be applied when state changes
- user input controls should have a valid/invalid state along with an optional message detailing what is wrong. This should be a state variable and passed in via validation method?
- Accessibility / Aria values need to be considered.
