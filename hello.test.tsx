import React from 'react';
import Hello from './hello';

test('Hello component not be null', () => {
  expect(<Hello/>).not.toBeNull()
})
