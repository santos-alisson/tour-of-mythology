import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythSearchComponent } from './myth-search.component';

describe('MythSearchComponent', () => {
  let component: MythSearchComponent;
  let fixture: ComponentFixture<MythSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MythSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MythSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
