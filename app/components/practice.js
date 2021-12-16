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

  *transition({ insertedSprites, removedSprites, duration }) {
    for (let sprite of removedSprites) {
      yield fadeOut(sprite, { duration: duration / 2 });
    }
    for (let sprite of insertedSprites) {
      fadeIn(sprite, { duration: duration / 2 });
    }
  }
}
