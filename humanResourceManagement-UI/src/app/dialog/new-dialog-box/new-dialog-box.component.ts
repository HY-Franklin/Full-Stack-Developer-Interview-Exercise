import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-new-dialog-box',
  templateUrl: './new-dialog-box.component.html',
  styleUrls: ['./new-dialog-box.component.css']
})
export class NewDialogBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public employee: Employee) {
  }

  onNoClick(): void {
    this.dialogRef.close();

  }


  ngOnInit(): void {
  }

  //disable submit button if any attribute of employee is null
  isEmpty() {
    // console.log(this.employee.email == undefined);
    return this.employee.email == undefined || this.employee.phoneNumber == undefined || this.employee.website == undefined;

  }
}
