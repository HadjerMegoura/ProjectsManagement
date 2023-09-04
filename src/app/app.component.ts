import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from './project-service.service';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project-app';
  public name = "Msg from parent";
  constructor(private testserv:TestServiceService,private projectServ:ProjectServiceService){}
  ngOnInit(): void {
   
    
  }


  }

  
  

