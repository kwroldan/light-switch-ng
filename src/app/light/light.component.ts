import { Component, Input} from '@angular/core';
import { NightLightComponent } from '../night-light/night-light.component';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent {
 @Input() currentLightStatus!: string;
}
