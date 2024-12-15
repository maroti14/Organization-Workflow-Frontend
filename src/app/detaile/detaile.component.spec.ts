import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileComponent } from './detaile.component';

describe('DetaileComponent', () => {
  let component: DetaileComponent;
  let fixture: ComponentFixture<DetaileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetaileComponent]
    });
    fixture = TestBed.createComponent(DetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
