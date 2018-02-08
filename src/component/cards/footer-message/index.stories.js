import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CardsFooterMessage from './index';

storiesOf('CardsFooterMessage', module)
  .add('default', () => (
    <CardsFooterMessage />
  ));
