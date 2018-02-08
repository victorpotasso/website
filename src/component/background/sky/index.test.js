import React from 'react';
import { shallow } from 'enzyme';

import BackgroundSky from './index';

describe('BackgroundSky', () => {
    const component = shallow(<BackgroundSky />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
