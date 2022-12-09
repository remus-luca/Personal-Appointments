import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app';
import { APPOINTMENTS } from 'src/app/appointments';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];
  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService
      .getAppointments()
      .subscribe((appointments) => (this.appointments = appointments));
  }
}
