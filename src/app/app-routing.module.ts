import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { RechercheParFamilleComponent } from './recherche-par-famille/recherche-par-famille.component';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';

const routes: Routes = [
  {path: "Medicaments",component : MedicamentsComponent},
  {path : "add-medicament", component : AddMedicamentComponent},
  {path : "updateMedicament/:id",component : UpdateMedicamentComponent},
  {path : "rechercheParFamille" , component : RechercheParFamilleComponent},
  {path : "rechercheParNom", component: RechercheParNomComponent},
  {path : "", redirectTo : "Medicaments",pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
