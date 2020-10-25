import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMocks } from '../shared/mocks/mocks';
import { User } from '../shared/models/user';
import { AuthenticationService } from './auth.service';

describe('AuthenticationService', () => {
  let component: AuthenticationService;
  let fixture: ComponentFixture<AuthenticationService>;

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
    component = TestBed.inject(AuthenticationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('register', () => {
    const postSpy = spyOn(component['httpService'], 'post');
    const user:User = {
        email: '',
        password: ''
    }
    component.register(user);
    expect(postSpy).toHaveBeenCalled();
  });
  it('login', () => {
    const postSpy = spyOn(component['httpService'], 'post');
    const user:User = {
        email: '',
        password: ''
    }
    component.login(user);
    expect(postSpy).toHaveBeenCalled();
  });
});
