import React from 'react';
import { shallow } from 'enzyme';

import ViewContactContainer from './index';

describe('ViewContactContainer', () => {
    const component = shallow(<ViewContactContainer />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
