import React from 'react';
import { shallow } from 'enzyme';

import SocialList from './index';

describe('SocialList', () => {
    const component = shallow(<SocialList />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
