/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { css } from '@emotion/core';

import { base as Notification } from '../Notification/Notification.story';

import { NotificationBanner } from './NotificationBanner';

export default {
  title: 'Components/Notification/NotificationBanner',
  component: NotificationBanner,
};

export const base = () => (
  <div
    css={css`
      min-height: 8rem;
    `}
  >
    <div
      css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      `}
    >
      <NotificationBanner>
        <Notification />
      </NotificationBanner>
    </div>
  </div>
);