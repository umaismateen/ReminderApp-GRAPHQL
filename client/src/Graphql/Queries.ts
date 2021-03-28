import { gql } from '@apollo/client';

export const REMINDERS = gql`
  query {
      reminders {
          name
          description
          time
          date
      }
  }
`
