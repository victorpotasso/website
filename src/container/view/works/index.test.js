import React from 'react';
import { shallow } from 'enzyme';

import ViewWorksContainer from './index';

describe('ViewWorksContainer', () => {
    const component = shallow(<ViewWorksContainer />);

    test('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
});
