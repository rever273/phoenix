import { Transaction } from '@signumjs/core';
import { Amount } from '@signumjs/util';

export interface BalanceHistoryItem {
  readonly timestamp: number;
  readonly transactionId: string;
  readonly balance: number;
  readonly transaction: Transaction;
}
