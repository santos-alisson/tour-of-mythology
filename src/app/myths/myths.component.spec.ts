import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythsComponent } from './myths.component';

describe('MythsComponent', () => {
  let component: MythsComponent;
  let fixture: ComponentFixture<MythsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MythsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MythsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
