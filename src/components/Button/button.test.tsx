// @ts-expect-error: React is declared but its value is never read.
import React from 'react'
import { render } from '@testing-library/react'
import Button from './button.tsx'

test('our first react test case', () => {
  const wrapper = render(<Button>Nice</Button>)
  const element = wrapper.queryByText('Nice')
  expect(element).toBeTruthy()
})
