import {createContext} from 'react';
import ReactImage from '../src/images/react.svg'
import AngularImage from '../src/images/angular.svg'
import VueImage from '../src/images/vue.svg'

export const CardContext = createContext({
    data:[{name:'ANGULAR JS',image:AngularImage,bgClass:'angularBg'},{name:'REACT JS',image:ReactImage, bgClass:'reactBg'},{name:'VUE JS',image:VueImage, bgClass:'vueBg'}]
})