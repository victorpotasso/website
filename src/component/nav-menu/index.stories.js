import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NavMenu from './index';

storiesOf('NavMenu', module)
  .add('default', () => (
    <NavMenu />
  ));
