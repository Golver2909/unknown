import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// importamos servicio de autentificación
import { AutentificacionService } from '../../services/autentificacion.service';
// importamos componente de rutas de angular
import { Router } from '@angular/router';
// componente de encriptación
import * as CryptoJS from 'crypto-js';
// paquetería de alertas personalizadas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  
}
