import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [
  ]
})
export class AdminComponent implements OnInit {

  ngOnInit(): void {
    this.cargar();
  }
  cargar(){
    if (sessionStorage.getItem('carga')==='0') {
      location.reload(); 
      sessionStorage.setItem('carga','1');
      //this.desconectarWs();
    }
  }

}
