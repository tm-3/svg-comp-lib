import { Component } from '@stencil/core';

@Component({
  tag: 'svg-button',
  styleUrl: 'svg-button.css',
  shadow: true,
})
export class SvgButton {
  render() {
    return (
      <div>
        <p>Hello SvgButton!</p>
      </div>
    );
  }
}
