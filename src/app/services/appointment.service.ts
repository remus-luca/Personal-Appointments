import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '..';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiUrl = 'http://localhost:5000/appointments';
  constructor(private http: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl);
  }

  deleteAppointment(appointment: Appointment): Observable<Appointment> {
    const url = `${this.apiUrl}/${appointment.id}`;
    return this.http.delete<Appointment>(url);
  }
}
