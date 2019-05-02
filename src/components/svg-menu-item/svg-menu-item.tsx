import { Component } from '@stencil/core';

@Component({
  tag: 'svg-menu-item',
  styleUrl: 'svg-menu-item.css',
})
export class SvgMenuItem {
  render() {
    return (
      <div>
        <p>Hello SvgMenuItem!</p>
      </div>
    );
  }
}
