const { gql } = require("apollo-server-express");

const typeDefs = gql`
 
  type Reminder {
      name: String
      description: String
      date: String
      time: String
  }

  input ReminderInput {
      name: String!
      description: String!
      date: String!
      time: String!
  }

  
  type Query {
      reminders: [Reminder]
  }
  type Mutation {
      addReminder(input: ReminderInput!): Reminder!
  }
`
module.exports = typeDefs;