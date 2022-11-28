import { Famille } from './../model/famille.model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicament } from '../model/medicament.model';
import { MedicamentService } from '../services/medicament.service';

@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.css']
})
export class AddMedicamentComponent implements OnInit {
  
  newMedicament = new Medicament();
  familles! : Famille[];
  newIdFam ! : number;
  newFamille! : Famille;
  

  constructor(private medicamentService : MedicamentService,
    private router : Router) { }

  addMedicament(){
    this.newFamille = this.medicamentService.consulterFamille(this.newIdFam);
    this.newMedicament.famille = this.newFamille;
     this.medicamentService.ajouterMedicament(this.newMedicament);
     this.router.navigate(['Medicaments']);


  }

  ngOnInit(): void {
    this.familles = this.medicamentService.listeFamilles();
  }

}
