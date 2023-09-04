import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
 
 
 

  constructor(private service:ProjectServiceService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
   
    
  }

  addProject(project:any){


  const payload = new HttpParams()
  .set('titre',project.titre )
  .set('description',project.description);


    console.log(project);
    this.http.post('/api/addProject',payload).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['home'])
    
    })
    
  }
 

}





