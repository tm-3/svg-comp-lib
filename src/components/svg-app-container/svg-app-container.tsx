import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'svg-app-container',
  styleUrl: 'svg-app-container.css',
  shadow: true,
})
export class SvgAppContainer {
  @Listen('registerComponent')
  handleRegisterComponent() {}

  @Listen('registerModel')
  handleRegisterModel() {}

  render() {
    return (
      <div>
        <slot name="data" />
        <slot name="layout" />
        <slot name="routes" />
      </div>
    );
  }
}
