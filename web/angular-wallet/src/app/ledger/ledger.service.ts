import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from 'app/app.service';
import { NotifierService } from 'angular-notifier';
import { I18nService } from 'app/layout/components/i18n/i18n.service';

@Injectable({
  providedIn: 'root',
})
export class LedgerService {

  public connected: BehaviorSubject<any> = new BehaviorSubject(false);
  public latestTransactionSignature: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(
    private appService: AppService,
    private notifierService: NotifierService,
    private i18nService: I18nService
  ) { }

  public setConnected(connected) {
    console.log(connected);
    this.connected.next(connected);
  }

  public setLatestTransactionSignature(latestTransactionSignature) {
    console.log(latestTransactionSignature);
    this.latestTransactionSignature.next(latestTransactionSignature);
  }

  public init() {
    this.appService.onIpcMessage('ledger-connected', () => {
      this.setConnected(true);
      this.notifierService.notify('success', this.i18nService.getTranslation('ledger_connected'));
    });
    this.appService.onIpcMessage('ledger-disconnected', () => {
      this.setConnected(false);
      this.notifierService.notify('success', this.i18nService.getTranslation('ledger_disconnected'));
    });
    this.appService.onIpcMessage('ledger-sign-transaction-response', (latestTransactionSignature) => {
      this.setLatestTransactionSignature(latestTransactionSignature);
    })
  }
}