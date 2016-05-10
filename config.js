  // Don't commit this file to your public repos. This config is for first-run
  //
 exports.creds = {
  realm: '<your realm>', // Replace with your tenant name xxxx where xxxx is xxxx.onmicrosoft.com / xxxx.sharepoint.com
 	returnURL: 'http://localhost:3000/auth/openid/return',
 	identityMetadata: 'https://login.microsoftonline.com/common/.well-known/openid-configuration', // For using Microsoft you should never need to change this.
 	clientID: 'c9655d1d-f356-46a7-afe1-431c0d6eeb37',
 	clientSecret: '4+47R51b9PJA15G6G5C1ZP7oayV0IMKNZ5lrYN6pVIc=', // if you are doing code or id_token code
 	skipUserProfile: true, // for AzureAD should be set to true.
 	responseType: 'id_token code', // for login only flows use id_token. For accessing resources use `id_token code`
 	responseMode: 'query', // For login only flows we should have token passed back to us in a POST
 	//scope: ['email', 'profile'] // additional scopes you may wish to pass
 };
