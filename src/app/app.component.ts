import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

//import disableScroll from 'disable-scroll';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { DadosPage } from "../pages/dados/dados";
import { ProntuárioPage } from "../pages/prontuário/prontuário";
import { AnexosPage } from "../pages/anexos/anexos";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Informações Pessoais', component: DadosPage, icon: 'person'},
      {title: 'Prontuário', component: ProntuárioPage, icon: 'clipboard'},
      {title: 'Anexos', component: AnexosPage, icon: 'attach'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {

      //*** Tela Inicial
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Barra de status
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
