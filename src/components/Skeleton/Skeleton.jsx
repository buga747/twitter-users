import React from 'react';
import { Item, Wrapper } from './Skeleton.styled';

const Skeleton = ({ count = 3 }) => {
  const items = [];

  for (let i = 0; i < count; i++) {
    items.push(<Item key={i} />);
  }

  return <Wrapper>{items}</Wrapper>;
};

export default Skeleton;
