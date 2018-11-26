import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  title;
  message;
  constructor(public dialogRef: MatDialogRef<LoadingComponent>) { }

  ngOnInit() {
  }
}
