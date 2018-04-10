import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HomeComponent from './Home';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('H1 rendered.', () => {
    const component = shallow(<HomeComponent />);
    expect(component.find('h1').text()).toEqual('Welcome to React + Redux + Router');
  });
});
