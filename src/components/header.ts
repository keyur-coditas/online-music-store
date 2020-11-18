import { html, LitElement, css, TemplateResult } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import { mediaQueries } from './media-queries';
import * as EVENTS from './constants';

@customElement('str-header')
export class storeHeaderElement extends LitElement {

  static get styles() {
    return [
      css`
        .header-logout {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .header {
          display: flex;
          justify-content: space-between;
          padding: 15px;
          background-color: var(--header-background-color);
          flex-wrap: wrap;
        }
      `,
      mediaQueries,
    ];
  }


  render() {
    return html`
      <div class="header">
      <slot name="one"></slot>
      <slot name="two" class="header-logout"></slot>
      </div>
    `;
  }
}
