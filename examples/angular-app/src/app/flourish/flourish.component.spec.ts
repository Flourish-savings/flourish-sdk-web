import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlourishComponent } from './flourish.component';

describe('FlourishComponent', () => {
  let component: FlourishComponent;
  let fixture: ComponentFixture<FlourishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlourishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlourishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
