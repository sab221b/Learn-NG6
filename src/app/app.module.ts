import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { StructDirectiveComponent } from './struct-directive/struct-directive.component';
import { CompntInteractionComponent } from './compnt-interaction/compnt-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { LearnServicesComponent } from './learn-services/learn-services.component';
import { StudentsService } from './students.service';
import { HttpClientModule } from '@angular/common/http';
import { LearnRoutingComponent } from './learn-routing/learn-routing.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    StructDirectiveComponent,
    CompntInteractionComponent,
    PipesComponent,
    LearnServicesComponent,
    LearnRoutingComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
