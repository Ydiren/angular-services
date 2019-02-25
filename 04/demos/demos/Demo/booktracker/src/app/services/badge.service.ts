import { Injectable } from '@angular/core';

@Injectable()
export class BadgeService {

  constructor() { }

  getReaderBadge(minutesRead: number): string {
    if (minutesRead > 5000) {
      return 'Book Worm';
    }

    if(minutesRead > 2500) {
      return 'Page Turner';
    }

    return 'Getting Started';
  }
}
