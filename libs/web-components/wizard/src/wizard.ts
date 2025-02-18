import '@finastra/button';
import '@finastra/divider';
import '@finastra/stepper';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';
import { styles } from './styles.css';

export enum POSITION {
  right = 'right',
  left = 'left',
}

export interface Page {
  label: string;
  description?: string;
  disabled?: Boolean;
}

/**
  * @cssprop {color} [--fds-stepper-bg=#fafafa] - Stepper background color
  * @cssprop {color} [--fds-header-bg=#f3f1fc] - Header background color
  * @cssprop {color} [--fds-title-color=#694ed5] - Header title color
  * @cssprop {color} [--fds-icon-border-color=#f3f1fc] - Header icon border color
  * @cssprop {color} [--fds-icon-bg=#fafafa] - Header icon background color
  * @attr {boolean} [stepperOnDark=false] - Stepper on dark
  * @attr [currentStepIndex=0] - Index of current active step.
*/
@customElement('fds-wizard')
export class Wizard extends LitElement {
  static styles = styles;

  @queryAssignedElements({ slot: 'page' })
  _pages!: Array<HTMLElement>;

  @query('#stepper') protected stepper!: HTMLElement;


  /**
   * @type {"left"|"right"} stepperPositon - Stepper postion
   */
  @property({ reflect: true }) stepperPosition: POSITION = POSITION.left;

  @property({ type: Boolean })
  stepperOnDark = false;

  protected save = false;
  protected back = false;
  protected disabled: Boolean | null = null;
  protected arrayPages: Page[] = [];

  @property({ type: Number })
  currentStepIndex = 0;

  constructor() {
    super();
    this.addEventListener('step-click', this.onStepClickEvent)
  }

  onStepClickEvent(event) {
    if (event.type === 'step-click') {
      this.goToStepIndex(+event.detail.value);
    }
  }

  render() {
    return html`
      <div class="wizard">
        ${this.stepperPosition === 'left' ?
         html`${this.renderStepper()} <fds-divider vertical></fds-divider>` : ''}
        <div class='content'>
          <div class="pages">
            <slot name="page" @slotchange=${this.onPagesSlotChanged}></slot>
          </div>
          <div class="footer">
            <fds-divider></fds-divider>
            ${this.renderActions()}
          </div>
        </div>
        ${this.stepperPosition === 'right' ?
        html` <fds-divider vertical></fds-divider> ${this.renderStepper()}` : ''}
      </div>`;
  }

  renderStepper(): TemplateResult {
    return html`
      <div class='stepper-container ${this.stepperOnDark ? ' dark-theme' : '' }'>
        <fds-vertical-stepper secondary id="stepper" currentStepIndex=${this.currentStepIndex}></fds-vertical-stepper>
      </div>`
  }

  renderActions(): TemplateResult {
    return html`
      <div class="actions">
        <div class="left">
          <slot name="left-action"></slot>
        </div>
        <div class="content">
          <slot name="content-action"></slot>
        </div>
        <div class="right">
          <slot name="right-action"></slot>
          ${this.back ? this.renderBackSlot() : ''}
          ${this.save ? this.renderSaveSlot() : html`${this.renderNextSlot()}`}
        </div>
      </div>`;
  }

  renderSaveSlot(): TemplateResult {
    return html`<slot name="done"></slot>`;
  }

  renderBackSlot(): TemplateResult {
    return html`<slot name="previous" @click="${this._handleBackClick}"></slot>`;
  }

  renderNextSlot(): TemplateResult {
    return html`<slot name="next" @click="${this._handleNextClick}"></slot>`;
  }

  onPagesSlotChanged() {
    (this._pages[this.currentStepIndex]).setAttribute('current', 'true');
    this.checkCurrentStep(this.currentStepIndex);
    this._pages.forEach((page: HTMLElement, index: number) => {
      this.checkAttributes(page, index);
      page.setAttribute('stepsCounter', this.updateStepsCounter(this.currentStepIndex));
      this.arrayPages.push({
        'label': page.getAttribute('title') as string,
        'description': page.getAttribute('description') as string,
        'disabled': this.disabled as Boolean
      });
      this.disabled = null;
    });
    this.stepper['steps'] = this.arrayPages;
  }

