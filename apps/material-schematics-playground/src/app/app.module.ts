import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { GlobalNavComponent } from './global-nav/global-nav.component';

@NgModule({
    declarations: [AppComponent, GlobalNavComponent],
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking',
        }),
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
