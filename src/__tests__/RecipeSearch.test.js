import React from 'react';
import { shallow, mount } from 'enzyme';
import RecipeSearch from '../components/RecipeSearch/RecipeSearch';
import RecipeSearchCards from '../components/RecipeSearch/RecipeSearchCards';
import sinon from 'sinon';

describe('RecipeSearch_Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RecipeSearch />)
  })

  it('renders the expected text', () => {
    expect(wrapper.find('button').text()).toEqual('Search');
  });


  it('renders the expected text when hover', () => {
    wrapper.find('button').simulate('mouseEnter');
    expect(wrapper.find('button').text()).toEqual('Let\'s eat!');
  });
});


describe('RecipeSearch_Recipes', () => {
  let wrapper;
  const mockedRecipeObject = {
    recipe: {label:1,image:1,label:1,ingredientLines: ["yo"], calories: 1, url:"yo"}
  };
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockedRecipeObject),
    })
  );

  beforeEach(() => {
    fetch.mockClear();
    wrapper = mount(<RecipeSearch />)
  })

  it('calling api to load recipes', () => {
    expect(fetch).toHaveBeenCalledTimes(1);
    // eslint-disable-next-line testing-library/no-debugging-utils
    console.log(wrapper.debug())
  });


});