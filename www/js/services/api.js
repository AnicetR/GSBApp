angular.module('starter')

.service('Api', function(Restangular, Auth, APIUrl){
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl(APIUrl);

    RestangularConfigurer.addFullRequestInterceptor(function(element, operation, what, url, headers, queryParams, httpConfig) {
      if (Auth.isLogged()) {
        headers.Authorization = Auth.getToken();
      }
      return {
        headers: headers,
        params: queryParams,
        element: element,
        httpConfig: httpConfig
      };
    });

    return RestangularConfigurer.setErrorInterceptor(function (response, deferred) {
      if (response.status === 401 && Auth.isLogged()) {
        Auth.destroy();
        $state.go('login');
      }
      return true;
    });
  });
});
