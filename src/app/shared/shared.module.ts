import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';

@NgModule({
  declarations: [DialogComponent, ImageCropperComponent],
  imports: [CommonModule],
  exports: [DialogComponent, ImageCropperComponent],
})
export class SharedModule {}
