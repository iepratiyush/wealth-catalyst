import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  goals = [
    {
      id: 1,
      icon: 'home',
      text: 'Home',
      chipText: 'Real Estate',
      startDate: '2021-01-01',
      endDate: '2022-01-01',
      value: 75,
      bufferValue: 50,
      currentValue: 500000,
      totalValue: 1000000,
      interestedIn: ["Delivery", "Mutual Fund"]
    },
    {
      id: 2,
      icon: 'directions_car',
      text: 'Car',
      chipText: 'Automobile',
      startDate: '2021-01-01',
      endDate: '2022-01-01',
      value: 60,
      bufferValue: 30,
      currentValue: 300000,
      totalValue: 500000,
      interestedIn: ["Intra Day", "Commodity"]
    },
    {
      id: 3,
      icon: 'school',
      text: 'Education',
      chipText: 'Higher Education',
      startDate: '2021-01-01',
      endDate: '2022-01-01',
      value: 80,
      bufferValue: 40,
      currentValue: 800000,
      totalValue: 1000000,
      interestedIn: [ "All"]
    },
    {
      id: 4,
      icon: 'flight_takeoff',
      text: 'Travel',
      chipText: 'Vacation',
      startDate: '2021-01-01',
      endDate: '2022-01-01',
      value: 20,
      bufferValue: 10,
      currentValue: 20000,
      totalValue: 100000,
      interestedIn: ["Delivery", "Mutual Fund"]
    },
    {
      id: 5,
      icon: 'fitness_center',
      text: 'Fitness',
      chipText: 'Health',
      startDate: '2021-01-01',
      endDate: '2022-01-01',
      value: 10,
      bufferValue: 5,
      currentValue: 1000,
      totalValue: 10000,
      interestedIn: ["Intra Day", "Commodity"]
    },
    {
      id: 6,
      icon: 'business',
      text: 'Business',
      chipText: 'Entrepreneurship',
      startDate: '2021-01-01',
      endDate: '2022-01-01',
      value: 90,
      bufferValue: 45,
      currentValue: 900000,
      totalValue: 1000000,
      interestedIn: [ "All"]
    },
    {
      id: 7,
      icon: 'celebration',
      text: 'Wedding',
      chipText: 'Wedding',
      startDate: '2021-01-01',
      endDate: '2022-01-01',
      value: 85,
      bufferValue: 55,
      currentValue: 850000,
      totalValue: 1000000,
      interestedIn: ["Delivery", "Mutual Fund"]
    }
  ];

  addGoal(goal: any) {
    this.goals.push(goal);
  }

  getAllGoals() {
    return this.goals;
  }

  getGoal(id: number) {
    return this.goals.find(goal => goal.id === id);
  }

  constructor() { }
}
