import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeSectionOneComponent } from './home-section-one/home-section-one.component';
import { HomeSectionSecondComponent } from './home-section-second/home-section-second.component';
import { HomeSectionThirdComponent } from './home-section-third/home-section-third.component';
import { HomeSectionFourComponent } from './home-section-four/home-section-four.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { SubmitClaimFormComponent } from './submit-claim-form/submit-claim-form.component';
import { MesothelimoPageComponent } from './mesothelimo-page/mesothelimo-page.component';
// import { CarouselModule } from 'primeng/carousel';
// import { ButtonModule } from 'primeng/button';
import { MesoSectionOneComponent } from './meso-section-one/meso-section-one.component';
import { MesoSectionSecondComponent } from './meso-section-second/meso-section-second.component';
import { MesoSectionThirdComponent } from './meso-section-third/meso-section-third.component';
import { MesoSectionFourthComponent } from './meso-section-fourth/meso-section-fourth.component';
import { MesoSectionFiveComponent } from './meso-section-five/meso-section-five.component';
import { MesoSectionSixComponent } from './meso-section-six/meso-section-six.component';
import { MesoSectionSevenComponent } from './meso-section-seven/meso-section-seven.component';
import { MesoSectionEightComponent } from './meso-section-eight/meso-section-eight.component';
import { MesoSectionNineComponent } from './meso-section-nine/meso-section-nine.component';
import { MesoSectionTenComponent } from './meso-section-ten/meso-section-ten.component';
import { AboutUSPageComponent } from './about-uspage/about-uspage.component';
import { AboutUsOneComponent } from './about-us-one/about-us-one.component';
import { AboutUsTwoComponent } from './about-us-two/about-us-two.component';
import { AboutUsThreeComponent } from './about-us-three/about-us-three.component';
import { AboutUsFourComponent } from './about-us-four/about-us-four.component';
import { AboutUsFiveComponent } from './about-us-five/about-us-five.component';
import { AboutUsSixComponent } from './about-us-six/about-us-six.component';
import { AboutUsSevenComponent } from './about-us-seven/about-us-seven.component';
import { HeaderAboutUsComponent } from './header-about-us/header-about-us.component';
import { FooterAboutUsComponent } from './footer-about-us/footer-about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SliderdemoComponent } from './sliderdemo/sliderdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    // CarouselModule,
    // ButtonModule,
    HeaderComponent,
    HomePageComponent,
    HomeSectionOneComponent,
    HomeSectionSecondComponent,
    HomeSectionThirdComponent,
    HomeSectionFourComponent,
    FooterComponent,
    ContactusComponent,
    ClaimFormComponent,
    SubmitClaimFormComponent,
    MesothelimoPageComponent,
    MesoSectionOneComponent,
    MesoSectionSecondComponent,
    MesoSectionThirdComponent,
    MesoSectionFourthComponent,
    MesoSectionFiveComponent,
    MesoSectionSixComponent,
    MesoSectionSevenComponent,
    MesoSectionEightComponent,
    MesoSectionNineComponent,
    MesoSectionTenComponent,
    AboutUSPageComponent,
    AboutUsOneComponent,
    AboutUsTwoComponent,
    AboutUsThreeComponent,
    AboutUsFourComponent,
    AboutUsFiveComponent,
    AboutUsSixComponent,
    AboutUsSevenComponent,
    HeaderAboutUsComponent,
    FooterAboutUsComponent,
    PrivacyPolicyComponent,
    SliderdemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
