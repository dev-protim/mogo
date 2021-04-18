import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as component from './index';
import { MainModuleRoutingModule } from './main-module-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountUpModule } from 'ngx-countup';
import { TeamService } from '../services/team.service';
import { FormsModule } from '@angular/forms';
import { QuizesComponent } from './quizes/quizes.component';
import { QuizCardSearchPipe } from '../pipes/quiz-card-search.pipe';
import { QuizsOptionComponent } from './quizs-option/quizs-option.component';
import { QuizMetrixService } from '../services/quiz-metrix.service';


@NgModule({
  declarations: [ ...component.allComponents, QuizesComponent, QuizCardSearchPipe, QuizsOptionComponent],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    LayoutModule,
    CarouselModule,
    CountUpModule,
    FormsModule
  ],
  providers: [TeamService, QuizMetrixService]
})
export class MainModuleModule { 
}
