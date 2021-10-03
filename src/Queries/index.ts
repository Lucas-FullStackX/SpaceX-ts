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
export const GET_ROCKET_INFO = gql`
  query GET_ROCKET_INFO($rocketId: ID!) {
    rocket(id: $rocketId) {
      active
      description
      wikipedia
      payload_weights {
        lb
      }
      height {
        feet
      }
      diameter {
        feet
        meters
      }
      engines {
        type
        propellant_1
        propellant_2
        thrust_to_weight
      }
      stages
      cost_per_launch
    }
  }
`;
