import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creer-annexe',
  templateUrl: './creer-annexe.component.html',
  styleUrls: ['./creer-annexe.component.css']
})
export class CreerAnnexeComponent implements OnInit {
  annexeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.annexeForm = this.fb.group({
      numSeqPers: [''],
      mois: [''],
      annee: [''],
      rubriqueId: [''],
      profParticul: [''],
      typeIdBct: [''],
      idBct: [''],
      tpBNA: [''],
      pieceBNA: [''],
      nom: [''],
      codeActivite: [''],
      secteurActivite: [''],
      classe_T_1: [''],
      classeT: [''],
      eng_T_1: [''],
      eng_T: [''],
      engDirect_T_1: [''],
      engSig_T_1: [''],
      decouvert: [''],
      fpn: ['']
    });
  }

  ngOnInit(): void {}


  onSubmit() {
    console.log(this.annexeForm.value);
  }
}
