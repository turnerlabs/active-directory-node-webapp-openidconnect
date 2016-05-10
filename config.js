exports.creds = {
  realm: 'turner.onmicrosoft.com', // Replace with your tenant name xxxx where xxxx is xxxx.onmicrosoft.com / xxxx.sharepoint.com
  identityMetadata: 'https://login.microsoftonline.com/common/.well-known/openid-configuration', // For using Microsoft you should never need to change this.
  skipUserProfile: true, // for AzureAD should be set to true.
  responseType: 'id_token code', // for login only flows use id_token. For accessing resources use `id_token code`
  responseMode: 'query', // For login only flows we should have token passed back to us in a POST
  //scope: ['email', 'profile'] // additional scopes you may wish to pass
  returnURL: process.env.RETURN_URL, //needs to be set in azure ad portal; ex: http://localhost:9000/auth/openid/return
  clientID: process.env.CLIENT_ID, //get from azure ad portal
  clientSecret: process.env.CLIENT_SECRET, //if you are doing code or id_token code; get from azure ad portal
};
