import { Component, Element, Event, EventEmitter, Method, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'svg-toggle',
  styleUrl: 'svg-toggle.css',
})
export class SvgToggle {
  private svgRoot: SVGGraphicsElement;
  private toggleGroup: SVGGraphicsElement;
  private toggleIndicator: SVGGraphicsElement;

  @Element() el: HTMLElement;

  @State() isSelected: boolean = false;

  @Prop() toggleOrientation: 'horizontal' | 'vertical' = 'horizontal';
  @Prop() label: string;
  @Prop() labelPosition: 'left' | 'right' | 'top' | 'bottom' = 'right';

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
   * The viewbox of the component
   */
  @Prop() viewBox: string = '0 0 200 100';

  @Watch('isSelected') stateHandler() {
    // console.log(someUrl);

    if (this.isSelected) {
      this.toggleIndicator.classList.add('svg-toggle-selected-state');
    } else {
      this.toggleIndicator.classList.remove('svg-toggle-selected-state');
    }
  }

  @Event() toggled: EventEmitter;

  @Method()
  toggleSelected() {
    this.isSelected = !this.isSelected;
    this.toggled.emit({ id: this.el.id, selected: this.isSelected });
  }

  componentWillLoad() {
    //should I check for state in the state container here?
    //Or should I just handle that in the componentDidLoad method?
  }
  componentDidLoad() {
    this.registerComponent();

    // this.svgRoot.innerHTML = this.toggleContainerDefinition + this.toggleIndicatorDefinition;
    // indicator.this.svgElement.appendChild(this.toggleIndicatorDefinition);
  }

  registerComponent() {}

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
        onClick={() => this.toggleSelected()}
        ref={(el) => (this.svgRoot = el as SVGGraphicsElement)}
      >
        <g>
          <use
            ref={(el) => (this.toggleGroup = el as SVGGraphicsElement)}
            href={
              this.toggleContainerUrl
                ? this.toggleContainerUrl
                : 'assets/ComponentDefs.svg#svg-toggle-container'
            }
            class="svg-toggle-container"
          />
        </g>
        <g>
          <use
            ref={(el) => (this.toggleIndicator = el as SVGGraphicsElement)}
            href={
              this.toggleIndicatorUrl
                ? this.toggleIndicatorUrl
                : 'assets/ComponentDefs.svg#svg-toggle-indicator'
            }
            class="svg-toggle-indicator"
          />
        </g>
      </svg>
    );
  }
}
