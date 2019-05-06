import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'svg-button',
  styleUrl: 'svg-button.css',
  shadow: false,
})
export class SvgButton {
  private buttonRoot: SVGElement;

  @Prop() viewBox: string = '0 0 100 50';
  @Prop() buttonText: string;

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={this.viewBox}
        class="svg-button-normal"
        ref={(el) => (this.buttonRoot = el as SVGGraphicsElement)}
      >
        {/* <defs>
          <rect id="svg-button-container" width="100" height="50" stroke="black" stroke-width="2" />
        </defs>
        <g id="svg-button-container-group">
          <use href="#svg-button-container" />
          <text fill="black" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            {this.buttonText}
          </text>
        </g> */}
        <image href="assets/puppy.jpg" />
      </svg>
    );
  }
}
