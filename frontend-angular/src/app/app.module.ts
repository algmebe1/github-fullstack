import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RepolistComponent } from './components/repolist/repolist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateRepoComponent } from './components/create-repo/create-repo.component';
import { RepoitemComponent } from './components/repoitem/repoitem.component';
import { CreateRepoButtonComponent } from './components/create-repo-button/create-repo-button.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ErrorstateComponent } from './components/errorstate/errorstate.component';
import { ReloadRepolistButtonComponent } from './components/reload-repolist-button/reload-repolist-button.component';
import { EmptystateComponent } from './components/emptystate/emptystate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RepolistComponent,
    ProfileComponent,
    CreateRepoComponent,
    RepoitemComponent,
    CreateRepoButtonComponent,
    HeaderComponent,
    NavigationComponent,
    WelcomeComponent,
    FilterComponent,
    FilterPipe,
    ErrorstateComponent,
    ReloadRepolistButtonComponent,
    EmptystateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
