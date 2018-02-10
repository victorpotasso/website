import React from 'react';
import { shallow } from 'enzyme';

import ViewAboutContainer from './index';

describe('ViewAboutContainer', () => {
    const component = shallow(<ViewAboutContainer />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
