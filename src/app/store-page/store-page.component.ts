import {Component, OnInit} from '@angular/core';
import {animate, keyframes, transition, trigger} from '@angular/animations';
import * as kf from './keyframes';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => jello', animate(1000, keyframes(kf.jello))),
      transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      transition('* => rotateOutUpRight', animate(1000, keyframes(kf.rotateOutUpRight))),
      transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
    ])
  ]
})
export class StorePageComponent implements OnInit {
  product: products[];

  constructor() {
  }

  ngOnInit() {
  }

  likeButton(pro: products) {
    pro.liked = true;
  }

  disLikeButton(pro: products) {
    pro.liked = false;
  }

  startAnimation(pro: products, state) {

    if (!pro.state) {
      pro.state = state;
    }
  }

  resetAnimationState(pro: products) {
    pro.state = '';
  }

  products = [
    {
      title: 'Bottle',
      img: 'https://i.ibb.co/mF6Cr4L/Paperchase-Llama-Water-Bottle-11.jpg',
      description: 'Transparent llama water bottle.',
      liked: false,
      state: ''
    },
    {
      title: 'Notebook',
      img: 'https://i.ibb.co/xqgbbmn/MIN-XT2-NBK-001-E-A-PD.jpg',
      description: 'Minimalist llama notebook.',
      liked: false,
      state: ''
    },
    {
      title: 'Lunch Boxes',
      img: 'https://i.ibb.co/8KwvBpm/Llama-Products.jpg',
      description: 'Fun style llama lunch boxes.',
      liked: false,
      state: ''
    },
    {
      title: 'Soft Toy',
      img: 'https://i.ibb.co/XFb7syG/il-794x-N-1709540889-o28f.jpg',
      description: 'Llama soft toy.',
      liked: false,
      state: ''
    }
  ]

}

export class products {
  title: string;
  img: string;
  description: string;
  liked: boolean;
  state: string;
}
