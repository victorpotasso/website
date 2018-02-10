import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CardsContentText from './index';

storiesOf('CardsContentText', module)
  .add('default', () => (
    <CardsContentText />
  ));
