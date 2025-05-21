import { Component } from '@angular/core';

@Component({
  selector: 'app-meso-section-nine',
  templateUrl: './meso-section-nine.component.html',
  styleUrls: ['./meso-section-nine.component.css']
})
export class MesoSectionNineComponent {
  expandedRegions: { [key: string]: boolean } = {
    wa: false,
    nsw: false,
    vic: false,
    qld: false,
  };

  hoveredButton: string | null = null;

  toggleRegion(region: string) {
    this.expandedRegions[region] = !this.expandedRegions[region];
  }
}
