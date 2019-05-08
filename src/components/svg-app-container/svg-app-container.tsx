import { Component, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'svg-app-container',
  styleUrl: 'svg-app-container.css',
  shadow: false,
})
export class SvgAppContainer {
  @Prop({ context: 'store' })
  totalCount: number = 1;

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
