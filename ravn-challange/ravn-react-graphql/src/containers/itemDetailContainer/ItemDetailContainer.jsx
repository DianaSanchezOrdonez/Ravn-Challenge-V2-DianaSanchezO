import React from "react";
import { gql, useQuery } from "@apollo/client";

/**Components */
import Detail from "../../components/detail/Detail";

import "./ItemDetailContainer.css";

const GET_DETAIL_PERSON = gql`
  query getDetailPerson($itemID: ID!) {
    person(id: $itemID) {
      id
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      starshipConnection {
        starships {
          name
        }
      }
    }
  }
`;

const ItemDetailContainer = ({ itemID }) => {
  const { loading, error, data } = useQuery(GET_DETAIL_PERSON, {
    variables: { itemID },
  });

  if (loading) return <p className="hide">Loading...</p>;
  if (error) return <p className="hide">Data error!</p>;

  return (
    <aside className="container-detail">
      {<Detail key={data.person.id} detail={data.person} />}
    </aside>
  );
};

export default ItemDetailContainer;
