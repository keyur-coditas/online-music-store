import { html, LitElement, css, TemplateResult } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';

@customElement('str-card')
export class storeCard extends LitElement {

    @property()
    productName: string;

    @property()
    productDescription: string;

    @property()
    imageUrl: string;

    @property()
    productPrice: number;

    @property()
    createdBy: string;

    @property()
    currentUser: string;

    @property()
    productId: number;

    @property()
    updatebuttonText: string;

    @property()
    deletebuttonText: string;

    static get styles() {
        return css`
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
    `;
    }

    viewProduct() {
        const click = new CustomEvent('viewProduct', {
            detail: {
                product: {
                    name: this.productName,
                    description: this.productDescription,
                    imageUrl: this.imageUrl,
                    createdBy: this.createdBy,
                    price: this.productPrice,
                    id: this.productId
                },
            }
        });
        this.dispatchEvent(click);
    }

    updateProduct(event) {
        event.stopPropagation();
        const update = new CustomEvent('updateProduct', {
            detail: {
                product: {
                    name: this.productName,
                    description: this.productDescription,
                    imageUrl: this.imageUrl,
                    createdBy: this.createdBy,
                    price: this.productPrice,
                    id: this.productId
                }
            }
        });
        this.dispatchEvent(update);
    }

    deleteProduct(event) {
        event.stopPropagation();
        const deleteProduct = new CustomEvent('deleteProduct', {
            detail: {
                product: {
                    name: this.productName,
                    description: this.productDescription,
                    imageUrl: this.imageUrl,
                    createdBy: this.createdBy,
                    price: this.productPrice,
                    id: this.productId
                }
            },
        });
        this.dispatchEvent(deleteProduct);
    }


    render() {
        let ownerButtons: TemplateResult = html``;
        if (this.currentUser === this.createdBy) {
            ownerButtons = html`<div class="text-center str-card-buttons-container" >
            <str-form-btn @click="${this.updateProduct}" buttonText="${this.updatebuttonText}" isCardButton="true" aria-label="Update Product"></str-form-btn>
            <str-form-btn @click="${this.deleteProduct}" buttonText="${this.deletebuttonText}" isCardButton="true" aria-label="Delete Product"></str-form-btn>    
            </div>`
        }

        return html`
    
    <button type="button" class="card" @click="${this.viewProduct}" aria-label="View product details" >
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
