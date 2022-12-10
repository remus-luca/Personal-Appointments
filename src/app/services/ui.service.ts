import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddAppointment: boolean = false;
  private subject = new Subject<any>();
  constructor() {}

  toggleAddAppointment(): void {
    this.showAddAppointment = !this.showAddAppointment;
    this.subject.next(this.showAddAppointment);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
