import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Organization } from './organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  public organization: Observable<any>;
  private organizationData = new BehaviorSubject(null);

  public organizations: Observable<any>;
  private organizationsData = new BehaviorSubject(null);

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private plt: Platform,
    private router: Router,
    public toastController: ToastController
  ) {
    this.loadStoredOrganization();
  }

  loadStoredOrganization() {
    let platformObs = from(this.plt.ready());
    this.organization = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.get("ORGANIZATION_ID"));
      }),
      map(organization_id => {
        if (organization_id) {
          this.organizationData.next(organization_id);
          return true;
        } else {
          return null;
        }
      })
    );
  }

  loadOrganization(organization) {
    this.organizationData.next(organization.id);
    let storageObs = from(this.storage.set("ORGANIZATION_ID", organization.id));
    return storageObs;
  }

  fetch() {
    return this.http.get(`${environment.api_url}/organizations/`).pipe(
      tap(async (res: Array<Organization>) => {
        if (res) {
          this.organizationsData.next(res);
        }
        return of(null);
      })
    );
  }

  current() {
    return this.organizationData.getValue();
  }

  all() {
    return this.organizationsData.getValue();
  }
}
