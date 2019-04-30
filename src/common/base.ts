import { Event, EventEmitter } from '@stencil/core';

/**
 * Registers a component with the nearest svg-app container. Each component will have a unique ID and its state will map to an observable
 * in the parent svg-app container.
 */
export function registerComponent(data?: any) {
  if (data) {
    console.log(JSON.stringify(data));
  }
  console.log('registered');
}
