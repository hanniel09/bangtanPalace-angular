import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsFormComponent } from './foods-form.component';

describe('FoodsFormComponent', () => {
  let component: FoodsFormComponent;
  let fixture: ComponentFixture<FoodsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodsFormComponent]
    });
    fixture = TestBed.createComponent(FoodsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
