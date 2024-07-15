import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnnexeComponent } from './update-annexe.component';

describe('UpdateAnnexeComponent', () => {
  let component: UpdateAnnexeComponent;
  let fixture: ComponentFixture<UpdateAnnexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnnexeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAnnexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
