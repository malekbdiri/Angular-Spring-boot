import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerAnnexeComponent } from './creer-annexe.component';

describe('CreerAnnexeComponent', () => {
  let component: CreerAnnexeComponent;
  let fixture: ComponentFixture<CreerAnnexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerAnnexeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerAnnexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
