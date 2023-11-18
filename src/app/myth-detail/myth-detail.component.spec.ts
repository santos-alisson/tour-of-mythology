import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythDetailComponent } from './myth-detail.component';

describe('MythDetailComponent', () => {
  let component: MythDetailComponent;
  let fixture: ComponentFixture<MythDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MythDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MythDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
