let users = [];
if (process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD_HASH) {
  users = [{
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD_HASH, // bcrypt hash, not plain text
    permissions: "*"
  }];
}
 
module.exports = {
  uiPort: process.env.PORT || 3000,
  userDir: "/data",
  flowFile: "flows.json",
  flowFilePretty: true,
  editorTheme: { projects: { enabled: false } },
  ...(users.length ? { adminAuth: { type: "credentials", users } } : {}),
  logging: { console: { level: "info", metrics: false, audit: false } },
  httpNodeRoot: "/",
  functionGlobalContext: {}
};
