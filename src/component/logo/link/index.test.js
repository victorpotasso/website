import React from 'react';
import { shallow } from 'enzyme';

import LogoLink from './index';

describe('LogoLink', () => {
    const component = shallow(<LogoLink />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
