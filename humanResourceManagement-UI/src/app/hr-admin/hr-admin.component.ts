import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeesService} from "../service/employees.service";
import {Employee} from "../model/Employee";
import {MatDialog} from '@angular/material/dialog';
import {EditDialogBoxComponent} from "../dialog/edit-dialog-box/edit-dialog-box.component";
import {NewDialogBoxComponent} from "../dialog/new-dialog-box/new-dialog-box.component";
import {SearchService} from "../service/search.service";
import {NgForm} from "@angular/forms";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-hr-admin',
  templateUrl: './hr-admin.component.html',
  styleUrls: ['./hr-admin.component.css']
})

//HRAdminComponent is responsible for getting data from EmployeesService, then represents data in html template.
export class HRAdminComponent implements OnInit {

  allEmployeesDetails:Employee[]=[];
  selected:string='name';


  constructor(private employeesService: EmployeesService, private dialog: MatDialog,public searchService:SearchService) {
  }

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe(data => this.allEmployeesDetails = data)
  }


  // open edit Dialog Box
  openDialog(employee): void {
    const dialogRef = this.dialog.open(EditDialogBoxComponent, {
      width: '250px',
      //passing data into dialog box
      data: {
        id: employee.id,
        name: employee.name,
        email: employee.email,
        phoneNumber: employee.phoneNumber,
        website: employee.website
      }
    });
    //get updated employee from dialog box, bind them to this.allEmployeesDetails, then refresh page
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Box was closed.');
      // delete this.allEmployeesDetails[result.id];
      this.employeesService.updateEmployee(result);
      location.reload();
    });
  }


  // add new employee button
  openDialogForNewEmployee(): void {
    const dialogRef = this.dialog.open(NewDialogBoxComponent, {
      width: '250px',
      data: {}
    });

    //get updated employee from dialog box, bind them to this.allEmployeesDetails, then refresh page
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.employeesService.updateEmployee(result);
      location.reload();
    });
  }

// call EmployeesService method to delete the employee
  deleteEmployee(employee: Employee) {
    this.employeesService.deleteEmployee(employee);
    location.reload();
    return "deleted successfully";
  }

  //change color of rows in table
  getColor(value){
    return value%2;
  }

  //get form data for search
  @ViewChild('f',{static:false}) searchForm:NgForm;
  onsubmit() {
    let type=this.searchForm.form.value.type;
    let value=this.searchForm.form.value.value;
    this.searchService.searchByType(type,value).subscribe(data=>{
        // console.log(typeof data);
        this.allEmployeesDetails=data;
        if (this.allEmployeesDetails.length==0) alert("Employee Not Found!")
    });
  }

// refreshPage
  refreshPage() {
    location.reload();
  }
}
