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
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
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
    path: 'edit-post/:id',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'kedah',
    loadChildren: () => import('./kedah/kedah.module').then( m => m.KedahPageModule)
  },
  {
    path: 'sarawak',
    loadChildren: () => import('./sarawak/sarawak.module').then( m => m.SarawakPageModule)
  },
  {
    path: 'perlis',
    loadChildren: () => import('./perlis/perlis.module').then( m => m.PerlisPageModule)
  },
  {
    path: 'perak',
    loadChildren: () => import('./perak/perak.module').then( m => m.PerakPageModule)
  },
  {
    path: 'pahang',
    loadChildren: () => import('./pahang/pahang.module').then( m => m.PahangPageModule)
  },
  {
    path: 'nsembilan',
    loadChildren: () => import('./nsembilan/nsembilan.module').then( m => m.NsembilanPageModule)
  },
  {
    path: 'kelantan',
    loadChildren: () => import('./kelantan/kelantan.module').then( m => m.KelantanPageModule)
  },
  {
    path: 'johor',
    loadChildren: () => import('./johor/johor.module').then( m => m.JohorPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'langkawi',
    loadChildren: () => import('./langkawi/langkawi.module').then( m => m.LangkawiPageModule)
  },
  {
    path: 'afamosa',
    loadChildren: () => import('./afamosa/afamosa.module').then( m => m.AfamosaPageModule)
  },
  {
    path: 'kinabalu',
    loadChildren: () => import('./kinabalu/kinabalu.module').then( m => m.KinabaluPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'semenanjung',
    loadChildren: () => import('./semenanjung/semenanjung.module').then( m => m.SemenanjungPageModule)
  },
  {
    path: 'ss',
    loadChildren: () => import('./ss/ss.module').then( m => m.SsPageModule)
  },
  {
    path: 'timur',
    loadChildren: () => import('./timur/timur.module').then( m => m.TimurPageModule)
  },
  {
    path: 'selatan',
    loadChildren: () => import('./selatan/selatan.module').then( m => m.SelatanPageModule)
  },
  {
    path: 'barat',
    loadChildren: () => import('./barat/barat.module').then( m => m.BaratPageModule)
  },
  {
    path: 'utara',
    loadChildren: () => import('./utara/utara.module').then( m => m.UtaraPageModule)
  },
  {
    path: 'pantairhu',
    loadChildren: () => import('./pantairhu/pantairhu.module').then( m => m.PantairhuPageModule)
  },
  {
    path: 'klebang',
    loadChildren: () => import('./klebang/klebang.module').then( m => m.KlebangPageModule)
  },
  {
    path: 'legoland',
    loadChildren: () => import('./legoland/legoland.module').then( m => m.LegolandPageModule)
  },
  {
    path: 'pbesar',
    loadChildren: () => import('./pbesar/pbesar.module').then( m => m.PbesarPageModule)
  },
  {
    path: 'klcc',
    loadChildren: () => import('./klcc/klcc.module').then( m => m.KlccPageModule)
  },
  {
    path: 'aquaria',
    loadChildren: () => import('./aquaria/aquaria.module').then( m => m.AquariaPageModule)
  },
  {
    path: 'irama',
    loadChildren: () => import('./irama/irama.module').then( m => m.IramaPageModule)
  },
  {
    path: 'bayu',
    loadChildren: () => import('./bayu/bayu.module').then( m => m.BayuPageModule)
  },
  {
    path: 'cahaya',
    loadChildren: () => import('./cahaya/cahaya.module').then( m => m.CahayaPageModule)
  },
  {
    path: 'panjang',
    loadChildren: () => import('./panjang/panjang.module').then( m => m.PanjangPageModule)
  },
  {
    path: 'mantanani',
    loadChildren: () => import('./mantanani/mantanani.module').then( m => m.MantananiPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
