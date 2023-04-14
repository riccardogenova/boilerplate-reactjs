/** @format */

import { UIButton, Props } from '.';

const story = {
  title: 'UIButton',
  component: UIButton,
  argTypes: {},
};

export const Button = (props: Props) => <UIButton {...props} />;

Button.argTypes = {
  label: 'Abilitato',
  disabled: false,
};

export default story;
