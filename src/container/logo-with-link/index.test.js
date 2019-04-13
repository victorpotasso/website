import React from 'react';
import { shallow } from 'enzyme';

import LogoWithLinkContainer from './index';

describe('LogoWithLinkContainer', () => {
    const component = shallow(<LogoWithLinkContainer />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
