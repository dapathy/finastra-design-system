import { customElement } from 'lit/decorators.js';
import { CardBase } from './card-base';
import { styles } from './styles.css';

@customElement('fds-card')
export class Card extends CardBase {
  static styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card': Card;
  }
}
