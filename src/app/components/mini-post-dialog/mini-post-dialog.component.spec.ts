import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPostDialogComponent } from './mini-post-dialog.component';

describe('MiniPostDialogComponent', () => {
  let component: MiniPostDialogComponent;
  let fixture: ComponentFixture<MiniPostDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniPostDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
