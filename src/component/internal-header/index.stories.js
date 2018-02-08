import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InternalHeader from './index';

storiesOf('InternalHeader', module)
  .add('default', () => (
    <InternalHeader />
  ));
