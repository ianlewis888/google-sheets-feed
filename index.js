var google = require('googleapis');
var sheets = google.sheets('v4');
var googleAuth = require('google-auth-library');
var key = require('./.credentials/netmining-product-feed-9ffd8eaf7dbd.json');
var scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

var jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  scopes, // an array of auth scopes
  null
);

jwtClient.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  }

  sheets.spreadsheets.values.get({
    auth: jwtClient,
    spreadsheetId: '1hB9Tu8lhHu6w0USFehNjukGUBjG6OsCrM4JqGD9XPrQ',
    range: 'A2:C',
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    console.log(response);
  });

});
