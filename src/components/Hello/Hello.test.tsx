import { shallow } from 'enzyme'
import * as React from 'react'
import { Hello } from './Hello'


describe('<_Main />', () => {
  const mainElem = shallow(<Hello compiler="babel/typescript" framework="react"/>)

  it('should be true', () => {
    expect(mainElem.type()).toBe('h1')
  })
})