import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextTaskComponent } from './next-task.component';

describe('NextTaskComponent', () => {
  let component: NextTaskComponent;
  let fixture: ComponentFixture<NextTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
