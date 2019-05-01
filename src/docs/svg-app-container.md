# svg-app-container

The app container component holds the state for all child components in the svg-comp-lib framework. Every child component will register itself when it renders by emitting a 'registerComponent' event. This event contains the control ID, all of the internal state that the component holds, and any data model informmation that was defined. The app container then records this information in its own state tree. All registered components will capture events from their parent app-container component.
