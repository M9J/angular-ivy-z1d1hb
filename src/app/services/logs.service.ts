import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface Log {
  id: number;
  timestamp: string;
}

@Injectable()
export class LogsService {
  apiUrl = 'https://my-json-server.typicode.com/M9J/mock-server-ng/logs';

  constructor(private http: HttpClient) {}

  getAllLogs(): Observable<Log[]> {
    console.debug('getting all logs');
    return this.http.get<Log[]>(this.apiUrl);
  }
}
