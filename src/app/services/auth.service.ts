import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isSeller = true;

  constructor() {}

  isSeller(): boolean {
    return this._isSeller;
  }
}
