Package.describe({
  summary: "Basic cookies support for client"
});

Package.on_use(function (api, where) {
  if(api.export) {
    api.use('deps', 'client');
    api.export('Cookie', 'client');
  }
  api.add_files('cookie.js', 'client');
});
