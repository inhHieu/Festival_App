import React from 'react';
import { Text } from 'react-native';
import { formatDistanceToNow } from 'date-fns';

function TimeAgo({ date }) {
  const timeAgo = formatDistanceToNow(date, { addSuffix: true });
  return <Text>{timeAgo}</Text>;
}

export default TimeAgo;