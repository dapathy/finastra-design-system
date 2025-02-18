const README = require('../README.md');
import '@finastra/stepper';
import type { HorizontalStepper } from '@finastra/stepper';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { EVENTS } from '../src/constants';
import { argTypes, cssprops } from './sb-generated/fds-horizontal-stepper.json';

const demoData = [
  {
    label: 'Step Success',
    description: 'Ad in dolore eu anim est excepteur ex. Ullamco irure voluptate laboris cupidatat non excepteur minim nulla dolor. '
  },
  {
    label: 'Step Active',
    description: 'Aute velit incididunt ex veniam aliqua. Ullamco ullamco reprehenderit laborum aliquip dolor. Do elit sint ullamco .'
  },
  {
    label: 'Step Disabled',
    description: 'Sunt mollit quis anim laboris amet laboris irure magna. Fugiat ullamco ea qui consequat laborum. ',
    disabled: true
  },
  { label: 'Step Inactive',
   description: 'Aute velit incididunt ex veniam aliqua. Ullamco ullamco reprehenderit laborum aliquip dolor. ' },
  {
    label: 'Step Inactive',
    description:
      'Exercitation eiusmod Lorem officia incididunt. Reprehenderit nisi consequat nostrud fugiat esse amet id voluptate elit elit et sit qui deserunt.'
  }
];

export default {
  title: 'FORMS/Stepper/Horizontal',
  component: 'fds-horizontal-stepper',
  argTypes: {
    ...argTypes,
    steps: {
      description: "An array of step (label + optional description).",
      table: {
        defaultValue: {
          summary: '[]'
        }
      },
    }
  },
  args: {
    steps: demoData,
    currentStepIndex: 1
  },
  parameters: {
    actions: {
      handles: [EVENTS.STEPCLICK]
    },
    docs: {
      description: { component: README }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/E1Mb1556RT3HbAUVu2Q0LV/Finastra-design-system?node-id=48611%3A19619'
    }
  },
  cssprops
} as Meta;

const HTemplate: Story = ({ currentStepIndex, steps = demoData, secondary = false }) => {
  return html`<fds-horizontal-stepper .steps=${steps} .currentStepIndex=${currentStepIndex} ?secondary=${secondary}></fsd-horizontal-stepper>`;
};

export const Default: Story<HorizontalStepper> = HTemplate.bind({});
