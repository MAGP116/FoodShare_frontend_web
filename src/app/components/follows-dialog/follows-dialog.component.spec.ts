import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowsDialogComponent } from './follows-dialog.component';

describe('FollowsDialogComponent', () => {
  let component: FollowsDialogComponent;
  let fixture: ComponentFixture<FollowsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
