import { Component } from '@stencil/core';

@Component({
  tag: 'svg-definitions',
  styleUrl: 'svg-definitions.css',
})
export class SvgDefinitions {
  hostData() {
    return {
      class: {
        'svg-definitions-hide': true,
      },
    };
  }
  render() {
    return (
      <svg>
        <defs>
          <rect
            id="toggleContainer"
            ry="50"
            rx="50"
            height="100"
            width="200"
            filter="#white-glow"
          />
          <circle id="toggleIndicator" r="45" cx="50" cy="50" filter="#white-glow" />
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
      </svg>
    );
  }
}
