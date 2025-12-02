import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageCropperViewerComponent } from '../image-cropper-viewer/image-cropper-viewer.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(ImageCropperViewerComponent);

    dialogRef.afterClosed().subscribe((res) => {
      console.log('res', res);
    });
  }
}
