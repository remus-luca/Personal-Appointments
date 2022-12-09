import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Appointment } from 'src/app';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.scss'],
})
export class AppointmentItemComponent implements OnInit {
  @Input() appointment: Appointment;
  faTimes = faTimes;
  @Output() onDeleteAppointment: EventEmitter<Appointment> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Appointment> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onDelete(appointment) {
    this.onDeleteAppointment.emit(appointment);
  }
  onToggle(appointment) {
    this.onToggleReminder.emit(appointment);
  }
}
