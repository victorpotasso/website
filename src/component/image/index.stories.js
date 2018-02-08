import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Image from './index';

storiesOf('Image', module)
  .add('default', () => (
    <Image />
  ));
