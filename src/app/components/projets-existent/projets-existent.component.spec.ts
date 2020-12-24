import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsExistentComponent } from './projets-existent.component';

describe('ProjetsExistentComponent', () => {
  let component: ProjetsExistentComponent;
  let fixture: ComponentFixture<ProjetsExistentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetsExistentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsExistentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
