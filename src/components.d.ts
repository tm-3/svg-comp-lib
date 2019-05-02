/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface SvgAppContainer {}
  interface SvgAppContainerAttributes extends StencilHTMLAttributes {}

  interface SvgButton {}
  interface SvgButtonAttributes extends StencilHTMLAttributes {}

  interface SvgComponentGroup {}
  interface SvgComponentGroupAttributes extends StencilHTMLAttributes {}

  interface SvgLabel {}
  interface SvgLabelAttributes extends StencilHTMLAttributes {}

  interface SvgToggle {
    'label': string;
    'labelPosition': 'left' | 'right' | 'top' | 'bottom';
    /**
    * Defaults to true
    */
    'preserveAspectRatios': string;
    /**
    * URL to alternate definition
    */
    'toggleContainerUrl': string;
    /**
    * Describes the
    */
    'toggleIndicatorUrl': string;
    'toggleOrientation': 'horizontal' | 'vertical';
    /**
    * The viewbox of the SVG
    */
    'viewBox': string;
  }
  interface SvgToggleAttributes extends StencilHTMLAttributes {
    'label'?: string;
    'labelPosition'?: 'left' | 'right' | 'top' | 'bottom';
    /**
    * Defaults to true
    */
    'preserveAspectRatios'?: string;
    /**
    * URL to alternate definition
    */
    'toggleContainerUrl'?: string;
    /**
    * Describes the
    */
    'toggleIndicatorUrl'?: string;
    'toggleOrientation'?: 'horizontal' | 'vertical';
    /**
    * The viewbox of the SVG
    */
    'viewBox'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'SvgAppContainer': Components.SvgAppContainer;
    'SvgButton': Components.SvgButton;
    'SvgComponentGroup': Components.SvgComponentGroup;
    'SvgLabel': Components.SvgLabel;
    'SvgToggle': Components.SvgToggle;
  }

  interface StencilIntrinsicElements {
    'svg-app-container': Components.SvgAppContainerAttributes;
    'svg-button': Components.SvgButtonAttributes;
    'svg-component-group': Components.SvgComponentGroupAttributes;
    'svg-label': Components.SvgLabelAttributes;
    'svg-toggle': Components.SvgToggleAttributes;
  }


  interface HTMLSvgAppContainerElement extends Components.SvgAppContainer, HTMLStencilElement {}
  var HTMLSvgAppContainerElement: {
    prototype: HTMLSvgAppContainerElement;
    new (): HTMLSvgAppContainerElement;
  };

  interface HTMLSvgButtonElement extends Components.SvgButton, HTMLStencilElement {}
  var HTMLSvgButtonElement: {
    prototype: HTMLSvgButtonElement;
    new (): HTMLSvgButtonElement;
  };

  interface HTMLSvgComponentGroupElement extends Components.SvgComponentGroup, HTMLStencilElement {}
  var HTMLSvgComponentGroupElement: {
    prototype: HTMLSvgComponentGroupElement;
    new (): HTMLSvgComponentGroupElement;
  };

  interface HTMLSvgLabelElement extends Components.SvgLabel, HTMLStencilElement {}
  var HTMLSvgLabelElement: {
    prototype: HTMLSvgLabelElement;
    new (): HTMLSvgLabelElement;
  };

  interface HTMLSvgToggleElement extends Components.SvgToggle, HTMLStencilElement {}
  var HTMLSvgToggleElement: {
    prototype: HTMLSvgToggleElement;
    new (): HTMLSvgToggleElement;
  };

  interface HTMLElementTagNameMap {
    'svg-app-container': HTMLSvgAppContainerElement
    'svg-button': HTMLSvgButtonElement
    'svg-component-group': HTMLSvgComponentGroupElement
    'svg-label': HTMLSvgLabelElement
    'svg-toggle': HTMLSvgToggleElement
  }

  interface ElementTagNameMap {
    'svg-app-container': HTMLSvgAppContainerElement;
    'svg-button': HTMLSvgButtonElement;
    'svg-component-group': HTMLSvgComponentGroupElement;
    'svg-label': HTMLSvgLabelElement;
    'svg-toggle': HTMLSvgToggleElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
