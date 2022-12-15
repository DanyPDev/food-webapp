import React from 'react';
import { shallow } from 'enzyme';
import RecipeSearch from '../components/RecipeSearch/RecipeSearch';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('RecipeSeach_Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RecipeSearch />)
  })

  it('renders the expected text', () => {
    const wrapper = shallow(<RecipeSearch />);
    expect(wrapper.find('button').text()).toEqual('Search');
  });


  it('renders the expected text when hover', () => {
    const wrapper = shallow(<RecipeSearch />);
    wrapper.find('button').simulate('mouseEnter');
    expect(wrapper.find('button').text()).toEqual('Yummy!');
  });
});