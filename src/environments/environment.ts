// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const spotifyApiConfig = {
  clientId: "663cef411bf44adfb92de486f5a10bc6",
  redirectUrl: "http://localhost:8100",
  scopes: ["streaming"],
  tokenExchangeUrl: "https://uun6zd0tac.execute-api.eu-central-1.amazonaws.com/dev/exchange",
  tokenRefreshUrl: "https://uun6zd0tac.execute-api.eu-central-1.amazonaws.com/dev/refresh"
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
