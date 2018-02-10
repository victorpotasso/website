import React from 'react';
import { shallow } from 'enzyme';

import GridTileTitle from './index';

describe('GridTileTitle', () => {
    const component = shallow(<GridTileTitle />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
