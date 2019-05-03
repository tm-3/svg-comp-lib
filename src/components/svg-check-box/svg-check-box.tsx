import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'svg-check-box',
  styleUrl: 'svg-check-box.css',
})
export class SvgCheckBox {
  @Prop() viewBox: string = '0 0 50 50';

  render() {
    return (
      <svg viewBox={this.viewBox}>
        <g id="checkbox" />
        <g id="checkbox-label" />
      </svg>
    );
  }
}
