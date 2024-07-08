import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexeRptc480Component } from './annexe-rptc480.component';

describe('AnnexeRptc480Component', () => {
  let component: AnnexeRptc480Component;
  let fixture: ComponentFixture<AnnexeRptc480Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnexeRptc480Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnexeRptc480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
