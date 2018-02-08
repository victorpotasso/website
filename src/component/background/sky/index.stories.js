import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BackgroundSky from './index';

storiesOf('BackgroundSky', module)
  .add('default', () => (
    <BackgroundSky />
  ));
