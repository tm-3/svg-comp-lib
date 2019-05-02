import { Component } from '@stencil/core';

@Component({
  tag: 'svg-list-item',
  styleUrl: 'svg-list-item.css',
})
export class SvgListItem {
  render() {
    return (
      <div>
        <p>Hello SvgListItem!</p>
      </div>
    );
  }
}
