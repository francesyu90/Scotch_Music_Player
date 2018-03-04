import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class AppService {

  constructor(private _electronService: ElectronService) {}

  initMenu() {
    var menu = this._electronService.remote.Menu.buildFromTemplate([{
      role: 'quit'
    }]);
    this._electronService.remote.Menu.setApplicationMenu(menu);
  }

}
