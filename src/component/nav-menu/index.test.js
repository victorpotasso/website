import React from 'react';
import { shallow } from 'enzyme';

import NavMenu from './index';

describe('NavMenu', () => {
    const component = shallow(<NavMenu />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
