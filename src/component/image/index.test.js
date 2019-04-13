import React from 'react';
import { shallow } from 'enzyme';

import Image from './index';

describe('Image', () => {
    const component = shallow(<Image />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
