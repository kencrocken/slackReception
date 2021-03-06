/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import DeliveryController from '../app/components/delivery/delivery.controller';
import SlackWebhookService from '../app/components/slackWebhook/slackWebhook.service';
// import GithubContributorService from '../app/components/githubContributor/githubContributor.service';
// import WebDevTecService from '../app/components/webDevTec/webDevTec.service';
import NavbarDirective from '../app/components/navbar/navbar.directive';
import MalarkeyDirective from '../app/components/malarkey/malarkey.directive';

angular.module('reqApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  // .service('githubContributor', GithubContributorService)
  .service('slackWebhook', SlackWebhookService)
  // .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('DeliveryController', DeliveryController)
  .directive('acmeNavbar', () => new NavbarDirective())
  .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey));
