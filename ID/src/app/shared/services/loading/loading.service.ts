import { Injectable } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { LoadingComponent } from './loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  dialogRef: MatDialogRef<LoadingComponent>;
  constructor(private dialog: MatDialog) { }

  public open(title: string = 'Please wait'): Observable<boolean> {
    this.dialogRef = this.dialog.open(LoadingComponent, { disableClose: true, backdropClass: 'light-backdrop' });
    this.dialogRef.updateSize('200px');
    this.dialogRef.componentInstance.title = title;
    return this.dialogRef.afterClosed();
  }

  public close() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
