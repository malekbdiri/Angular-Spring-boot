import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnnexeService } from '../services/AnnexeService';
import { Annexe480 } from '../models/Annexe480';

@Component({
  selector: 'app-update-annexe',
  templateUrl: './update-annexe.component.html',
  styleUrls: ['./update-annexe.component.css']
})
export class UpdateAnnexeComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateAnnexeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Annexe480,
    private annexeService: AnnexeService) { }

  onSave(): void {
    this.annexeService.updateAnnexe(this.data.id, this.data).subscribe(
      response => {
        this.dialogRef.close(response);
      },
      error => {
        console.error('Error updating annexe:', error);
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
