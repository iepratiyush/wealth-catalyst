import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GoalSetterComponent } from './goal-setter/goal-setter.component';
import { TradeCalendarComponent } from './trade-calendar/trade-calendar.component';
import { IpoFundingComponent } from './ipo-funding/ipo-funding.component';
import { UnlistedSharesComponent } from './unlisted-shares/unlisted-shares.component';
import { P2pLendingComponent } from './p2p-lending/p2p-lending.component';
import { TradeReplayComponent } from './trade-replay/trade-replay.component';
import { GoalComponent } from './goal/goal.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'goal-setter', component: GoalSetterComponent },
  { path: 'trade-calendar', component: TradeCalendarComponent },
  { path: 'ipo-funding', component: IpoFundingComponent },
  { path: 'unlisted-shares', component: UnlistedSharesComponent },
  { path: 'p2p-lending', component:  P2pLendingComponent},
  { path: 'trade-replay', component:  TradeReplayComponent},
  { path: 'goal/:id', component:  GoalComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }