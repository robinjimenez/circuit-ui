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

import Button from '../Button';

import { Spacing, SpacingProps } from './Spacing';

export default {
  title: 'Layout/Spacing',
  component: Spacing,
};

export const Bottom = (args: SpacingProps) => (
  <div>
    <Spacing {...args}>
      <Button variant="primary">Spacing bottom</Button>
    </Spacing>
    <Button>No spacing</Button>
  </div>
);

Bottom.args = { bottom: true };

export const Top = (args: SpacingProps) => (
  <div>
    <Button>No spacing</Button>
    <Spacing {...args} top>
      <Button variant="primary">Spacing top</Button>
    </Spacing>
  </div>
);

Top.args = { top: true };
