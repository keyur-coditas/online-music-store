import { TestBed } from '@angular/core/testing';
import { render } from '@testing-library/angular';
import { AppService } from '../shared/app.service';
import { AppComponent } from './app.component';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [ AppService ],
    providers: []
  });
});

describe('AppComponent', () => {
  it('should render the component', async () => {
     render(AppComponent);
  });
});