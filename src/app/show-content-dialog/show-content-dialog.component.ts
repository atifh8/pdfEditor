import { Component, OnInit } from '@angular/core';
import { Optional } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-show-content-dialog', 
  templateUrl: './show-content-dialog.component.html',
  styleUrls: ['./show-content-dialog.component.css']
})
export class ShowContentDialogComponent implements OnInit {

  pdfValue;
  changedValue;
  constructor( @Optional() @Inject(MAT_DIALOG_DATA) private dialogData: any,
               private dialogRef: MatDialogRef<ShowContentDialogComponent>) {
                console.log(this.dialogData);
                this.pdfValue = this.dialogData.originalValue;
                this.changedValue = this.dialogData.updatedValue;
               }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
