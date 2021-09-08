import { gql } from "@apollo/client";

export const GET_INFO = gql`
  {
    company {
      name
      summary
      links {
        elon_twitter
        flickr
        twitter
        website
      }
      employees
      ceo
    }
  }
`;
export const GET_ROCKETS = gql`
  {
    rockets {
      active
      boosters
      company
      country
      id
      name
      type
      wikipedia
    }
  }
`;
