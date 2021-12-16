/* eslint-disable require-yield */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
//import fade from 'ember-animated/transitions/fade';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';

export default class ClothesComponent extends Component {
  @tracked
  value = false;

  @action
  toggle() {
    this.value = !this.value;
  }

  //Declaring custom fade animation using es-generators
  //transition = fade;

  *transition({ insertedSprites, removedSprites }) {
    for (let sprite of insertedSprites) {
      fadeIn(sprite);
    }
    for (let sprite of removedSprites) {
      fadeOut(sprite);
    }
  }
}
