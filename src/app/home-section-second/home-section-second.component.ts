import { Component } from '@angular/core';

@Component({
  selector: 'app-home-section-second',
  templateUrl: './home-section-second.component.html',
  styleUrls: ['./home-section-second.component.css']
})
export class HomeSectionSecondComponent {
  facts = [
    'Mesothelioma is a rare and aggressive cancer primarily caused by asbestos exposure, affecting the lungs, abdomen, or heart.',
    'Asbestos, a naturally occurring mineral with heat-resistant properties, was widely used in construction, shipbuilding, and manufacturing.',
    'Inhalation or ingestion of microscopic asbestos fibers causes them to lodge in the mesothelium, leading to inflammation, scarring, and genetic mutations.'
  ];
}
