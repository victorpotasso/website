import React from 'react';
import { shallow } from 'enzyme';

import CardsContentText from './index';

describe('CardsContentText', () => {
    const component = shallow(<CardsContentText />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
