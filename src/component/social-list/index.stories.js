import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SocialList from './index';

storiesOf('SocialList', module)
  .add('default', () => (
    <SocialList />
  ));
