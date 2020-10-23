import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMocks } from '../shared/mocks/mocks';
import { StoreProduct } from '../shared/store/products/products.model';
import { ThemeService } from './theme.service';
import { Theme, light, dark } from './styles/themes/theme';
describe('ProductsService', () => {
  let component: ThemeService;
  let fixture: ComponentFixture<ThemeService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: HttpClient, useValue: AppMocks.getMockHttpService() },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.inject(ThemeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isDarkTheme', () => {
    component['availableThemes'] = [
        {name: '', properties: ''},
        {name: '', properties: ''}
    ]
    component.isDarkTheme();
  });

  it('setDarkTheme', () => {
    component.setDarkTheme();
  });

  it('setLightTheme', () => {
    component.setLightTheme();
  });

  it('setActiveTheme', () => {
    component.setActiveTheme({name:'', properties: {}});
  });
});
