import { Component } from '@stencil/core';

@Component({
  tag: 'svg-label',
  styleUrl: 'svg-label.css',
})
export class SvgLabel {
  render() {
    return (
      <div>
        <p>Hello SvgLabel!</p>
      </div>
    );
  }
}
