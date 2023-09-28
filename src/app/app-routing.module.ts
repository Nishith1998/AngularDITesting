import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { NonLazyComponent } from './modules/non-lazy/non-lazy/non-lazy.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'nonLazyFeature', component: NonLazyComponent },
  {
    path: 'alphabetGame',
    loadChildren: () =>
      import('src/app/modules/alphabet-game/alphabet-game.module').then(
        (m) => m.AlphabetGameModule
      ),
  },
  {
    path: 'lazyFeature',
    loadChildren: () =>
      import('src/app/modules/lazy-feature/lazy-feature.module').then(
        (m) => m.LazyFeatureModule
      ),
  },
  {
    path: 'lazyFeatureTwo',
    loadChildren: () =>
      import('src/app/modules/lazy-two/lazy-two.module').then(
        (m) => m.LazyTwoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
