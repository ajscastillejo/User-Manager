import { Component, OnInit, DoCheck } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { RemoteDataService } from '../services/remote-data.service';
import { Response } from '../models/response';
import { User } from '../models/User';
import { Opcion } from '../models/Opcion';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NotifierService } from 'angular-notifier';


import { interval } from 'rxjs';
import { Button } from 'protractor';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],

})
export class UserComponent implements OnInit {
  user: FormGroup;
  private notifier: NotifierService;
  private responseLocal: Response;
  private contador = 1;
  private elementosporpagina = 1;
  public buttonDisabled1 = true;
  public buttonDisabled2 = false;
  public usuarios: Array<User>;
  public opciones: Opcion[] = [
    { id: 1, name: '1 Elemento por página' },
    { id: 3, name: '3 Elementos por página' },
    { id: 6, name: '6 Elementos por página' }
  ];
  public showNotification( type: string, message: string ): void {
    this.notifier.notify( type, message );
  }

  public hideOldestNotification(): void {
    this.notifier.hideOldest();
  }

  public hideNewestNotification(): void {
    this.notifier.hideNewest();
  }

  public hideAllNotifications(): void {
    this.notifier.hideAll();
  }

  public showSpecificNotification( type: string, message: string, id: string ): void {
    this.notifier.show( {
      id,
      message,
      type
    } );
  }

  public hideSpecificNotification( id: string ): void {
    this.notifier.hide( id );
  }

  constructor(private log: LoggerService,  private remoteDataService: RemoteDataService, private fb: FormBuilder, notifier: NotifierService) {
    log.setFileName('user.component.ts');
    log.log('Iniciado!!');
    this.notifier = notifier;
  }


  ngOnInit() {
    this.user = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
        lastname: ['', Validators.required],
        url: ['', Validators.required]
    });
    this.remoteDataService.getUserData(1, this.elementosporpagina).subscribe(response => {
      this.responseLocal = response;
      this.usuarios = this.responseLocal.data;
    },
    error => {
      this.log.log('Ocurrió un fallo!!!!!', error);
    });
    this.remoteDataService.removeUserData(1).subscribe(response => {
      this.responseLocal = response;

    },
    error => {
      this.log.log('Ocurrió un fallo al borrar!!!!!', error);
    });

  }

  onSelect(opcionId) {
    console.log(opcionId);
    this.elementosporpagina = opcionId;
    this.llamadaRemota();

  }

  clickFormulario (User, id) {
  //  formulario,
  this.remoteDataService.createUserData(id, User).subscribe(response => {
  console.log(response);
  this.responseLocal = response;
  this.usuarios = this.responseLocal.data;
},
error => {
  this.log.log('Ocurrió un fallo!!!!!', error);
});
  }

  onClick(avanzar: boolean) {
    if (avanzar) {
      this.contador++;
    } else {
      this.contador--;
    }
    if (this.contador === 1) {
      this.buttonDisabled1 = true;
      this.buttonDisabled2 = false;
    } else {
      this.buttonDisabled1 = false;
      this.buttonDisabled2 = false;
    }
    if (this.responseLocal.total / this.elementosporpagina === this.contador) {
      this.buttonDisabled2 = true;
    }
    this.llamadaRemota();
  }

toggleFunction() {
    let x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
  x.style.display = 'block';
} else {
  x.style.display = 'none';
}
  }
  toggleFunction2() {
    let x = document.getElementById('myDIV2');
    if (x.style.display === 'none') {
  x.style.display = 'block';
} else {
  x.style.display = 'none';
}
  }

  borrar(id: number) {
    console.log(id);
    this.remoteDataService.removeUserData(id).subscribe(response => {
      console.log(response);
      this.responseLocal = response;
      this.usuarios = this.responseLocal.data;
    },
    error => {
      this.log.log('Ocurrió un fallo!!!!!', error);
    });
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
