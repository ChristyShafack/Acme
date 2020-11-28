import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';

import { AuthGuard } from './user/auth.guard';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
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
                loadChildren: () => 
                import('./products/product.module').then(m => m.ProductModule)},
            { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // Configured Routes
            { path: '**', component: PageNotFoundComponent }
        ]) 
        // { enableTracing: true } it resolves routing problems
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}