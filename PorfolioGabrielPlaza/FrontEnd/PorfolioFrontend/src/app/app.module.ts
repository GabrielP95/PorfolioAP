import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutmeComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      titleFontSize:"18",
      titleColor:"var(--argprog-blue)",
      titleFontWeight:"500",
      subtitleColor:"var(--details-color)",
      subtitleFontSize:"15",
      subtitleFontWeight:"700",
      radius:70,
      outerStrokeWidth:8,
      innerStrokeWidth:1,
      outerStrokeColor:"var(--details-color)",
      innerStrokeColor:"var(--argprog-blue)",
      animation:true,
      animationDuration:1000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
