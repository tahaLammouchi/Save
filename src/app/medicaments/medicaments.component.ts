import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';
import { Medicament } from '../model/medicament.model';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {
  medicaments : Medicament[];

  constructor(private medicamentService : MedicamentService) {
    this.medicaments = medicamentService.listeMedicaments();
  }

  ngOnInit(): void {
  }
  supprimerMedicament(m : Medicament){
    let conf = confirm("Etes-vous sur ?");
    if(conf)
    this.medicamentService.supprimerMedicament(m);
  }

}
