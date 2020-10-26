import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AppMocks } from './mocks/mocks';

describe('ThemeService', () => {
  let component: AuthGuard;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ActivatedRouteSnapshot, useValue: {} },
        { provide: RouterStateSnapshot, useValue: {} },
        { provide: Router, useValue: AppMocks.getMockRouterService()}
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.inject(AuthGuard);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('canActivate', () => {
    const route: ActivatedRouteSnapshot = null;
    const state: RouterStateSnapshot = null
    const navigateSpy = spyOn(component['router'], 'navigate');
    sessionStorage.setItem('accessToken', 'abcdefg');
    component.canActivate(route, state);
   
    sessionStorage.clear();
    component.canActivate(route, state);
    expect(navigateSpy).toHaveBeenCalled();
  });

});
