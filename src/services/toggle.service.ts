import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class Toggle {
  private openDialogs: MatDialogRef<any>[] = [];

  constructor(private dialog: MatDialog) {}

  open(dialogComponent: any): void {
    const dialogRef = this.dialog.open(dialogComponent);
    this.openDialogs.push(dialogRef);

    dialogRef.afterClosed().subscribe(() => {
      this.openDialogs = this.openDialogs.filter(d => d !== dialogRef);
    });
  }
}
