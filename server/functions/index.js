const functions = require("firebase-functions");
const admin = require('firebase-admin');
const express = require('express');
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');
const serviceAccount = require('./reminder-app-9f295-firebase-adminsdk-wss5z-3e79f0aea9.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://reminder-app-9f295-default-rtdb.firebaseio.com"
})

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({app,path: "/", cors: true})


exports.graphql = functions.https.onRequest(app);



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
