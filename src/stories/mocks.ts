import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
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
        return {
          name: '',
          description: '',
          imageUrl: '',
          createdBy: '',
          price: 10,
          id: 1,
        };
      }),
    };
  };
  public static updateProuctFormGroup = () => {
    const UpdateModel = {
      name: new FormControl('Laney, Acoustic Guitar Amp, 80W A1+', [
        Validators.required,
      ]),
      price: new FormControl(26460, [Validators.required]),
      description: new FormControl(
        'The A1+ is designed to give the discerning acoustic player an amplified acoustic performance to match the tone and dynamics of the top acoustic instruments on the market.'
      ),
      imageUrl: new FormControl(),
    };
    const fb = new FormBuilder();
    return fb.group(UpdateModel);
  };
  public static getMockProductFormGroup = () => {
    const myModel = {
      valid: true,
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      price: new FormControl('', [Validators.required]),
      imageUrl: new FormControl(),
    };
    const fb = new FormBuilder();
    return fb.group(myModel);
  };

  public static mockProductActions = () => {
    return {
      cancel: () => {console.log('cancel called')},
      onSubmit: () => {console.log('onSubmit called')},
      onImagePicked: (event) => {console.log('onImagePicked called')},
      nameValueChanged: (event) => {console.log('nameValueChanged called')},
      priceValueChanged: (event) => {console.log('priceValueChanged called')},
      descriptionValueChanged: (event) => {console.log('descriptionValueChanged called')}
    }
  }

  public static getMockLoginFormGroup = () => {
    const myModel = {
      valid: true,
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    };
    const fb = new FormBuilder();
    return fb.group(myModel);
  };

  public static mockLoginActions = () => {
    return {
      navigate: (event) => {event.preventDefault(); console.log('navigate called')},
      onSubmit: () => {console.log('onSubmit called')},
      emailValueChanged: () => {console.log('emailValueChanged called')},
      passwordValueChanged: () => {console.log('passwordValueChanged called')},
    }
  }

  public static getMockRegistrationFormGroup = () => {
    const myModel = {
      valid: true,
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    };
    const fb = new FormBuilder();
    return fb.group(myModel);
  };

  public static mockRegistrationActions = () => {
    return {
      onSubmit: () => {console.log('onSubmit called')},
      emailValueChanged: () => {console.log('emailValueChanged called')},
      passwordValueChanged: () => {console.log('passwordValueChanged called')},
      confirmPasswordValueChanged: () => {console.log('confirmPasswordValueChanged called')},
    }
  }

  public static mockCardActions = () => {
    return {
      updateProduct: (event) => {event.stopPropagation(); console.log('updateProduct called')},
      deleteProduct: (event) => { event.stopPropagation(); console.log('deleteProduct called')},
      viewProduct: () => { console.log('viewProduct called')},
    }
  }

  public static mockHeaderActions = () => {
    return {
      addProduct: () => { console.log('addProduct called')},
      logout: () => {console.log('logout called')},
      changeLanguage: () => { console.log('changeLanguage called')},
      changeTheme: () => { console.log('changeTheme called')}
    }
  }
  public static getCardStoreMock = () => {
    return of({
      auth: {
        currentUser: {
          accessToken: '123',
          email: 'xyz@gmail.com',
          isLoggedIn: false
        }
      },
      dispatch: () => {},
      pipe: () => {},
    })
  };
}
