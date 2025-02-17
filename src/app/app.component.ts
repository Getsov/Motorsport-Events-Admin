import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/core/header/header.component';
import { HeroComponent } from './components/core/hero/hero.component';
import { CommonModule } from '@angular/common';
import { environment } from '../enviroments/enviroment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isLandingPage: boolean = false;
  private mapsLoaded: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isLandingPage = event.url === '/';
        if (!this.mapsLoaded && event.url.includes('event-details')) {
          this.loadGoogleMapsScript();
        }
      }
    });
  }

  private loadGoogleMapsScript(): void {
    if (this.mapsLoaded) return;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      this.mapsLoaded = true;
    };

    document.head.appendChild(script);
  }
}
