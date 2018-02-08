import React from 'react';
import { shallow } from 'enzyme';

import GridTile from './index';

describe('GridTile', () => {
    const component = shallow(<GridTile />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
