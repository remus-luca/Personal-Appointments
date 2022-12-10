import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Appointment } from 'src/app';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
})
export class AddAppointmentComponent implements OnInit {
  @Output() onAddAppointment: EventEmitter<Appointment> = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a appointment!');
      return;
    }
    const newAppointment = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.text = '';
    (this.day = ''), (this.reminder = false);
  }
}
