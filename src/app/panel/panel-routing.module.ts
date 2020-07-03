import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelPage } from './panel.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/workspace',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PanelPage,
    children: [
      {
        path: 'organization',
        loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationPageModule)
      },
      {
        path: 'workspace',
        loadChildren: () => import('./workspace/workspace.module').then(m => m.WorkspacePageModule)
      },
      {
        path: 'channels',
        loadChildren: () => import('./channels/channels.module').then(m => m.ChannelsPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/app/workspace',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelPageRoutingModule { }
