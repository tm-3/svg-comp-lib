import { Component } from '@stencil/core';

@Component({
  tag: 'svg-card',
  styleUrl: 'svg-card.css',
})
export class SvgCard {
  render() {
    return (
      <div>
        <p>Hello SvgCard!</p>
      </div>
    );
  }
}
