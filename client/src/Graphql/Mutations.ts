import { gql } from '@apollo/client';

export const ADD_REMINDER = gql `
mutation addReminder($newReminder: ReminderInput!) {
  addReminder(input: $newReminder) {
    name
    description
    time
    date
  }
}
`