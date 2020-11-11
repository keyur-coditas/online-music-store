
import { html, LitElement, css, TemplateResult } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import {mediaQueries} from './media-queries';

@customElement('str-header')
export class storeHeaderElement extends LitElement {


    @property()
    strlogo: string;

    @property()
    changeLanguageButtonText: string;

    @property()
    changeThemeButtonText: string;

    @property()
    addProductButtonText: string;

    @property()
    logoutButtonText: string;

    @property()
    isAuthenticated: string;

    static get styles() {
        return [
            css`
        .header-logout {
            display:flex;
            align-items: center;
            flex-wrap: wrap;
        }

        .header{
            display: flex;
            justify-content: space-between;
            padding:15px;
            background-color: var(--header-background-color);
            flex-wrap: wrap;
        }
    `,
    mediaQueries
        ];
    }

    changeLanguage() {
        const onChangeLanguage = new CustomEvent('onChangeLanguage', {});
        this.dispatchEvent(onChangeLanguage);
    }
    
    addProduct() {
        const onAddProduct = new CustomEvent('onAddProduct', {});
        this.dispatchEvent(onAddProduct);
    }

    changeTheme() {
        const onChangeTheme = new CustomEvent('onChangeTheme', {});
        this.dispatchEvent(onChangeTheme);
    }

    logout() {
        const onLogout = new CustomEvent('onLogout', {});
        this.dispatchEvent(onLogout);
    }

    render() {
        let authenticatedButtons:TemplateResult = html``;
        if(this.isAuthenticated === 'true') {
            authenticatedButtons = html`
            <str-btn aria-label="Add Product" buttonText="${this.addProductButtonText}" @click="${this.addProduct}"></str-btn>
            <str-btn buttonText="${this.logoutButtonText}" @click="${this.logout}" aria-label="Log out"></str-btn>
           `
        }
        return html`  
        <div class="header">
        <img src="${this.strlogo}" alt="App Logo" tabindex="0" aria-label="App logo">
        <div class="header-logout">
                <str-btn @click="${this.changeLanguage}" aria-label="Change language" buttonText="${this.changeLanguageButtonText}"></str-btn>
                <str-btn buttonText="${this.changeThemeButtonText}" @click="${this.changeTheme}" aria-label="Change theme"></str-btn>
                ${authenticatedButtons}
        </div>
        </div>
    `;
    }
}

