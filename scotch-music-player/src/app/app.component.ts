import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _electronService: ElectronService) {}

  ngOnInit() {
    var menu = this._electronService.remote.Menu.buildFromTemplate([{
      role: 'quit'
    }]);
    this._electronService.remote.Menu.setApplicationMenu(menu);
  }

  title = 'app';
}
