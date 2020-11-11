import { html, LitElement, css } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import {mediaQueries} from './media-queries';

@customElement('str-image-input')
export class storeImageInputElement extends LitElement {

    @property()
    ariaLabel: string;

    @property()
    isReadonly: string;

    @property()
    inputValue: string = null;

    @property()
    labelValue: string = "Choose an image";

    static get styles() {
        return [
            css`
        .image-label {
            font-size: 12px;
            margin: 10px;
            display: block;
            color: #666666;
        }
    `,
      mediaQueries  ];
    }

    inputHandler(event) {
        const inputValueChanged = new CustomEvent('inputValueChanged', {
            detail: {
                value: event.path[0].files[0]
            },
        });
        this.dispatchEvent(inputValueChanged);
    }

    render() {
        let readonlyValue;
        if (this.isReadonly === 'true') {
            readonlyValue = true;
        }
        return html`  
        <label for="" class="image-label" >${this.labelValue}</label>
        <input aria-label="${this.ariaLabel}" type="file" path="../assets/images/" ?readonly= "${readonlyValue}"
         @change="${this.inputHandler}">
    `;
    }
}