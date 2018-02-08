import React from 'react';
import { shallow } from 'enzyme';

import CardsContact from './index';

describe('CardsContact', () => {
    const component = shallow(<CardsContact />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
