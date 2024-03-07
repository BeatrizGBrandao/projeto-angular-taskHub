import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTodayComponent } from './status-today.component';

describe('StatusTodayComponent', () => {
  let component: StatusTodayComponent;
  let fixture: ComponentFixture<StatusTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusTodayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatusTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
