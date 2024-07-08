import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annexe480 } from '../models/Annexe480';

@Injectable({
  providedIn: 'root'
})
export class AnnexeService {

  private baseUrl = 'http://localhost:8080/GetAll';  
  private baseUrl1 = 'http://localhost:8080/annexe';  


  constructor(private http: HttpClient) { }

  getAnnexe480(mois: number, annee: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${mois}/${annee}`);
  }

  generateXML(mois: number, annee: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl1}/generateXML/${mois}/${annee}`, { responseType: 'blob' });
  }

  updateFpn(fpn: number, mois: number, annee: number ): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/updatefpn/${mois}/${annee}/${fpn}`);
  }
  updateAnnexe(id: number, annexe: Annexe480): Observable<Object>{
    return this.http.put(`${this.baseUrl}/update/${id}`, annexe);
  }
  
  deleteAnnexe(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

}
