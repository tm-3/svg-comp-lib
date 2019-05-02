import { Component } from '@stencil/core';

@Component({
  tag: 'svg-text-box',
  styleUrl: 'svg-text-box.css',
})
export class SvgTextBox {
  render() {
    return (
      <div>
        <p>Hello SvgTextBox!</p>
      </div>
    );
  }
}
