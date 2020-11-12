import { html, LitElement, css, TemplateResult } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import { mediaQueries } from './media-queries';
import * as EVENTS from './constants';
@customElement('str-card')
export class storeCard extends LitElement {

    @property({type:String})
    productName;

    @property({type:String})
    productDescription;

    @property({type:String})
    imageUrl;

    @property({type:Number})
    productPrice;

    @property()
    createdBy;

    @property({type:String})
    currentUser;

    @property({type:Number})
    productId: number;

    @property({type:String})
    updatebuttonText: string;

    @property({type:String})
    deletebuttonText;

    static get styles() {
        return [
            css`
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            border-radius: 5px;
            background-color: #fff;
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            border:none;
            width:100%;
          }
          
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
          }
          
          .product-image {
            border-radius: 5px 5px 0 0;
          }
          
          .container {
            padding: 2px 16px;
          }
          .card-font-small {
              font-size: 0.8rem;
          }
          .card-font-medium {
              font-size: 0.9rem;
          }
          .card-header-margin {
            margin: 0.8rem;
        }
        .card-details-margin {
            margin: 0.5rem;
        }
        .str-card-buttons {
          width:6rem;
          background-color: var(--form-btn-background);
          color: var(--form-btn-color);
          margin: 10px;
        }
        .text-center{
            text-align: center;
        }
    `,
            mediaQueries
        ];
    }

    onProductOperation(eventType: string) {

        const click = new CustomEvent(eventType, {
            detail: {
                product: {
                    name: this.productName,
                    description: this.productDescription,
                    imageUrl: this.imageUrl,
                    createdBy: this.createdBy,
                    price: this.productPrice,
                    id: this.productId
                },
            },
            bubbles:false
        });
        this.dispatchEvent(click);
    }

    getOwnerButtonsHtml() {
       let ownerButtons:TemplateResult = html``;
        if (this.currentUser === this.createdBy) {
            ownerButtons = html`<div class="text-center str-card-buttons-container" >
            <str-form-btn isFormButton buttonText="${this.updatebuttonText}" isFormButton isCardButton aria-label="Update Product" @click="${(e) => {e.stopPropagation(); this.onProductOperation(EVENTS.UPDATE_PRODUCT)}}"></str-form-btn>
            <str-form-btn isFormButton buttonText="${this.deletebuttonText}" isFormButton isCardButton aria-label="Delete Product" @click="${(e) => {e.stopPropagation(); this.onProductOperation(EVENTS.DELETE_PRODUCT)}}"></str-form-btn>    
            </div>`
        }
        return ownerButtons;
    }

    render() {
        let ownerButtons: TemplateResult = this.getOwnerButtonsHtml();
        return html`
    <button type="button" class="card" @click="${this.onProductOperation.bind(this, EVENTS.VIEW_PRODUCT)}" aria-label="View product details" >
    <div class="text-center">
        <img src="${this.imageUrl}" class="product-image" alt="Avatar" width="200" width="200" height="200">
    </div>
    <div class="container card-details">
        <h4 class="text-center card-font-medium card-header-margin"><b>${this.productName}</b></h4>
        <p class="text-center card-font-small card-details-margin">${this.productDescription}</p>
        <p class="text-center card-font-small card-details-margin"><b><span>&#8377; </span>${this.productPrice}</b></p>
    </div>
        ${ownerButtons}
    </button>
                `;
    }
}
