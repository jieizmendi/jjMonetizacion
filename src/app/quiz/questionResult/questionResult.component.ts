import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-questionResult',
  templateUrl: './questionResult.component.html',
  styleUrls: ['./questionResult.component.css']
})
export class QuestionResultComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuestionResultComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean) { }

  correctResult: boolean = this.data;

  ngOnInit() {
    setTimeout(() => {
      this.dialogRef.close();
    }, 1500);
  }
}

