import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { StructDirectiveComponent } from './struct-directive/struct-directive.component';
import { CompntInteractionComponent } from './compnt-interaction/compnt-interaction.component';
import { LearnServicesComponent } from './learn-services/learn-services.component';
import { PipesComponent } from './pipes/pipes.component';
import { LearnRoutingComponent } from './learn-routing/learn-routing.component';

const routes: Routes = [
  { path: 'binding', component: BindingComponent },
  { path: 'struct-directive', component: StructDirectiveComponent },
  { path: 'compnt-interaction', component: CompntInteractionComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'learn-services', component: LearnServicesComponent },
  { path: 'learn-routing', component: LearnRoutingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BindingComponent, PipesComponent]
