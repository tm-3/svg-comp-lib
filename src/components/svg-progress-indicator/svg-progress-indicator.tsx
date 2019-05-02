import { Component } from '@stencil/core';

@Component({
  tag: 'svg-progress-indicator',
  styleUrl: 'svg-progress-indicator.css',
})
export class SvgProgressIndicator {
  render() {
    return (
      <div>
        <p>Hello SvgProgressIndicator!</p>
      </div>
    );
  }
}
