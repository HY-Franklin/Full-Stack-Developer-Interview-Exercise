import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-edit-dialog-box',
  templateUrl: './edit-dialog-box.component.html',
  styleUrls: ['./edit-dialog-box.component.css']
})
export class EditDialogBoxComponent implements OnInit {

  // employee: Employee;



  constructor(
    public dialogRef: MatDialogRef<EditDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public employee: Employee) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  //disable update button if any attribute of employee is null
  isEmpty() {
    // console.log(this.employee.email == '');
    return this.employee.name==''||this.employee.email == '' || this.employee.phoneNumber == '' || this.employee.website == '';

  }
}
