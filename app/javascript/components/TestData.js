import { gql, useQuery } from '@apollo/client';
import React from 'react';
const TEST_QUERY = gql`query { testField }`;

export default function TestData() {
  const {loading, error, data} = useQuery(TEST_QUERY);
  if (loading) {
    return (
      <div>Loading...</div>
    );
  } else if (error) {
      console.log(error)
    return (
      <div>何か間違っているようです</div>
    );
  } else {
    return (
      <p>{data.testField}</p>
    );
  }
}