  checkCurrentStep(current: number) {
    if(!this.currentPageIsLast(current) && !this.currentPageIsFirst(current) && !this.currentPageIsDisabled(current)) {
      this.back=true;
    }

    if(this.currentPageIsLast(current) && !this.currentPageIsDisabled(current)) {
      this.save=true;
      this.back=true;
    }

    if(this.currentPageIsFirst(current)) {
      this.back=false;
    }

    if((this._pages[current]).hasAttribute('current') && this._pages[current].hasAttribute('disabled')) {
      console.error("A current could not be disabled");
    }
    this.requestUpdate();
  }

  currentPageIsLast(current: number) {
    return ((current) == (this._pages.length - 1));
  }

  currentPageIsDisabled(current: number) {
    return (this._pages[current]).hasAttribute('disabled');
  }

  currentPageIsFirst(current: number) {
    return (current == 0);
  }

  checkAttributes(page: HTMLElement, index: number) {
    if (page.getAttribute('disabled') !== null) {
      this.disabled = true;
    }
    if (page.hasAttribute('current') && (this._pages[this.currentStepIndex] !== page)) {
      this.updateCurrentPage(index);
      this.stepper['currentStepIndex'] = this.currentStepIndex;
      this.checkCurrentStep(this.currentStepIndex);
    }
    this.requestUpdate();
  }

  checkNextStepDisabled(pages: Array<HTMLElement>, current: number) {
    if (!this.currentPageIsDisabled(current)) return;
    this.stepper['currentStepIndex']++;
    this.currentStepIndex++;
    current++;
    this.checkNextStepDisabled(pages, current);
  }

  checkPreviousStepDisabled(pages: Array<HTMLElement>, current: number) {
    if (!this.currentPageIsDisabled(current)) return;
    this.stepper['currentStepIndex']--;
    this.currentStepIndex--;
    current--;
    this.checkCurrentStep(current);
    this.checkPreviousStepDisabled(pages, current);
    this.requestUpdate();
  }

  goToNextStep(pages: Array<HTMLElement>) {
    this.currentStepIndex = this.stepper['currentStepIndex'];
    this.stepper['currentStepIndex']++;
    (pages[this.currentStepIndex]).removeAttribute('current');
    this.currentStepIndex++;
  }

  goToPreviousStep(pages: Array<HTMLElement>) {
    this.currentStepIndex = this.stepper['currentStepIndex'];
    this.stepper['currentStepIndex']--;
    (pages[this.currentStepIndex]).removeAttribute('current');
    this.currentStepIndex--;
  }

  goToStepIndex(index: number) {
    this.back = true;
    this.save = false;
    this.checkCurrentStep(index);
    this.updateCurrentPage(index);
    this.requestUpdate();
  }

  updateCurrentPage(index: number) {
    (this._pages[this.currentStepIndex]).removeAttribute('current');
    this.currentStepIndex = index;
    this.UpdatePage()
  }

  updateStepsCounter(current: number) {
    return (+current+1)+"/"+this._pages.length;
  }

  UpdatePage() {
    (this._pages[this.currentStepIndex]).setAttribute('current', 'true');
    (this._pages[this.currentStepIndex]).setAttribute('stepsCounter', this.updateStepsCounter(this.currentStepIndex));
  }

  _handleNextClick() {
    if (this.currentStepIndex !== (this._pages.length - 1)) {
      this.goToNextStep(this._pages);
      this.checkNextStepDisabled(this._pages, this.currentStepIndex);
      this.UpdatePage()
    }
    this.checkCurrentStep(this.currentStepIndex);
    this.requestUpdate();
  }

  _handleBackClick() {
    if (this.currentStepIndex !== 0) {
      if (this.currentStepIndex === 1) {
        this.back = false;
      }
      if (this.currentStepIndex === (this._pages.length - 1)) {
        this.save = false;
      }
      this.goToPreviousStep(this._pages);
      this.checkPreviousStepDisabled(this._pages, this.currentStepIndex);
      this.UpdatePage();
    }
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-wizard': Wizard;
  }
}
