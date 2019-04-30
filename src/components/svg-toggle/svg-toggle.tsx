import { Component, Element, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'svg-toggle',
  styleUrl: 'svg-toggle.css',
  shadow: true,
})
export class SvgToggle {
  private svgRoot: SVGGraphicsElement;
  private toggleGroup: SVGGraphicsElement;
  private toggleIndicator: SVGGraphicsElement;

  @Element() el: HTMLElement;

  @State() state: {
    isSelected: boolean;
  };

  @Prop() toggleType: 'check' | 'switch' = 'switch';

  /**
   * Defaults to true
   */
  @Prop() preserveAspectRatios: string;
  /**
   * Describes the shape of the container of the toggle.
   */
  @Prop()
  toggleContainerDefinition: string = `<rect ry="50" rx="50" height="100" width="200" id="rect3868"/>`;
  /**
   * Describes the
   */
  @Prop()
  toggleIndicatorDefinition: string = `<circle r="45" cx="150" cy="50" id="path3870-2"   />`;

  /**
   * The viewbox of the SVG
   */
  @Prop() viewBox: string = '0 0 200 100';

  componentWillLoad() {
    this.state = {
      isSelected: false,
    };
  }
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
    this.state.isSelected = !this.state.isSelected;
    if (this.state.isSelected) {
      this.toggleIndicator.classList.add('selected-state');
    } else {
      this.toggleIndicator.classList.remove('selected-state');
    }
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
        <g ref={(el) => (this.toggleGroup = el as SVGGraphicsElement)}>
          <rect
            ry="50"
            rx="50"
            height="100"
            width="200"
            id="rect3868"
            class="svg-toggle-container"
          />
          <circle
            ref={(el) => (this.toggleIndicator = el as SVGGraphicsElement)}
            r="45"
            cx="50"
            cy="50"
            id="path3870-2"
            class="svg-toggle-indicator"
          />
        </g>
      </svg>
    );
  }
}
