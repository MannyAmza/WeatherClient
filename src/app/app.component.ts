import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        HomeComponent,
        NavBarComponent
    ]
})
export class AppComponent implements OnInit {
  title = "World Cities";
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.init();
  }
}