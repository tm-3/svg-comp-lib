import { Component, Element, Method, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'svg-toggle',
  styleUrl: 'svg-toggle.css',
  shadow: false,
})
export class SvgToggle {
  private svgRoot: SVGGraphicsElement;
  private toggleGroup: SVGGraphicsElement;
  private toggleIndicator: SVGGraphicsElement;

  @Element() el: HTMLElement;

  @State() isSelected: boolean = false;

  @Prop() toggleOrientation: 'horizontal' | 'vertical' = 'horizontal';
  @Prop() label: string;

  /**
   * Defaults to true
   */
  @Prop() preserveAspectRatios: string;
  /**
   * URL to alternate definition
   */
  @Prop()
  toggleContainerUrl: string;
  /**
   * Describes the
   */
  @Prop()
  toggleIndicatorUrl: string;

  /**
   * The viewbox of the SVG
   */
  @Prop() viewBox: string = '0 0 200 100';

  @Watch('isSelected') stateHandler() {
    if (this.isSelected) {
      this.toggleIndicator.classList.add('selected-state');
    } else {
      this.toggleIndicator.classList.remove('selected-state');
    }
  }

  componentWillLoad() {}
  componentDidLoad() {
    this.registerComponent();
    console.log(this.svgRoot.children.length);

    // this.svgRoot.innerHTML = this.toggleContainerDefinition + this.toggleIndicatorDefinition;
    // indicator.this.svgElement.appendChild(this.toggleIndicatorDefinition);
  }

  registerComponent() {}

  handleClick(e?: any) {
    if (e) {
      console.log(e);
    }
    this.isSelected = !this.isSelected;
  }

  hostData() {
    return {
      class: {
        'svg-toggle': true,
      },
    };
  }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={this.viewBox}
        class="svg-toggle"
        onClick={(event: UIEvent) => this.handleClick(event)}
        ref={(el) => (this.svgRoot = el as SVGGraphicsElement)}
      >
        <defs>
          <rect ry="50" rx="50" height="100" width="200" id="toggleContainer" />
          <circle r="45" cx="50" cy="50" id="toggleIndicator" />
          <filter id="white-glow" x="-5000%" y="-5000%" width="10000%" height="10000%">
            <feFlood result="flood" flood-color="#ffffff" flood-opacity="1" />
            <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in" />
            <feMorphology in="mask" result="dilated" operator="dilate" radius="2" />
            <feGaussianBlur in="dilated" result="blurred" stdDeviation="5" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g ref={(el) => (this.toggleGroup = el as SVGGraphicsElement)}>
          <use
            href={this.toggleContainerUrl ? this.toggleContainerUrl : '#toggleContainer'}
            class="svg-toggle-container"
          />
          <use
            ref={(el) => (this.toggleIndicator = el as SVGGraphicsElement)}
            href={this.toggleIndicatorUrl ? this.toggleIndicatorUrl : '#toggleIndicator'}
            class="svg-toggle-indicator"
          />
        </g>
      </svg>
    );
  }
}
