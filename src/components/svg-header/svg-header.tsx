import { Component } from '@stencil/core';

@Component({
  tag: 'svg-header',
  styleUrl: 'svg-header.css',
})
export class SvgHeader {
  render() {
    return (
      <div>
        <p>Hello SvgHeader!</p>
      </div>
    );
  }
}
