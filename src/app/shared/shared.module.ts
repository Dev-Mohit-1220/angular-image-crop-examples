import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { ImageCropperViewerComponent } from './components/image-cropper-viewer/image-cropper-viewer.component';

@NgModule({
  declarations: [DialogComponent, ImageCropperViewerComponent],
  imports: [CommonModule, MatButtonModule, ImageCropperComponent],
  exports: [DialogComponent, ImageCropperComponent],
})
export class SharedModule {}
