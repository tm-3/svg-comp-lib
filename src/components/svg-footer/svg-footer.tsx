import { Component } from '@stencil/core';

@Component({
  tag: 'svg-footer',
  styleUrl: 'svg-footer.css',
})
export class SvgFooter {
  render() {
    return (
      <div>
        <p>Hello SvgFooter!</p>
      </div>
    );
  }
}
