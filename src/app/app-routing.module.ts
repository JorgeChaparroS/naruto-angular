import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants } from './shared/utils/Constants';

const routes: Routes = [
  {
    path: Constants.ROUTES.MAIN_PAGE,
    loadChildren: () => import('./containers/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: Constants.ROUTES.CLANS_PAGE,
    loadChildren: () => import('./containers/clans/clans.module').then(m => m.ClansModule)
  },
  {
    path: Constants.ROUTES.CHARACTERS_PAGE,
    loadChildren: () => import('./containers/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: Constants.ROUTES.AUTHOR_PAGE,
    loadChildren: () => import('./containers/author/author.module').then(m => m.AuthorModule)
  },
  {
    path: Constants.ROUTES.ABOUT_PAGE,
    loadChildren: () => import('./containers/about/about.module').then(m => m.AboutModule)
  },
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
