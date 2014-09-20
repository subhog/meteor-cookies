Package.describe({
  summary: "Basic cookies support for client",
  version: "0.4.0",
  git: "https://github.com/subhog/meteor-cookies.git"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.2.2');

  api.use('tracker', 'client');
  api.addFiles('cookie.js', 'client');
  api.export('Cookie', 'client');
  
});
