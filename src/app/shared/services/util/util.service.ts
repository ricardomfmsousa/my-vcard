import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  public getEmailAddress(): string {
    return atob('cmljYXJkb21mbXNvdXNhQGdtYWlsLmNvbQ==');
  }
  public getMailTo(): string {
    return `mailTo:${this.getEmailAddress()}?subject=Contact from vCard`;
  }
  public openMailTo(): void {
    window.location.href = this.getMailTo();
  }
}
