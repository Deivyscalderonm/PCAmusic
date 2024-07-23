import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IntroGuard implements CanActivate {
  constructor(private storage: Storage, private router:Router) {}

  async canActivate() {
    const intr = await this.storage.get('isIntroShowed');
    if (intr) {
      return true;
    } else {
      console.log("ingrese deiv");
      this.router.navigateByUrl('/intro');
      return false;
    }
  }
}


