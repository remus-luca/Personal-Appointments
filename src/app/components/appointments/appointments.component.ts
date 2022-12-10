import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app';
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

  deleteAppointment(appointment: Appointment) {
    this.appointmentService
      .deleteAppointment(appointment)
      .subscribe(
        () =>
          (this.appointments = this.appointments.filter(
            (e) => e.id != appointment.id
          ))
      );
  }
  toggleReminder(appointment: Appointment) {
    appointment.reminder = !appointment.reminder;
    this.appointmentService.updateAppointmentReminder(appointment).subscribe();
  }
  addAppointment(appointment: Appointment) {
    this.appointmentService
      .addAppointment(appointment)
      .subscribe((appointment) => {
        this.appointments.push(appointment);
      });
  }
}
