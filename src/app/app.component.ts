import { Component, VERSION } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { LogsService } from './services/logs.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogsService]
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isHeaderVisible = true;

  constructor(private logs: LogsService) {}

  async onButtonClick() {
    this.isHeaderVisible = !this.isHeaderVisible;
    const logs = await lastValueFrom(this.logs.getAllLogs());
    console.debug(logs);
  }
}
