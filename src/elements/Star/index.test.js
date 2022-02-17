import React from 'react';
import { render } from '@testing-library/react';
import Star from './index';

// test should render the star component  with the correct props
test('should render the star component with the correct props', () => {
  const { container } = render(
    <Star value={2.1} width={35} height={35} spacing={4} />
  );
  const star = container.querySelector('.star');
  expect(star).toHaveStyle('width: 35px');
  expect(star).toHaveStyle('height: 35px');
  expect(star).toHaveStyle('margin-right: 4px');
  expect(star).toHaveStyle('left: 0px');
});
