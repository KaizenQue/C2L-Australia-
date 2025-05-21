import { Component, OnInit  } from '@angular/core';
interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
}

@Component({
  selector: 'app-meso-section-seven',
  templateUrl: './meso-section-seven.component.html',
  styleUrls: ['./meso-section-seven.component.css']
})
export class MesoSectionSevenComponent implements OnInit{
  currentSlideIndex = 0;
  slides: CarouselSlide[] = [
    {
      id: '01',
      title: 'BREAKING IT DOWN',
      subtitle: 'Workplace Contamination',
      description: 'Workers in high-risk industries (like construction, shipbuilding, or manufacturing)  often encounter airborne asbestos fibers.',
      imagePath: 'assets/Frame 24 (3).png'
    },
    {
      id: '02',
      title: 'BREAKING IT DOWN',
      subtitle: 'Take-Home Risk',
      description: 'Without proper decontamination, these fibers stick to personal items and are inadvertently carried into the home environment.',
      imagePath: 'assets/Frame 24 (3).png'
    },
    {
      id: '03',
      title: 'BREAKING IT DOWN',
      subtitle: 'Cumulative Exposure',
      description: 'Even low-level, repeated exposure over time can lead to the gradual accumulation of asbestos fibers in the body.',
      imagePath: 'assets/Frame 24 (3).png'
    },
    {
      id: '04',
      title: 'BREAKING IT DOWN',
      subtitle: 'Disease Development',
      description: 'This cumulative exposure can damage the protective mesothelial lining of organs, eventually triggering conditions like mesothelioma, even in individuals who have never directly worked with asbestos.',
      imagePath: 'assets/Frame 24 (3).png'
    },
    {
      id: '05',
      title: 'BREAKING IT DOWN',
      subtitle: 'Hygiene Protocols',
      description: 'Workers should shower and change clothes before returning home to reduce contamination',
      imagePath: 'assets/Frame 24 (3).png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }
}
