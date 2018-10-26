import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { StructDirectiveComponent } from './struct-directive/struct-directive.component';
import { CompntInteractionComponent } from './compnt-interaction/compnt-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { LearnServicesComponent } from './learn-services/learn-services.component';
import { StudentsService } from './students.service';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    StructDirectiveComponent,
    CompntInteractionComponent,
    PipesComponent,
    LearnServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
