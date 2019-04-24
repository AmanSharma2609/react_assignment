import {createContext} from 'react';
import ReactImage from '../src/images/reactt.png'
import AngularImage from '../src/images/angular.png'
import VueImage from '../src/images/vue.png'

export const CardContext = createContext({
    data:[{name:'ANGULAR JS',image:AngularImage,bgClass:'angularBg'},{name:'REACT JS',image:ReactImage, bgClass:'reactBg'},{name:'VUE JS',image:VueImage, bgClass:'vueBg'}]
})