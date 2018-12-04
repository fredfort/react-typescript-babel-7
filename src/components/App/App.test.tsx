import { shallow } from 'enzyme'
import * as React from 'react'
import Hello from './App.component'


describe('<App />', () => {
  const appElem = shallow(<Hello compiler="babel/typescript" framework="react"/>)

  it('should be true', () => {
    expect(appElem.type()).toBe('div')
  })
})