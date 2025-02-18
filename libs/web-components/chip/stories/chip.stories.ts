const README = require('../README.md');
import '@finastra/chip';
import type { Chip } from '@finastra/chip';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './sb-generated/fds-chip.json';

export default {
  title: 'DATA DISPLAY/Chip',
  component: 'fds-chip',
  argTypes: {
    ...argTypes,
    trailingIconAction: {
      description: "Callback called after clicking on the trailingIcon, Example: `<fds-chip id='example' label='World' trailingIcon='cancel'></fds-chip>` `<script> example.trailingIconAction = () => { console.log('this a trailing icon action') } </script>`"
    }
  },
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=0%3A1746'
    },
    cssprops
  }
} as Meta;

const Template: Story<Chip> = ({ label, icon, selected, disabled, secondary,dense, large,trailingIcon  }) => {
  return html`<fds-chip  .label=${label} icon=${icon} trailingIcon=${trailingIcon} ?selected=${selected} ?disabled=${disabled} ?secondary=${secondary} ?dense=${dense} ?large=${large}></fsd-chip>`;
};

export const Default: Story<Chip> = Template.bind({});
Default.args = {
  label: 'Standard'
};

export const Icon: Story<Chip> = Template.bind({});
Icon.args = {
  label: 'Standard',
  icon: "event",
};

export const Dense: Story<Chip> = Template.bind({});
Dense.args = {
  label: 'Dense',
  dense: true,
  icon: "event"
};

export const Large: Story<Chip> = Template.bind({});
Large.args = {
  label: 'Large',
  large: true
};


export const Selected: Story<Chip> = Template.bind({});
Selected.args = {
  label: 'Selected',
  selected: true,
  icon: "event"
};

export const Secondary: Story<Chip> = Template.bind({});
Secondary.args = {
  label: 'Selected',
  selected: true,
  secondary: true,
  icon: "event",
  trailingIcon: "cancel"
};

export const Icons: Story<Chip> = Template.bind({});
Icons.args = {
  label: 'Selected',
  selected: true,
  secondary: true,
  large:true,
  icon: "check",
  trailingIcon: "cancel"
};
