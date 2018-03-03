import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.css']
})
export class PublicityComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PublicityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  publicityTime: number = 5;

  ngOnInit() {
    setTimeout(() => {
      this.publicityTime--;
      setTimeout(() => {
        this.publicityTime--;
        setTimeout(() => {
          this.publicityTime--;
          setTimeout(() => {
            this.publicityTime--;
            setTimeout(() => {
              this.dialogRef.close();
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
}

