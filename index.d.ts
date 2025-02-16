// src/index.d.ts or another appropriate .d.ts file
declare module 'react-slick' {
    import { Component } from 'react';
    import { Settings } from 'react-slick';
  
    export default class Slider extends Component<Settings> {}
  }
  