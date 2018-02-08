import React from 'react';
import { shallow } from 'enzyme';

import Logo from './index';

describe('Logo', () => {
    const component = shallow(<Logo />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
