import { Component } from '@angular/core';

@Component({
  selector: 'app-meso-section-six',
  templateUrl: './meso-section-six.component.html',
  styleUrls: ['./meso-section-six.component.css']
})
export class MesoSectionSixComponent {
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
