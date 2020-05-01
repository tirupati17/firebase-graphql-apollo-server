// Connect to firebase database
const admin = require("../database/database");

const resolvers = {
    Query: {
      contacts: () =>
        admin
          .database()
          .ref("contacts")
          .once("value")
          .then(snap => snap.val())
          .then(val => Object.keys(val).map(key => val[key]))
    },
    Mutation: {
      addContact: () =>
        admin
        .database()
        .ref("contacts")
        .push({
          first_name: "Tiru",
          last_name: "Balan"
        }).key        
    }
  };

  module.exports = resolvers;