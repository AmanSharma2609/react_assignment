import {createContext} from 'react';
import ReactImage from '../src/images/react.svg'
import AngularImage from '../src/images/angular.svg'
import VueImage from '../src/images/vue.svg'

export const CardContext = createContext({
    data:[{name:'ANGULAR JS',image:AngularImage,bgClass:'angularBg',videoLink:'https://www.youtube.com/embed/-zW1zHqsdyc'},
    {name:'REACT JS',image:ReactImage, bgClass:'reactBg', videoLink:'https://www.youtube.com/embed/A71aqufiNtQ'},
    {name:'VUE JS',image:VueImage, bgClass:'vueBg',videoLink:'https://www.youtube.com/embed/z6hQqgvGI4Y'}]
})