import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'guides',
    loadChildren: () => import('./guides/guides.module').then( m => m.GuidesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./plan/plan.module').then( m => m.PlanPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'selangor',
    loadChildren: () => import('./selangor/selangor.module').then( m => m.SelangorPageModule)
  },
  {
    path: 'kl',
    loadChildren: () => import('./kl/kl.module').then( m => m.KlPageModule)
  },
  {
    path: 'sabah',
    loadChildren: () => import('./sabah/sabah.module').then( m => m.SabahPageModule)
  },
  {
    path: 'terengganu',
    loadChildren: () => import('./terengganu/terengganu.module').then( m => m.TerengganuPageModule)
  },
  {
    path: 'melaka',
    loadChildren: () => import('./melaka/melaka.module').then( m => m.MelakaPageModule)
  },
  {
    path: 'ppinang',
    loadChildren: () => import('./ppinang/ppinang.module').then( m => m.PpinangPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'view-post',
    loadChildren: () => import('./view-post/view-post.module').then( m => m.ViewPostPageModule)
  },
  {
    path: 'edit-post',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
