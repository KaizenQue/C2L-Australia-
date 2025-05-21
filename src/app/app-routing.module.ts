import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeSectionFourComponent } from './home-section-four/home-section-four.component';
import { HomeSectionThirdComponent } from './home-section-third/home-section-third.component';
import { HomeSectionSecondComponent } from './home-section-second/home-section-second.component';
import { HomeSectionOneComponent } from './home-section-one/home-section-one.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { SubmitClaimFormComponent } from './submit-claim-form/submit-claim-form.component';
import { MesothelimoPageComponent } from './mesothelimo-page/mesothelimo-page.component';
import { AboutUSPageComponent } from './about-uspage/about-uspage.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SliderdemoComponent } from './sliderdemo/sliderdemo.component';


const routes: Routes = [

  { path: '', component: HomePageComponent }, 
  { path: 'header', component: HeaderComponent }, 
  { path: 'HomeSectionFour', component: HomeSectionFourComponent }, 
  { path: 'HomeSectionThird', component: HomeSectionThirdComponent }, 
  { path: 'HomeSectionSecond', component: HomeSectionSecondComponent }, 
  { path: 'HomeSectionOne', component: HomeSectionOneComponent }, 
  { path: 'Footer', component: FooterComponent }, 
  { path: 'Contactus', component: ContactusComponent }, 
  { path: 'ClaimForm', component: ClaimFormComponent }, 
  { path: 'SubmitClaimForm', component: SubmitClaimFormComponent }, 
  { path: 'MesothelimoPage', component: MesothelimoPageComponent }, 
  { path: 'AboutUS', component: AboutUSPageComponent }, 
  { path: 'PrivacyPolicy', component: PrivacyPolicyComponent }, 
  { path: 'Sliderdemo', component: SliderdemoComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Ensure this is exported
})
export class AppRoutingModule {} // Ensure this is correctly exported
