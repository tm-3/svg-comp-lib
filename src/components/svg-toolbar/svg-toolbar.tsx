import { Component } from '@stencil/core';

@Component({
  tag: 'svg-toolbar',
  styleUrl: 'svg-toolbar.css',
})
export class SvgToolbar {
  render() {
    return (
      <div>
        <p>Hello SvgToolbar!</p>
      </div>
    );
  }
}
