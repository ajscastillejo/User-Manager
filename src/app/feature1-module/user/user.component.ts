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
  private elementosporpagina = 1;
  public buttonDisabled1 = true;
  public buttonDisabled2 = false;
  public usuarios: Array<User>;
  public opciones: Opcion[] = [
    { id: 1, name: '1 Elemento por página' },
    { id: 5, name: '5 Elementos por página' },
    { id: 10, name: '10 Elementos por página' }
  ];

  constructor(private log: LoggerService,  private remoteDataService: RemoteDataService) {
    log.setFileName('user.component.ts');
    log.log('Iniciado!!');
  }

  ngOnInit() {
    this.remoteDataService.getUserData(1, this.elementosporpagina).subscribe(response => {
      this.responseLocal = response;
      this.usuarios = this.responseLocal.data;
    },
    error => {
      this.log.log('Ocurrió un fallo!!!!!', error);
    });

  }

  onSelect(opcionId) {
    console.log(opcionId);
    this.elementosporpagina = opcionId;
    this.llamadaRemota();

  }

  onClick(avanzar: boolean) {
    if (avanzar) {
      this.contador++;
    } else  {
      this.contador--;
    }
    if (this.contador === 1) {
      this.buttonDisabled1 = true;
      this.buttonDisabled2 = true;
    } else {
      this.buttonDisabled1 = false;
      this.buttonDisabled2 = false;
    }

    this.llamadaRemota();
  }

  llamadaRemota() {
    console.log(`contador: ${this.contador} y elementos: ${this.elementosporpagina}`);
    this.remoteDataService.getUserData(this.contador, this.elementosporpagina).subscribe(response => {
      console.log(this.responseLocal);
      this.responseLocal = response;
      this.usuarios = this.responseLocal.data;
    },
    error => {
      this.log.log('Ocurrió un fallo!!!!!', error);
    });
  }

}
