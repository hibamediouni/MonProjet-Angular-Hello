import { Injectable } from '@angular/core';

@Injectable()
export class EmployesService {

  constructor() { }
public getAllEmployes(): string[] {
  return ['frfr', 'sarra', 'Hiba'];
}
}
