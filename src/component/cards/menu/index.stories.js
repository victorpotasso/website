import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CardsMenu from './index';

storiesOf('CardsMenu', module)
  .add('default', () => (
    <CardsMenu />
  ));
