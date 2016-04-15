function bitlyIt(longUrl) {
  if(!longUrl) {
    return "Specify an URL";
  }
  var encodedUrl = encodeURIComponent(longUrl);
  var accessToken = "Your access Token"; // Generate it here: https://bitly.com/a/oauth_apps
  var response = UrlFetchApp.fetch("https://api-ssl.bitly.com/v3/shorten?access_token=" + accessToken + "&longUrl=" + encodedUrl);
  var response = JSON.parse(response);
  var shortUrl = response.data.url;
  // We should follow http://dev.bitly.com/best_practices.html to catch errors
  return shortUrl;
}
