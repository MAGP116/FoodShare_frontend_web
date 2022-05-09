import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPostImageComponent } from './mini-post-image.component';

describe('MiniPostImageComponent', () => {
  let component: MiniPostImageComponent;
  let fixture: ComponentFixture<MiniPostImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniPostImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPostImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
