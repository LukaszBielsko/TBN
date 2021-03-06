import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import { CURRENT_USER_QUERY } from './User';

const REMOVE_FROM_CART = gql`
  mutation REMOVE_FROM_CART($id: String!) {
    removeFromCart(id: $id)
  }
`;

const RemoveButton = styled.button`
  rgb(295,00,00)
`;

const RemoveFromCart = ({ id }) => (
  <Mutation
    mutation={REMOVE_FROM_CART}
    variables={{ id }}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {removeFromCart => (
      <button type="button" onClick={removeFromCart}>
        &times;
      </button>
    )}
  </Mutation>
);

export default RemoveFromCart;
