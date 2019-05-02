import { Component } from '@stencil/core';

@Component({
  tag: 'svg-panel',
  styleUrl: 'svg-panel.css',
})
export class SvgPanel {
  render() {
    return (
      <div>
        <p>Hello SvgPanel!</p>
      </div>
    );
  }
}
