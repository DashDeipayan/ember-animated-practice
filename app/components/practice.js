import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import fade from 'ember-animated/transitions/fade';

export default class ClothesComponent extends Component {
  @tracked
  value = false;

  transition = fade;

  @action
  toggle() {
    this.value = !this.value;
  }
}
