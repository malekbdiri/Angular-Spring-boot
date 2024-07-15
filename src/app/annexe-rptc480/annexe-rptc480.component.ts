import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AnnexeService } from '../services/AnnexeService';  
import { Annexe480 } from '../models/Annexe480';
import { AuthService } from '../services/AuthService';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAnnexeComponent } from '../update-annexe/update-annexe.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-annexe-rptc480',
  templateUrl: './annexe-rptc480.component.html',
  styleUrls: ['./annexe-rptc480.component.css']
})
export class AnnexeRptc480Component implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  sideBarOpen = true;
  selectedDate: any;
  showtable: Boolean = false ;
  annexes: Annexe480[] = [];
  donnee:any;
  fpnValue: any;
  fpnZero: boolean = false;

  constructor(
    private datePipe: DatePipe, 
    private annexeService: AnnexeService,
    private authService: AuthService, 
    private router: Router,
    public dialog: MatDialog) {
    this.selectedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
  }

  ngOnInit(): void { }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout() {
    this.authService.logout();
  }

  getAnnexe480(month:  number, year: number) {
    if (this.selectedDate) {
      const date = new Date(this.selectedDate);
      const mois = date.getMonth() + 1;
      const annee = date.getFullYear();

      this.annexeService.getAnnexe480(mois, annee).subscribe(
        (data: Annexe480[]) => {
          this.annexes = data;
          this.showtable = true ;
          this.donnee = data;
          this.fpnZero = data.some(annexe  => annexe.fpn === 0);

        },
        (error) => {
          
          console.error('Error:', error);
        }
      );
    }
  }

  generateXMLFile() {
    if (this.selectedDate) {
      const date = new Date(this.selectedDate);
      const mois = date.getMonth() + 1;
      const annee = date.getFullYear();
  
      this.annexeService.generateXML(mois, annee).subscribe(
        (data: Blob) => {
          const downloadURL = window.URL.createObjectURL(data);
          const link = document.createElement('a');
          link.href = downloadURL;
          link.download = `annexe480_${mois}_${annee}.xml`;
          link.click();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

  generateExcelFile() {
    const dataToExport = this.annexes.map(({ id, ...rest }) => rest);
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook: XLSX.WorkBook = {
      Sheets: { 'data': worksheet },
      SheetNames: ['data']
    };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'annexe480');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    const downloadURL = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = downloadURL;
    link.download = `${fileName}.xlsx`;
    link.click();
  }

  updateFpnS(): void {
    if (this.selectedDate && this.fpnValue != null) {
      const date = new Date(this.selectedDate);
      const mois = date.getMonth() + 1;
      const annee = date.getFullYear();

      const updateRequest = {
        fpn: this.fpnValue,
        mois: mois,
        annee: annee
      };

      console.log('Sending update request:', updateRequest);

      this.annexeService.updateFpn(this.fpnValue,mois,annee).subscribe(
        (response: any) => {
          console.log(this.fpnValue);
          
          console.log('FPN updated successfully:', response);
          this.getAnnexe480(mois, annee);
        },
        (error: any) => {
          console.error('Error updating FPN:', error);
        }
      );
    } else {
      console.error('Date or FPN value is not set.');
    }
  }

  deleteAnnexe(id: number, index: number): void {
      this.annexeService.deleteAnnexe(id).subscribe(
        response => {
          console.log(response);
          this.annexes.splice(index, 1);
        },
        error => {
          console.error('ERROR!', error);
        }
      );
  }

  openUpdateDialog(annexe: Annexe480): void {
    const dialogRef = this.dialog.open(UpdateAnnexeComponent, {
      width: '500px',
      data: annexe
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAnnexe480(result.mois, result.annee);
      }
    });
  }
}
