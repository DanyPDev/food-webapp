import React from 'react';
import { mount } from 'enzyme';
import EasterEgg from '../components/EasterEgg/EasterEgg';

describe('EasterEgg_Video', () => {
    let wrapper;
  
    beforeEach(() => {
        wrapper = mount(<EasterEgg />)
    })
  
    it('unmute when mounted', () => {
      expect(wrapper.find('ReactPlayer').props().muted).toEqual(true);
    });
  
  
   
  });