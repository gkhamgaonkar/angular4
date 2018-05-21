import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesSummaryComponent } from './roles-summary.component';

describe('RolesSummaryComponent', () => {
  let component: RolesSummaryComponent;
  let fixture: ComponentFixture<RolesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
