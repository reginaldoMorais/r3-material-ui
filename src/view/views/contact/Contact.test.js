import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ContactComponent from './Contact';

Enzyme.configure({ adapter: new Adapter() });

describe('<Contact />', () => {
  it('H1 rendered.', () => {
    const component = shallow(<ContactComponent />);
    expect(component.find('h1').text()).toEqual('Contact');
  });
});
