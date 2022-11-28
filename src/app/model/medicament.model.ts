import { Famille } from './famille.model';

export class Medicament{
    idMedicament? : number;
    nomMedicament? : string;
    prixMedicament? : number;
    paysFabricant? : string;
    datefabrication? : Date;
    famille! : Famille;
}