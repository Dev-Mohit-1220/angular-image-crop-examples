import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCropperViewerComponent } from './image-cropper-viewer.component';

describe('ImageCropperViewerComponent', () => {
  let component: ImageCropperViewerComponent;
  let fixture: ComponentFixture<ImageCropperViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageCropperViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCropperViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
