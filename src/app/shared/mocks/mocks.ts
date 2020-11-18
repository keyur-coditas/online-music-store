import { FormBuilder } from '@angular/forms'
import { of } from 'rxjs'
import * as APP_CONSTANTS from '../app.constants';
export class AppMocks {
     public static getThemeServiceMock = () => {
        return {
            isDarkTheme: jest.fn(() => false),
            setDarkTheme: jest.fn(() => {}),
            setLightTheme: jest.fn(() => {}),
            setActiveTheme: jest.fn(() => {})
         }
        
     }

     public static getMockProductService = () => {
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
            }),
            updateProduct: jest.fn((val) => {}),
            deleteProduct: jest.fn((val) => {}),
         }
     }

     public static getMockRouterService = () => {
        return {
            navigate: jest.fn((nav) => {})
           }
     }

     public static getMockStoreService = () => {
        return {
                dispatch: jest.fn(() => {}),
                pipe: jest.fn(() => of({}))
           }
     }

     public static getMockAppService = () => {
        return {
            isAuthenticated: jest.fn(() => {})
           }
    }

    public static getMockFormGroup = () => {
        const myModel = {
            valid: true,
            value: null
         };
         const fb = new FormBuilder();
         return fb.group(myModel);
    }

    public static getMockHttpService = () => {
        return {
            get: jest.fn(() => {}),
            put: jest.fn(() => {}),
            post: jest.fn((val) => {}),
            delete: jest.fn(() => {})
           }
    }

    public static getMockAuthService = () => {
        return {
            login: jest.fn((val) => {}),
            register: jest.fn((val) => {})
           }
    }

    public static getMockToastrService = () => {
        return {
            success: jest.fn((val) => {}),
            error: jest.fn((val) => {})
           }
    }
}



