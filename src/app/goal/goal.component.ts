import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  id: number = 0;
  goal: any = {};

  constructor(private route: ActivatedRoute, private goalService: GoalService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam ? +idParam : 0; 
      console.log('Goal ID:', this.id);
      // Handle the id as needed
      console.log('Goal:', this.goalService.getGoal(this.id));
      this.goal = this.goalService.getGoal(this.id);
    });
  }

}
