import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService } from './logger.service';
import { DataService } from './data.service';
import { PlainLoggerService } from './plain-logger.service';
import { dataServiceFactory } from './data.service.factory';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    // PlainLoggerService,
    // { provide: LoggerService, useExisting: PlainLoggerService },
    // { provide: LoggerService, useValue: {
    //   log: (message) => console.log(`MESSAGE: ${message}`),
    //   error: (message => console.log(`PROBLEM: ${message}`))
    // }},
    // { provide: DataService, useFactory: dataServiceFactory, deps: [LoggerService] }
    DataService, LoggerService
  ],
})
export class CoreModule {

  // Prevent CoreModule from being imported by more than one other module.
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
