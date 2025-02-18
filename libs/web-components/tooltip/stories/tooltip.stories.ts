import '@finastra/button';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import 'tippy.js/dist/tippy.css';
import '../../../../themes/tippy.js/dist/theme.css';

const README = require('../README.md');

export default {
  title: 'POPOVER/Tooltip',
  parameters: {
    docs: {
      description: { component: README }
    }
  },
  args: {
  },
  decorators: [
    (story) => html`${story()}
      <script src="https://unpkg.com/@popperjs/core@2"></script>
      <script src="https://unpkg.com/tippy.js@6"></script>
      <script>
        tippy('[data-tippy-content]', {
          touch: false,
          theme: 'finastra'
          });
      </script>
      <style>

      </style>`
  ]
} as Meta;

const Template: Story = ({ }) => {
  return html`<fds-button
  data-tippy-content="This is a tooltip 🤌"
  label="Hover me"
></fds-button>`;
};

export const Default: Story = Template.bind({});
