import { MedicamentService } from './../services/medicament.service';
import { Famille } from './../model/famille.model';
import { Component, OnInit } from '@angular/core';
import { Medicament } from '../model/medicament.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
  nomMedicament! : string;
  medicaments! : Medicament[];
  familles! : Famille[];

  constructor(private medicamentService : MedicamentService) { }

  ngOnInit(): void {
    this.familles = this.medicamentService.listeFamilles();
    this.medicaments = [];
  }

  supprimerMedicament(m : Medicament){
    let conf = confirm("Etes-vous sur ?");
    if(conf)
    this.medicamentService.supprimerMedicament(m);
  }
  onChange(){
    this.medicaments = this.medicamentService.rechercherParNom(this.nomMedicament); 
  }

}
