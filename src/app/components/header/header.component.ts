import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Personal Appointments';
  showAddAppointment: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  toggleAddAppointment() {
    this.uiService.toggleAddAppointment();
  }
}
