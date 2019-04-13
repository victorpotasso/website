import React from 'react';
import { shallow } from 'enzyme';

import CardsMenuContainer from './index';

describe('CardsMenuContainer', () => {
    const component = shallow(<CardsMenuContainer />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
