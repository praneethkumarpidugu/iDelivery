'use strict';

angular.module('iDeliveryApp.auth', ['iDeliveryApp.constants', 'iDeliveryApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
