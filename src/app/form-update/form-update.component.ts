import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {
 idProject : String;
 
  constructor(private service:ProjectServiceService,private router:Router) { this.service.ReceiveMessage().subscribe(data=>{
    console.log(data)
   this.projectModel = data;})} 
  
 
  public projectModel :Project
  ngOnInit(): void {
    this.service.ReceiveMessage().subscribe(data=>{
      console.log(data)
     this.projectModel = data;
      console.log(this.projectModel)
    
  });
   
  }

  updateMethod(){
      this.service.updateProject(this.projectModel,this.projectModel._id).subscribe((data)=>{console.log(data)});
      this.router.navigate(['home'])
      
  }}
