import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProfileComponent } from './upload-profile.component';

describe('UploadProfileComponent', () => {
  let component: UploadProfileComponent;
  let fixture: ComponentFixture<UploadProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
