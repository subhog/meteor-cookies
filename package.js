Package.describe({
  summary: "Basic cookies support for client"
});

Package.on_use(function (api, where) {
  api.add_files('cookie.js', 'client');
});
