/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface SvgButton {}
  interface SvgButtonAttributes extends StencilHTMLAttributes {}

  interface SvgComponentGroup {}
  interface SvgComponentGroupAttributes extends StencilHTMLAttributes {}

  interface SvgToggle {
    /**
    * Defaults to true
    */
    'preserveAspectRatios': string;
    /**
    * Describes the shape of the container of the toggle.
    */
    'toggleContainerDefinition': string;
    /**
    * Describes the
    */
    'toggleIndicatorDefinition': string;
    'toggleType': 'check' | 'switch';
    /**
    * The viewbox of the SVG
    */
    'viewBox': string;
  }
  interface SvgToggleAttributes extends StencilHTMLAttributes {
    /**
    * Defaults to true
    */
    'preserveAspectRatios'?: string;
    /**
    * Describes the shape of the container of the toggle.
    */
    'toggleContainerDefinition'?: string;
    /**
    * Describes the
    */
    'toggleIndicatorDefinition'?: string;
    'toggleType'?: 'check' | 'switch';
    /**
    * The viewbox of the SVG
    */
    'viewBox'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyComponent': Components.MyComponent;
    'SvgButton': Components.SvgButton;
    'SvgComponentGroup': Components.SvgComponentGroup;
    'SvgToggle': Components.SvgToggle;
  }

  interface StencilIntrinsicElements {
    'my-component': Components.MyComponentAttributes;
    'svg-button': Components.SvgButtonAttributes;
    'svg-component-group': Components.SvgComponentGroupAttributes;
    'svg-toggle': Components.SvgToggleAttributes;
  }


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
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

  interface HTMLSvgToggleElement extends Components.SvgToggle, HTMLStencilElement {}
  var HTMLSvgToggleElement: {
    prototype: HTMLSvgToggleElement;
    new (): HTMLSvgToggleElement;
  };

  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement
    'svg-button': HTMLSvgButtonElement
    'svg-component-group': HTMLSvgComponentGroupElement
    'svg-toggle': HTMLSvgToggleElement
  }

  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'svg-button': HTMLSvgButtonElement;
    'svg-component-group': HTMLSvgComponentGroupElement;
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
