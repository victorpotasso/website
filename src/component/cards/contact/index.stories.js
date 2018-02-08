import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CardsContact from './index';

storiesOf('CardsContact', module)
  .add('default', () => (
    <CardsContact />
  ));
