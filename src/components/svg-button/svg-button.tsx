import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'svg-button',
  styleUrl: 'svg-button.css',
  shadow: true,
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
        preseveAspectRataio="none"
        width="100%"
        height="100%"
        ref={(el) => (this.buttonRoot = el as SVGGraphicsElement)}
        // class="svg-button-container"
      >
        <defs>
          <rect
            id="svg-button-container"
            width="100%"
            height="100%"
            vector-effect="non-scaling-stroke"
          />
          <text
            id="svg-button-text"
            x="50%"
            y="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            vector-effect="non-scaling-stroke"
          >
            {this.buttonText}
          </text>
          {/** Write a function to programmatically replace the text so this definition can be externalized */}
          <rect />
        </defs>
        <g id="svg-button-container-group">
          <use href="#svg-button-container" class="svg-button-container" />
          <use href="#svg-button-text" class="svg-button-text" />
        </g>
      </svg>
    );
  }
}
