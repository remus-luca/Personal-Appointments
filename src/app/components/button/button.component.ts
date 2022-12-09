import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();

  constructor() {}
  onClick() {
    this.btnClick.emit();
  }
  ngOnInit(): void {}
}
