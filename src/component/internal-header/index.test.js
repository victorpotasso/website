import React from 'react';
import { shallow } from 'enzyme';

import InternalHeader from './index';

describe('InternalHeader', () => {
    const component = shallow(<InternalHeader />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
