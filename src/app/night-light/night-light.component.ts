import { Component } from '@angular/core';

@Component({
  selector: 'app-night-light',
  templateUrl: './night-light.component.html',
  styleUrls: ['./night-light.component.css']
})
export class NightLightComponent {

  lightStatus = "off";

  flipTheSwitch() {
    if (this.lightStatus === "off") {
      this.lightStatus = "on"
    } else {
      this.lightStatus = "off";
    }
  }
}
