import React from 'react';
import { shallow } from 'enzyme';

import CardsContentTitle from './index';

describe('CardsContentTitle', () => {
    const component = shallow(<CardsContentTitle />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
