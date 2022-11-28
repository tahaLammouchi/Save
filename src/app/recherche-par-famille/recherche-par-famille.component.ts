import { Famille } from './../model/famille.model';
import { MedicamentService } from './../services/medicament.service';
import { Medicament } from './../model/medicament.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-par-famille',
  templateUrl: './recherche-par-famille.component.html'
})
export class RechercheParFamilleComponent implements OnInit {
  medicaments! : Medicament[];
  familles! : Famille[];
  IdFamille! : number;

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
    this.medicaments = this.medicamentService.rechercherParFamille(this.IdFamille); 
  }

}
