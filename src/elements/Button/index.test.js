import React from 'react';
import { render } from '@testing-library/react';
import Button from 'elements/Button';

test('Should not allowed click button if isDisable is present', () => {
  const { container } = render(<Button isDisable>Loadin</Button>);

  expect(container.querySelector('.disabled')).toBeInTheDocument();
});

test('Should show button small if isSmall is present', () => {
  const { container } = render(<Button isSmall></Button>);

  expect(container.querySelector('.btn-sm')).toBeInTheDocument();
});

test('Should render <a> tag', () => {
  const { container } = render(<Button type="link"></Button>);

  expect(container.querySelector('a')).toBeInTheDocument();
});
