import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMocks } from '../shared/mocks/mocks';
import { AppService } from './app.service';
describe('ProductsService', () => {
  let component: AppService;
  let fixture: ComponentFixture<AppService>;

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
    component = TestBed.inject(AppService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isAuthenticated', () => {
    component.isAuthenticated();
    sessionStorage.setItem('accessToken', 'abcd');
    component.isAuthenticated();
  });

});
