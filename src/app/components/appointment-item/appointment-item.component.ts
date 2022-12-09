import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
