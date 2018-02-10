import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CardsContentTitle from './index';

storiesOf('CardsContentTitle', module)
  .add('default', () => (
    <CardsContentTitle />
  ));
