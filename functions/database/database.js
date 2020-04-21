const admin = require("firebase-admin");

var serviceAccount = require(".././resources/contacts-book-76fe6-firebase-adminsdk-hvvw1-1b86f11107.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://contacts-book-76fe6.firebaseio.com"
});

module.exports = admin;