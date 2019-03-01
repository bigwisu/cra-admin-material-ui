import React from 'react';
import renderer from 'react-test-renderer';
import { mainListItems, adminListItems } from './ListItems';

describe('MainListItems snapshots', () => {
  test('MainListItems snapshot test', () => {
    const component = renderer.create(<mainListItems />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('adminListItems snapshots', () => {
  test('adminListItems snapshot test', () => {
    const component = renderer.create(<adminListItems />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
