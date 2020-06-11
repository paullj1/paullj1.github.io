import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { PublicationsComponent } from './publications/publications.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile',      data: { animation: 'Profile'},      component: ProfileComponent },
  { path: 'experience',   data: { animation: 'Experience'},   component: ExperienceComponent },
  { path: 'projects',     data: { animation: 'Projects'},     component: ProjectsComponent },
  { path: 'skills',       data: { animation: 'Skills'},       component: SkillsComponent },
  { path: 'publications', data: { animation: 'Publications'}, component: PublicationsComponent },
  { path: 'about',        data: { animation: 'About'},        component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
