import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit{
  constructor(){}

  ngOnInit(): void{

  }
 
  numero:number = 1;

  increment(){
    this.numero = this.numero + 1;
  } 

  decrement(){
    this.numero = this.numero - 1;
  }
  /*datos = {
    nombre: "Diego",
    apellido: "Ronquillo"
  }*/
}
