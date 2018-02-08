import React from 'react';
import { shallow } from 'enzyme';

import CardsFooterMessage from './index';

describe('CardsFooterMessage', () => {
    const component = shallow(<CardsFooterMessage />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
