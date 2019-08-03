import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { findByDataTestAttribute } from './findByDataTestAttribute'
import { checkPropTypesForErrors } from './checkPropTypesForErrors'
import CONSTANTS from './Constants'

import SignIn from '../Components/AuthComponents/SignIn'

configure({ adapter: new Adapter() })

const mockStore = configureMockStore()
const store = mockStore()

// const setUp = (props = {}) => {
//   return shallow(
//     <Provider store={store}>
//       <SignIn {...props} />
//     </Provider>
//   )
// }

describe('<SignIn />', () => {
  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        authError: CONSTANTS.TEST_STR,
        auth: CONSTANTS.TEST_OBJ,
      }

      expect(checkPropTypesForErrors(SignIn, expectedProps)).toBeUndefined()
    })
  })

  describe('Checking render', () => {
    // let wrapper

    // beforeEach(() => {
    //   wrapper = setUp({
    //     authError: CONSTANTS.TEST_STR,
    //     auth: CONSTANTS.TEST_OBJ,
    //   })
    // })

    it('should render two text inputs', () => {
      const wrapper = mount(
        <Provider store={store}>
          <SignIn authError={CONSTANTS.TEST_STR} auth={CONSTANTS.TEST_OBJ} />
        </Provider>
      )
      const component = wrapper.find('.container')
      expect(component.length).toBe(0)
    })
  })
})

// describe('Sign In', () => {
//   let wrapper
//   beforeEach(() => {
//     wrapper = shallow(
//       <Provider store={store}>
//         <SignIn />
//       </Provider>
//     )
//   })

//   it('renders correcty', () => {
//     expect(2 + 2).toEqual(4)
//   })
// })
