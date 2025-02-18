const README = require('../README.md');
import '@finastra/icon-button';
import type { IconButton } from '@finastra/icon-button';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './sb-generated/fds-icon-button.json';

export default {
  title: 'ACTIONS/Icon Button',
  component: 'fds-icon-button',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    cssprops
  }
} as Meta;

const Template: Story<IconButton> = ({ icon = 'code', dense, disabled, primary, secondary }) => {
  return html`<fds-icon-button  .icon=${icon} ?dense=${dense} ?disabled=${disabled} ?primary=${primary} ?secondary=${secondary}></fds-icon-button>`;
};

export const Default: Story<IconButton> = Template.bind({});
Default.args = {
  disabled: false,
  dense: false,
  primary: false,
  secondary: false
}

export const Primary: Story<IconButton> = Default.bind({});
Primary.args = {
  primary: true
}

export const Secondary: Story<IconButton> = Default.bind({});
Secondary.args = {
  secondary: true
}

export const Disabled: Story<IconButton> = Default.bind({});
Disabled.args = {
  disabled: true
}

export const Dense: Story<IconButton> = Default.bind({});
Dense.args = {
  dense: true
}