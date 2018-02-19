import React from 'react';
import { shallow } from 'enzyme';

import CardsWorkDetails from './index';

describe('CardsWorkDetails', () => {
    const component = shallow(<CardsWorkDetails />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
