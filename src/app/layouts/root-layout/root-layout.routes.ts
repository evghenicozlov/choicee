import { Routes } from '@angular/router';
import { MainPage } from '@features/main/pages/main-page/main-page';
import { PrivacyPolicyPage } from '@features/privacy-policy/pages/privacy-policy-page/privacy-policy-page';
import { SupportPage } from '@features/support/pages/support-page/support-page';
import { TermsOfUsePage } from '@features/terms-of-use/pages/terms-of-use-page/terms-of-use-page';

export const ROOT_LAYOUT_ROUTES: Routes = [
  { path: '', component: MainPage },
  { path: 'privacy-policy', component: PrivacyPolicyPage },
  { path: 'terms-of-use', component: TermsOfUsePage },
  { path: 'support', component: SupportPage },
];
