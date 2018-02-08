import React from 'react';
import { shallow } from 'enzyme';

import Grid from './index';

describe('Grid', () => {
    const component = shallow(<Grid />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
