import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../employes.service';
@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {
  private data: string[];
  constructor(private _service: EmployesService) { // Dependency Injection
      }
  ngOnInit() {   // s'execute immédiatement aprés le constructeur
    this.data = this._service.getAllEmployes();
  }

}
