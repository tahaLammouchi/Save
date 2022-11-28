import { Famille } from './../model/famille.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { Medicament } from '../model/medicament.model';
import { MedicamentService } from '../services/medicament.service';

@Component({
  selector: 'app-update-medicament',
  templateUrl: './update-medicament.component.html',
  styles: [
  ]
})
export class UpdateMedicamentComponent implements OnInit {
  currentMedicament = new Medicament();
  familles! : Famille[];
  updatedFamId! : number;

  constructor(private activatedRoute:ActivatedRoute,
    private medicamentService : MedicamentService,
    private router : Router) { }

  ngOnInit(): void {
  this.familles = this.medicamentService.listeFamilles();
  this.currentMedicament = this.medicamentService.consulterMedicament(this.activatedRoute.snapshot. params['id']);
  this.updatedFamId = this.currentMedicament.famille.idFam;
  }

  updateMedicament()
{ 
this.currentMedicament.famille = this.medicamentService.consulterFamille(this.updatedFamId);
this.medicamentService.updateMedicament(this.currentMedicament);
this.router.navigate(['Medicaments']);

}
  

}
