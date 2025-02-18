const README = require('../README.md');
import '@finastra/tab';
import '@finastra/tab-bar';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { argTypes, cssprops } from './sb-generated/fds-tab-bar.json';

export default {
  title: 'NAVIGATION/Tabs/Tab Bar',
  component: 'fds-tab-bar',
  argTypes,
  parameters: {
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=251%3A5493'
    },
    cssprops
  }
} as Meta;


const Template: Story = ({ label, icon, segmented, stacked, classic, activeIndex, seperator}) => {
  return html`<fds-tab-bar activeIndex=${activeIndex} ?seperator=${seperator}>
  <fds-tab label=${label} icon=${icon} ?segmented=${segmented} ?classic=${classic} ?stacked=${stacked}></fds-tab>
  <fds-tab label="inactive" icon=${icon} ?segmented=${segmented} ?classic=${classic} ?stacked=${stacked} ?seperator=${seperator}></fds-tab>
  <fds-tab label="inactive" icon=${icon} ?segmented=${segmented} ?classic=${classic} ?stacked=${stacked} ?seperator=${seperator}></fds-tab>
</fds-tab-bar>`;
};

export const Default: Story = Template.bind({});
Default.args = {
  label: 'Active',
  icon: "location_on",
  activeIndex: 0
};

export const Segmented: Story = Template.bind({});
Segmented.args = {
  label: 'active',
  icon: "location_on",
  segmented: true
};

export const Classic: Story = Template.bind({});
Classic.args = {
  label: 'Active',
  icon: "location_on",
  classic: true
};

export const Stacked: Story = Template.bind({});
Stacked.args = {
  label: 'Active',
  icon: "location_on",
  stacked: true
};

export const Separated: Story = Template.bind({});
Separated.args = {
  label: 'Active',
  icon: "location_on",
  seperator: true
};
