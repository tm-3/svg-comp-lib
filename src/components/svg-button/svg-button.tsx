import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'svg-button',
  styleUrl: 'svg-button.css',
  shadow: true,
})
export class SvgButton {
  private buttonRoot: SVGElement;
  private buttonTextElement: SVGGraphicsElement;
  private defUrl: string = '/assets/ComponentDefs.svg';

  @Element() rootElement: HTMLElement;
  @Prop() viewBox: string = '0 0 100 50';
  @Prop() buttonText: string;
  @Prop() disabled: boolean = true;

  componentWillLoad() {
    console.log(this.rootElement.dataset.definitionsUrl);
  }
  componentDidLoad() {}

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={this.viewBox}
        preseveAspectRataio="none"
        ref={(el) => (this.buttonRoot = el as SVGGraphicsElement)}
        class="svg-button-host"
      >
        <defs>
          <text
            id="svg-button-text"
            // font-size="10"
            // dominant-baseline="middle"
            text-anchor="middle"
            vector-effect="non-scaling-stroke"
            x="50%"
            y="50%"
          >
            {this.buttonText}
          </text>
        </defs>
        <g id="svg-button-container-group">
          <use href={this.defUrl + '#svg-button-container'} class="svg-button-container" />
          <use
            ref={(el) => (this.buttonTextElement = el as SVGGraphicsElement)}
            href="#svg-button-text"
            class="svg-button-text"
          />
        </g>
      </svg>
    );
  }
}
