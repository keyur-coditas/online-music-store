import * as APP_CONSTANTS from '../app/shared/app.constants';
export class StorybookMocks {
  public static getstoreMock = () => {
    return {
      dispatch: () => {},
      pipe: () => {},
    };
  };

  public static getrouterMock = () => {
    return {
      navigate: () => {},
    };
  };

  public static getProductServiceMock = () => {
    return {
        getAllProducts: jest.fn(() => false),
        getProductInfo: jest.fn(() => {
            return {
                productOperation: APP_CONSTANTS.PRODUCT_ADD,
                disableFormFields: false,
              };
        }),
        setProductInfo: jest.fn(() => {}),
        addProduct: jest.fn(() => {}),
        setProduct: jest.fn((val) => {}),
        getProduct: jest.fn((val) => {
            return  {
            name: '',
            description: '',
            imageUrl: '',
            createdBy: '',
            price: 10,
            id: 1
        }
        })
     }
 }
}
