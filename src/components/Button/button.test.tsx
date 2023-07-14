import React from 'react'
import { render } from '@testing-library/react'
// import Button from './button.tsx'

test('our first react test case', () => {
  const wrapper = render(<div>Nice</div>)
  const element = wrapper.queryByText('Nice')
  expect(element).toBeTruthy()
})
