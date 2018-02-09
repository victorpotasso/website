import React from 'react';
import { shallow } from 'enzyme';

import ViewHomeContainer from './index';

describe('ViewHomeContainer', () => {
    const component = shallow(<ViewHomeContainer />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
