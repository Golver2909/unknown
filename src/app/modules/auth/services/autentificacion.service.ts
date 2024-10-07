import { Injectable } from '@angular/core';
// Servicio en la nube de autentificación de Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
// Accedemos directamente al servicio Firestore
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
//Modelo Usuario
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private usuariosCollection: AngularFirestoreCollection<Usuario>


  constructor(
    private auth: AngularFireAuth, 
    private servicioFirestore: AngularFirestore
  ) {
    this.usuariosCollection = this.servicioFirestore.collection<Usuario>('usuarios');
  }

  // FUNCIÓN PARA REGISTRO
  registrar(email: string, password: string){
    // retorna el valor que es creado con el método "createEmail..."
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // FUNCIÓN PARA INICIO DE SESIÓN
  iniciarSesion(email: string, password: string){
    // validar la información del usuario -> saber si existe en la colección
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // FUNCIÓN PARA CERRAR SESIÓN
  cerrarSesion(){
    // devuelve una promesa vacía -> quita token
    return this.auth.signOut();
  }

  // FUNCIÓN PARA TOMAR EL UID
  async obtenerUid(){
    // Nos va a generar una promesa y la constante la va a capturar
    const user = await this.auth.currentUser;

    /*
      Si el usuario no respeta la estructura de la interfaz /
      Si tuvo problemas para el registro -> ej.: mal internet
    */
    if(user == null){
      return null;
    } else {
      return user.uid;
    }
  }

  obtenerUsuario(email: string){
    /**
     * Retornamos del servicioFirestore la colección de 'usuarios', buscamos una referencia en los email registrados
     * y los comparamos con los que ingrese el usuario al iniciar sesión, y lo obtiene con el '.get()'
     * Lo vuelve una promesa => da un resultado RESUELTO o RECHAZADO
     */
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }

  agregarUsuario(usuario: Usuario, id: string){
    /*
      Creamos una nueva PROMESA junto los métodos:
      RESOLVE: promesa resuelta -> funciona correctamente
      REJECT: promesa rechazada -> ocurrió una falla
    */

    return new Promise(async (resolve, reject) => {
      // Bloque TRY encapsula la lógica RESUELTA
      try {
        usuario.uid = id;

        /**
         * const resultado = colección de usuarios, envía como número de documento el UID
         * y setea la información que ingresamos en el formulario de REGISTRO
         */

        const resultado = await this.usuariosCollection.doc(id).set(usuario);

        resolve (resultado);
        // Bloque CATCH encapsula la lógica RECHAZADA
      } catch (error) {
        // captura una falla y la vuelve un 'error'
        reject (error);
      }
    })
  }
}
