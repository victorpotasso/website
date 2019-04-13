import React from 'react';
import { shallow } from 'enzyme';

import ViewNotFoundContainer from './index';

describe('ViewNotFoundContainer', () => {
    const component = shallow(<ViewNotFoundContainer />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
