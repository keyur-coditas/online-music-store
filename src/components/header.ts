import { html, LitElement, css, TemplateResult } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import { mediaQueries } from './media-queries';
import * as EVENTS from './constants';

@customElement('str-header')
export class storeHeaderElement extends LitElement {
  @property({ type: String })
  strlogo;

  @property({ type: String })
  changeLanguageButtonText;

  @property({ type: String })
  changeThemeButtonText;

  @property({ type: String })
  addProductButtonText;

  @property({ type: String })
  logoutButtonText;

  @property({ type: Boolean })
  isAuthenticated;

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

  onClick(eventType: string) {
    const onAddProduct = new CustomEvent(eventType, {});
    this.dispatchEvent(onAddProduct);
  }

  getLoggedInUserButtonsHtml() {
    let authenticatedButtons: TemplateResult = html``;
    if (this.isAuthenticated) {
      authenticatedButtons = html`
        <str-form-btn
          aria-label="Add Product"
          buttonText="${this.addProductButtonText}"
          @click="${this.onClick.bind(this, EVENTS.ADD_PRODUCT)}"
        ></str-form-btn>
        <str-form-btn
          buttonText="${this.logoutButtonText}"
          @click="${this.onClick.bind(this, EVENTS.LOGOUT)}"
          aria-label="Log out"
        ></str-form-btn>
      `;
    }
    return authenticatedButtons;
  }

  render() {
    let authenticatedButtons: TemplateResult = this.getLoggedInUserButtonsHtml();
    return html`
      <div class="header">
        <img
          src="${this.strlogo}"
          alt="App Logo"
          tabindex="0"
          aria-label="App logo"
        />
        <div class="header-logout">
          <str-form-btn
            @click="${this.onClick.bind(this, EVENTS.CHANGE_LANGUAGE)}"
            aria-label="Change language"
            buttonText="${this.changeLanguageButtonText}"
          ></str-form-btn>
          <str-form-btn
            buttonText="${this.changeThemeButtonText}"
            @click="${this.onClick.bind(this, EVENTS.CHANGE_THEME)}"
            aria-label="Change theme"
          ></str-form-btn>
          ${authenticatedButtons}
        </div>
      </div>
    `;
  }
}
