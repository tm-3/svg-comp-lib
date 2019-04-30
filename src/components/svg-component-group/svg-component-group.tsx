import { Component } from '@stencil/core';

@Component({
  tag: 'svg-component-group',
  styleUrl: 'svg-component-group.css',
  shadow: true,
})
export class SvgComponentGroup {
  render() {
    return (
      <div>
        <p>Hello SvgComponentGroup!</p>
      </div>
    );
  }
}
