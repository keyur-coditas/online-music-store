import { html, LitElement, css } from 'lit-element';
import { customElement, property  } from 'lit-element/lib/decorators';
import {mediaQueries} from './media-queries';

@customElement('str-btn')
export class storeButton extends LitElement {

  @property({type:String})
  buttonText = 'click here';

  static get styles() {
    return [
      css`
    .str-btn {
      padding: 8px;
      border: 1px solid #c8c8c8;
      box-shadow: .5px .5px #c8c8c8;
      margin: 1rem;
      background-color: var(--btn-background);
    color: var(--btn-color);
  }
  str-btn.active { 
    transform: scale(0.98); 
    /* Scaling button to 0.98 to its original size */ 
    -webkit-box-shadow: -1px -1px 5px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px -1px 5px -1px rgba(0,0,0,0.75);
    box-shadow: -1px -1px 5px -1px rgba(0,0,0,0.75);
} 
    `,
    mediaQueries
    ];
  }


  render(){
    return html`<button type="button" class="str-btn">${this.buttonText}</button>`;
  }
}