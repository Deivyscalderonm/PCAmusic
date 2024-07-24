import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IntroGuard implements CanActivate {
  constructor(private storage: Storage, private router:Router) {}

  async canActivate() {
    const isIntroLoggedIn = await this.storage.get('isIntroLoggedIn');
    if (isIntroLoggedIn) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}


