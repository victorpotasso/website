import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GridTileTitle from './index';

storiesOf('GridTileTitle', module)
  .add('default', () => (
    <GridTileTitle />
  ));
