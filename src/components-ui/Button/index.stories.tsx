/** @format */

import { UIButton } from '.';

const story = {
  title: 'UIButton',
  component: UIButton,
};

export const Disabled = () => <UIButton label="Disabilitato" disabled />;

export const NotDisabled = () => <UIButton label="Abilitato" />;

export default story;
