import { Component,OnInit } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-todays-appointments',
  standalone: false,
  
  templateUrl: './todays-appointments.component.html',
  styleUrl: './todays-appointments.component.css'
})
export class TodaysAppointmentsComponent {
  public todaysAppointments: any[] = []; 

  constructor(private master:MasterService) {}

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0]; 

    this.master.getAppointments().subscribe((appointments) => {
      this.todaysAppointments = appointments.filter(
        (appointment) => appointment.date === today
      );
    });
  }
}
