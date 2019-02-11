import { Component, OnInit, DoCheck } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { RemoteDataService } from '../services/remote-data.service';
import { Response } from '../models/response';
import { User } from '../models/User';

import { interval } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {
  public usuarios: Array<User>;
  private responseLocal: Response;
  private contador: number;

  constructor(private log: LoggerService,  private remoteDataService: RemoteDataService) {
    log.setFileName('user.component.ts');
    log.log('Iniciado!!');
  }

  onClick(avanzar) {
    if (avanzar === true) {
      this.contador++;
    } else if (avanzar === false) {
      this.contador--;
    }
    this.remoteDataService.getUserData(this.contador).subscribe(response => {
      console.log(this.responseLocal);
      this.responseLocal = response;
      this.usuarios = this.responseLocal.data;
    },
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

