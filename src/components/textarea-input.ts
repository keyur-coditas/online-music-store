import { html, LitElement, css } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import {mediaQueries} from './media-queries';

@customElement('str-textarea')
export class storeTextareaElement extends LitElement {

    @property()
    ariaLabel: string;


    @property()
    inputPlaceholder: string;

    @property()
    isReadonly: string;

    @property()
    inputValue: string = null;

    @property()
    rows: string = "10";

    @property()
    columns: string = "30";

    static get styles() {
        return [
            css`
    .str-textarea {
        width: 20rem;
        border: 1px solid #bdbdbd;
        border-radius: 5px;
        margin: 15px auto 0px 0px;
        padding-left: 10px;
    }
    `,
    mediaQueries
        ];
    }


    inputHandler(event) {
        const inputValueChanged = new CustomEvent('inputValueChanged', {
            detail: {
                value: event.composedPath()[0].value
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
    <textarea aria-label="${this.ariaLabel}" class="str-textarea" cols="${this.columns}" rows="${this.rows}"
     @input=${this.inputHandler}  placeholder="${this.inputPlaceholder}" ?readonly= "${readonlyValue}" .value="${this.inputValue}">
    </textarea>`;
    }
}