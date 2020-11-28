// for canActivate() GUARD import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';
// for old preloader import { PreloadAllModules, RouterModule } from '@angular/router';

import { AuthGuard } from './user/auth.guard';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule } from '@angular/router';
import { SelectiveStrategy } from './selective-strategy.service';
import { WelcomeComponent } from './home/welcome.component';

// Another Alternative
// const ROUTES = [
//     { path: 'welcome', component: WelcomeComponent },
//     { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // Configured Routes
//     { path: '**', component: PageNotFoundComponent }
// ]

@NgModule ({
    imports:[
        // RouterModule.forRoot(ROUTES),
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: 'products',
            canActivate:[AuthGuard],
            data:{ preload: true}, //custom preloader
            // canLoad:[AuthGuard],
                loadChildren: () => 
                import('./products/product.module').then(m => m.ProductModule)},
            { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // Configured Routes
            { path: '**', component: PageNotFoundComponent }
        ], { preloadingStrategy: SelectiveStrategy})  //Custom preloader
        // old preloader { preloadingStrategy: PreloadAllModules}
        // { enableTracing: true } it resolves routing problems
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}