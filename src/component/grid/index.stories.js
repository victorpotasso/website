import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Grid from './index';

storiesOf('Grid', module)
  .add('default', () => (
    <Grid />
  ));
