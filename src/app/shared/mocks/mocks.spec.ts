import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppMocks } from './mocks';

describe('AppMocks', () => {
    let component: AppMocks;;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
          {provide: AppMocks, useValue: AppMocks}
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    component = TestBed.inject(AppMocks);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('theme mock', () => {
    const themeMock = AppMocks.getThemeServiceMock();
    expect(themeMock).toBeTruthy();
  });

  test('theme mock', () => {
    const themeMock = AppMocks.getMockProductService();
    expect(themeMock).toBeTruthy();
  });


  test('theme mock', () => {
    const themeMock = AppMocks.getMockRouterService();
    expect(themeMock).toBeTruthy();
  });


  test('theme mock', () => {
    const themeMock = AppMocks.getMockStoreService();
    expect(themeMock).toBeTruthy();
  });


  test('theme mock', () => {
    const themeMock = AppMocks.getMockAppService();
    expect(themeMock).toBeTruthy();
  });


  test('theme mock', () => {
    const themeMock = AppMocks.getMockFormGroup();
    expect(themeMock).toBeTruthy();
  });


  test('theme mock', () => {
    const themeMock = AppMocks.getMockHttpService();
    expect(themeMock).toBeTruthy();
  });

});
