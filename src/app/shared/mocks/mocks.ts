import { FormBuilder } from '@angular/forms'
import { of } from 'rxjs'

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
            getProductInfo: jest.fn(() => {}),
            setProductInfo: jest.fn(() => {}),
            addProduct: jest.fn(() => {}),
            setProduct: jest.fn((val) => {})
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
}



