import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  rowData: any;
  selectedData: any;
  constructor() { }
  testForm = new FormGroup({
    id: new FormControl(0),
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    direccion : new FormControl(''),
    ciudad: new FormControl('')
  });

  ngOnInit(): void {
    this.rowData = [{
      nombres: 'Juerguen Stefan',
      apellidos: 'Herrera',
      direccion: '14 de Septiembre',
      ciudad: 'Managua'
    }]
  }
  
  fc(name: string){
    this.testForm.get(name).value;
  }
}
