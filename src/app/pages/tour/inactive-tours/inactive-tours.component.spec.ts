import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveToursComponent } from './inactive-tours.component';

describe('InactiveToursComponent', () => {
  let component: InactiveToursComponent;
  let fixture: ComponentFixture<InactiveToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InactiveToursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InactiveToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
