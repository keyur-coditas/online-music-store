import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductService } from '../products/products.service';
import { AppService } from '../shared/app.service';
import { ThemeService } from '../shared/theme.service';
import { HeaderComponent } from './header.component';
import * as APP_CONSTANTS from '../shared/app.constants'
import { AppMocks } from '../shared/mocks/mocks';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let appService: AppService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ThemeService, useValue: AppMocks.getThemeServiceMock() },
        { provide: ProductService, useValue: AppMocks.getMockProductService() },
        { provide: Router, useValue: AppMocks.getMockRouterService() },
        { provide: Store, useValue: AppMocks.getMockStoreService() },
        { provide: AppService, useValue: AppMocks.getMockAppService() }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('changeTheme', () => {
    const isDarkThemeSpy = spyOn(component['themeService'], 'isDarkTheme');
    const setDarkThemeSpy = spyOn(component['themeService'], 'setDarkTheme');
    const setLightThemeSpy = spyOn(component['themeService'], 'setLightTheme');
    // dark theme
    component.changeTheme();
    expect(isDarkThemeSpy).toHaveBeenCalled();
    expect(setDarkThemeSpy).toHaveBeenCalled();
    // light theme
    isDarkThemeSpy.and.returnValue(true);
    component.changeTheme();
    expect(setLightThemeSpy).toHaveBeenCalled();
  });

  test('logout', () => {
    const logoutSpy = spyOn(component['store'], 'dispatch');
    component.logout();
    expect(logoutSpy).toHaveBeenCalled();
  });

  test('isAuthenticated', () => {
    const setDarkThemeSpy = spyOn(component['appService'], 'isAuthenticated');
    component.isAuthenticated();
    expect(setDarkThemeSpy).toHaveBeenCalled();
  });

  test('addProduct', () => {
    const setProductInfoSpy = spyOn(component['productService'], 'setProductInfo');
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.addProduct();
    expect(setProductInfoSpy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalled();
  });
});
