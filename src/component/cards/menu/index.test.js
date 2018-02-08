import React from 'react';
import { shallow } from 'enzyme';

import CardsMenu from './index';

describe('CardsMenu', () => {
    const component = shallow(<CardsMenu />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
