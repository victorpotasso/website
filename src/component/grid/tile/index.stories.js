import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GridTile from './index';

storiesOf('GridTile', module)
  .add('default', () => (
    <GridTile />
  ));
