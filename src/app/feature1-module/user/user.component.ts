import { Component, OnInit, DoCheck } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { RemoteDataService } from '../services/remote-data.service';
import { Response } from '../models/response';
import { User } from '../models/User';
import { Opcion } from '../models/Opcion';
// import {usercomponentcss} from './user.component.css'

import { interval } from 'rxjs';
import { Button } from 'protractor';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {
  private responseLocal: Response;
  private contador = 1;
  buttonDisabled1: boolean = true;
  buttonDisabled2: boolean = false;
  public usuarios: Array<User>;
  public Opciones: Opcion[] = [
    { id: 1, name: '1 Elemento por página' },
    { id: 5, name: '5 Elementos por página' },
    { id: 10, name: '10 Elementos por página' }
  ];
  public selectedOpcion: Opcion = this.Opciones[0];
  onSelect(OpcionId) {
      this.selectedOpcion = null;
      for (var i = 0; i < this.Opciones.length; i++)
      {
        if (this.Opciones[i].id === OpcionId) {
          this.selectedOpcion = this.Opciones[i];
        }
      }
      console.log(OpcionId);
  }

  constructor(private log: LoggerService,  private remoteDataService: RemoteDataService) {
    log.setFileName('user.component.ts');
    log.log('Iniciado!!');
  }

  onClick(avanzar: boolean) {
    if (avanzar) {
      this.contador++;
    } else  {
      this.contador--;
    }
    if (this.contador < 2) {
       this.buttonDisabled1 = true;
      } else {
        this.buttonDisabled1 = false;
      }
      if (this.contador > 3) {
        this.buttonDisabled2 = true;
      } else {
        this.buttonDisabled2 = false;
      }
        this.remoteDataService.getUserData(this.contador).subscribe(response => {
        console.log(this.responseLocal);
        this.responseLocal = response;
        this.usuarios = this.responseLocal.data;
      },
      //   this.remoteDataService.getUserData(this.cantidad).subscribe(response => {
      //   console.log(this.responseLocal);
      //   this.responseLocal = response;
      //   this.usuarios = this.responseLocal.data;
      // },
      error => {
        this.log.log('Ocurrió un fallo!!!!!', error);
   });
}

    ngOnInit() {
      this.remoteDataService.getUserData(1).subscribe(response => {
        this.responseLocal = response;
        this.usuarios = this.responseLocal.data;
      },
      error => {
        this.log.log('Ocurrió un fallo!!!!!', error);
      });

    }
  }

