import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { ThemeProvider } from 'styled-components'
import { withConsole } from '@storybook/addon-console'

import theme from '../src/theme'

import FontFace from '../src/fonts'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <FontFace />
    {storyFn()}
  </ThemeProvider>
))

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
