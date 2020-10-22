import { html, LitElement, css } from 'lit-element';
import { customElement, property  } from 'lit-element/lib/decorators';

@customElement('str-form-btn')
export class storeFormButton extends LitElement {

  @property()
  buttonText = 'click here';

  @property()
  isCardButton = false;

  static get styles() {
    return css`
    .str-btn {
      padding: 8px;
      outline: none;
      border: 1px solid #c8c8c8;
      box-shadow: .5px .5px #c8c8c8;
      margin: 1rem;
      background-color: var(--btn-background);
    color: var(--btn-color);
  }
  .str-btn.active { 
    transform: scale(0.98); 
    /* Scaling button to 0.98 to its original size */ 
    -webkit-box-shadow: -1px -1px 5px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px -1px 5px -1px rgba(0,0,0,0.75);
    box-shadow: -1px -1px 5px -1px rgba(0,0,0,0.75);
} 
  .str-submit-btn {
    width:8rem;
    background-color: var(--form-btn-background);
    color: var(--form-btn-color);
}
.str-card-buttons {
  width:4rem;
  background-color: var(--form-btn-background);
  color: var(--form-btn-color);
  margin: 10px;
}
    `;
  }


  render(){
    if(this.isCardButton) {
      return html`<button aria-label="Submit" class="str-card-buttons str-btn">${this.buttonText}</button>`;
    } else {
      return html`<button aria-label="Submit" class="str-submit-btn str-btn">${this.buttonText}</button>`;
    }
  }
}