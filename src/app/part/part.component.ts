import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from '../core/core.type';

@Component({
  selector: 'app-part',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss'],
})
export class PartComponent implements CoreComponent {
  @Input() data: any;
}
