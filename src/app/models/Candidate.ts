import { Qualification } from './Qualification';
import { Skill } from './Skill';


export class Candidate {

  Nome: string;
  Cognome: string;
  Email: string;
  DataDiNascita: string;
  TitoloDiStudio: Qualification;
  Competenze: Skill[];
}

