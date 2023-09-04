import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Project } from './project';
import { BehaviorSubject, catchError, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  handleErrorNew: any;
  private subject = new BehaviorSubject<Project>(new Project('','',''));
  private subject1 = new Subject<String>();

  constructor(private http:HttpClient) { }

    listProjets(): Observable<Project[]>{
 
     return this.http.get<Project[]>('/api/projets');
      }
 deletPro(idPr:any){
      return this.http.delete('/api/delete/'+idPr);
     }

     //update
     updateProject(project:any,id:String){
      const payload = new HttpParams()
  .set('titre',project.titre )
  .set('description',project.description);
       return this.http.put('/api/update/'+id,payload);
     }

  
    sendId(id:String){
      this.subject1.next(id);
    }
    
    ReceiveId():Observable<String>{
      return this.subject1.asObservable();
    }
    
     SendMessage(proj:any){
       this.subject.next(proj);
     }
     ReceiveMessage():Observable<Project>{
      return  this.subject.asObservable();
     }
       
     }

// ng serve --proxy-config proxy.conf.json run command