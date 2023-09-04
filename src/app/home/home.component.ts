import { Component, OnInit, ViewChild } from '@angular/core';

import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  public   projects: Project[] = [];
  public currentObject :Project;
  

  constructor(private _projectServ:ProjectServiceService) {
     
   }
  
  ngOnInit(): void {
    this.ListProjetsAPI();
  } 
  
   ListProjetsAPI(){
     this._projectServ.listProjets().subscribe(data => {this.projects = data});
   }
   

   deleteProject(pr:any){
     this._projectServ.deletPro(pr).subscribe((result)=>{
       console.warn(result);
     })
     this.projects.splice(pr-1,1)
   }

   //public currentObject : Project;
   ProjectDetail(id:String){
      let currentObject  = this.projects.find((p)=>{return p._id === id})
     console.log(currentObject);
     this._projectServ.sendId(id);
     this._projectServ.SendMessage(currentObject);
   }
  }
  

