export interface Product {
    name: string;
    description: string;
    imageUrl: string;
    createdBy: number;
    price: number;
}
export interface ProductOperationInfo {
    productOperation: string;
    disableFormFields: boolean;
}