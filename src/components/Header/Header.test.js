import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Header from './Header';
import store from '../../redux/store';

const classes = {
  title: 'cssClass'
};

test('Header snapshot test', () => {
  const component = mount(<Provider store={store}><Header classes={classes} /></Provider>);
  expect(component).toMatchSnapshot();
});
