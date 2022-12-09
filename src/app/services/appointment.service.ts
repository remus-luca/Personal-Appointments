import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from '..';
import { APPOINTMENTS } from '../appointments';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor() {}
  getAppointments(): Observable<Appointment[]> {
    const appointments = of(APPOINTMENTS);
    return appointments;
  }
}
