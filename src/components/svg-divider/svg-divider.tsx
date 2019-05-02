import { Component } from '@stencil/core';

@Component({
  tag: 'svg-divider',
  styleUrl: 'svg-divider.css',
})
export class SvgDivider {
  render() {
    return (
      <div>
        <p>Hello SvgDivider!</p>
      </div>
    );
  }
}
