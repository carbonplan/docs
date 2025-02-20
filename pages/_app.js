import React, { useState } from 'react'
import Script from 'next/script'
import { ThemeProvider } from 'theme-ui'
import theme from '@carbonplan/theme'
import '@carbonplan/components/globals.css'
import '@carbonplan/components/fonts.css'
import { MDXProvider } from '@mdx-js/react'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'
import { useMDXComponents } from '@mdx-js/react'
import { LiveCode, Pre } from '@carbonplan/prism'
import * as carbonPlanComponents from '@carbonplan/components'
import * as carbonPlanIcons from '@carbonplan/icons'
import * as carbonPlanEmoji from '@carbonplan/emoji'
import { Box } from 'theme-ui'

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'purple',
  'pink',
  'grey',
]

const transform = (src) => {
  if (!src.startsWith('()')) {
    return `<>${src}</>`
  } else {
    return `${src}`
  }
}

const scope = {
  ...carbonPlanComponents,
  ...carbonPlanIcons,
  ...carbonPlanEmoji,
  Box,
  useState,
  colors,
}

const components = {
  code: ({ ...props }) => (
    <LiveCode
      theme={'monochrome'}
      transform={transform}
      scope={scope}
      {...props}
    />
  ),
  pre: Pre,
}

const ThemedMDXProvider = ({ children }) => {
  const componentsWithStyles = useThemedStylesWithMdx(
    useMDXComponents(components)
  )
  return <MDXProvider components={componentsWithStyles}>{children}</MDXProvider>
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ThemedMDXProvider>
        {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && (
          <Script
            data-domain='carbonplan.org'
            data-api='https://carbonplan.org/proxy/api/event'
            src='https://carbonplan.org/js/script.file-downloads.outbound-links.js'
          />
        )}
        <Component {...pageProps} />
      </ThemedMDXProvider>
    </ThemeProvider>
  )
}
