import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { City } from './cities';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-country-cities',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './country-cities.component.html',
  styleUrl: './country-cities.component.css'
})
export class CountryCitiesComponent {
  public cities: City[] = [];
  public displayedColumns: string[] = ["cityID", "Name", "Latitude", "Longitude"]
  id: number
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
    this.id = -1;
  }
  ngOnInit(): void {
    this.getCities();
  }
  getCities() {
    let idparam = this.activatedRoute.snapshot.paramMap.get("id")
    this.id = idparam ? + idparam: 0;
    this.http.get<City[]>(`${environment.baseURL}/api/Countries/CountriesCities/${this.id}`).subscribe(
      {
        next: result => this.cities = result, 
        error: error => console.error(error)
      }
    );
  }
}
