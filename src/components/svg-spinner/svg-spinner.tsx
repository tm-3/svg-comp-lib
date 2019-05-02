import { Component } from '@stencil/core';

@Component({
  tag: 'svg-spinner',
  styleUrl: 'svg-spinner.css',
})
export class SvgSpinner {
  render() {
    return (
      <div>
        <p>Hello SvgSpinner!</p>
      </div>
    );
  }
}
