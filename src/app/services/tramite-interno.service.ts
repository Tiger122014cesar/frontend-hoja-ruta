import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { apiHojaRuta } from '../api/apiHojaRuta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TramiteInternoService {
  url = `${apiHojaRuta}/tramite-interno`;
  constructor(private http: HttpClient, private router:Router) { }

  getTramiteInternos():Observable<any>{
    return this.http.get(this.url);
  }
  getTramiteInterno(codigo:string):Observable<any>{
    return this.http.get(`${this.url}/${codigo}`)
  }
  postTramiteInterno(data:FormData):Observable<any>{
    return this.http.post(this.url, data);
  }
}
