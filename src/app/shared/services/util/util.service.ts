import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  public getEmailAddress(): string {
    return atob('cmljYXJkb21mbXNvdXNhQGdtYWlsLmNvbQ==');
  }
  public getMailtTo(): string {
    return `mailTo:${this.getEmailAddress()}?subject=Contact from vCard`;
  }
}
