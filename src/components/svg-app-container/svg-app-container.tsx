import { Component, Listen, Prop, Method } from '@stencil/core';

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
    return [
      <div class="svg-app-container-data">
        <slot name="data" />
      </div>,
      <slot name="layout" />,
      <slot name="routes" />,
    ];
  }
}
