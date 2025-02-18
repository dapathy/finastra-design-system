const README = require('../README.md');
import '@finastra/button';
import { TextButton } from '@finastra/button';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypes, cssprops } from './sb-generated/fds-text-button.json';

export default {
  title: 'ACTIONS/Button/Text',
  component: 'fds-text-button',
  argTypes,
  args: {},
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=563%3A5956'
    },
    cssprops
  },
  decorators: []
} as Meta;

const Template: Story = ({ icon, label, dense, disabled, secondary = false, fullwidth = false, trailingIcon = false }) => {
  return html`<fds-text-button
    .label=${label}
    .icon=${ifDefined(icon)}
    ?secondary=${secondary}
    ?dense=${dense}
    ?disabled=${disabled}
    ?fullwidth=${fullwidth}
    ?trailingIcon=${trailingIcon}
  ></fds-text-button>`;
};

const FullWidthTemplate: Story = ({ icon, label, dense, disabled, secondary = false, fullwidth = false, trailingIcon = false }) => {
  return html`
  <style>
    .demo-container {
      width: 300px;
    }
  </style>
  <div class="demo-container">
    <fds-text-button
      .label=${label}
      .icon=${ifDefined(icon)}
      ?secondary=${secondary}
      ?dense=${dense}
      ?disabled=${disabled}
      ?fullwidth=${fullwidth}
      ?trailingIcon=${trailingIcon}
    ></fds-text-button>
  </div>`;
};

export const Default: Story<TextButton> = Template.bind({});
Default.args = {
  label: 'Text',
  icon: 'done'
};

export const Secondary: Story<TextButton> = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  icon: 'bolt',
  secondary: true
};

export const Dense: Story<TextButton> = Template.bind({});
Dense.args = {
  label: 'Dense',
  icon: 'chat',
  dense: true
};

export const Disabled: Story<TextButton> = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  icon: 'edit',
  disabled: true
};

export const FullWidth: Story<TextButton> = FullWidthTemplate.bind({});
FullWidth.args = {
  label: 'Full width',
  icon: 'account_balance',
  fullwidth: true
};
