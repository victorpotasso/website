import React from 'react';
import { shallow } from 'enzyme';

import Footer from './index';

describe('Footer', () => {
    const component = shallow(<Footer />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
