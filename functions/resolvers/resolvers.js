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
      addContact: (id,
        first_name,
        last_name,
        profile_pic,
        url,
        favorite) =>
        admin
        .database()
        .ref("contacts")
        .push({
          id: id,
          first_name: first_name,
          last_name: last_name,
          profile_pic: profile_pic,
          url: url,
          favorite: favorite
        }).key        
    }
  };

  module.exports = resolvers;