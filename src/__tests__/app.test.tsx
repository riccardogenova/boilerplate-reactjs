/** @format */

import { render, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { UIButton } from '../components-ui/Button';

describe('Button login', () => {
  it('should display the button text and be clickable', () => {
    const buttonText = 'Login';
    const onClick = jest.fn();
    const { getByText } = render(<UIButton onClick={onClick} label={buttonText} />);
    const buttonElement = getByText(buttonText);

    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalled();
  });
});
