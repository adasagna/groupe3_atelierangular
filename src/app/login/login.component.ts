import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  // Les attributs 
  email = '';
  password = '';
  passwordConfirme = '';
  public choixFormulaire: boolean = true;

  // Afficher le formulaire choisi 
  public afficherFormulaire() {
    this.choixFormulaire = !this.choixFormulaire;
  }
  
  // Fonction pour afficher un sweetalert 
  verifInfo(title: any, text: any, icon: any){
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    })
  }

  // Fonction pour verifier les champs du formulaire login
  verifLogin( event: Event){
    event.preventDefault();

    if( this.email =='' || this.password==''){
      this.verifInfo('Erreur!', 'Veuillez remplir les champs', 'error');

    }

    else if (this.password.length < 8) {
      this.verifInfo('Erreur!', 'Le mot de passe est inférieur à 8', 'error');
    }

    else {
      if (this.email.includes('@ .') ){
        alert('Lemail contient un @')
      }
      this.verifInfo('Merci!', 'Authentification réussie', 'success');
      this.email ='';
      this.password ='';
    }
  }


  // Vérification pour le deuxieme formulaire 
  verifLoginForm2(event: Event){
    event.preventDefault();

    if( this.email =='' || this.password=='' || this.passwordConfirme==''){
      this.verifInfo('Erreur!', 'Veuillez remplir les champs', 'error');

    }

    else if (this.password.length < 8) {
      this.verifInfo('Erreur!', 'Le mot de passe est inférieur à 8', 'error');
    }

    else if (this.password != this.passwordConfirme){
      this.verifInfo('Erreur!', 'Les deux mots de passe ne sont pas conforme', 'error');
    }
    
    else {
      
      this.verifInfo('Merci!', 'Authentification réussie', 'success');
      this.afficherFormulaire();
      this.email ='';
      this.password ='';
      this.passwordConfirme ='';
    }
  }

  
}
