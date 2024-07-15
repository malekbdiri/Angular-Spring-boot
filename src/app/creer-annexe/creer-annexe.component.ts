import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnnexeService } from '../services/AnnexeService';  
import { AuthService } from '../services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-annexe',
  templateUrl: './creer-annexe.component.html',
  styleUrls: ['./creer-annexe.component.css']
})
export class CreerAnnexeComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  annexeForm: FormGroup;
  sideBarOpen = true;

  constructor(private fb: FormBuilder, private annexeService: AnnexeService, private authService: AuthService, private router: Router) {
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
  public data: string[] = ['48001010000000', '48001020000000', '48002000000000'];

  ngOnInit(): void {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  onSubmit() {
    if (this.annexeForm.valid) {
      console.log(this.annexeForm.value);
      this.annexeService.ajouterAnnexe(this.annexeForm.value).subscribe(
        response => {
        alert("Annexe ajoutée avec succès ") 
        this.router.navigate  (['/annexe-rptc480'])   
         },
        error => {
          console.error('Error', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
