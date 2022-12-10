import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Appointment } from 'src/app';
import { UiService } from 'src/app/services/ui.service';

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
  showAddAppointment: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = uiService
      .onToggle()
      .subscribe((value) => (this.showAddAppointment = value));
  }

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
    this.onAddAppointment.emit(newAppointment);
    this.text = '';
    (this.day = ''), (this.reminder = false);
  }
}
