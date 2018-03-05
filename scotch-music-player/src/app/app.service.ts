import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class AppService {

  constructor(private _electronService: ElectronService) {}

  getAppName() {
    return "Scotch Music Player";
  }

  terminateApp() {
    this._electronService.remote.app.quit();
  }

}
