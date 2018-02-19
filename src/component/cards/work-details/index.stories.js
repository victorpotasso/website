import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CardsWorkDetails from './index';

storiesOf('CardsWorkDetails', module)
  .add('default', () => (
    <CardsWorkDetails />
  ));
