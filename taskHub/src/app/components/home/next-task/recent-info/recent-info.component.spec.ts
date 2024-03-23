import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentInfoComponent } from './recent-info.component';

describe('RecentInfoComponent', () => {
  let component: RecentInfoComponent;
  let fixture: ComponentFixture<RecentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
