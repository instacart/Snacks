import React from 'react'
import renderer from 'react-test-renderer'
import NavigationPills from '../NavigationPills'
import { StyleRoot } from 'radium'
import { mount } from 'enzyme'
import { spy } from 'sinon'

jest.mock('react-dom', () => ({
  findDOMNode: () => ({
    getBoundingClientRect: () => { width: 400 }
  }),
}));

const testPills = [
  { path: '/store/doms-pizza-store',  text: 'doms' },
  { text: 'doms1' },
  { path: '/store/doms-pizza-store-two',  text: 'doms2' },
  { path: '/store/doms-pizza-store-three',  text: 'doms3' },
]

it('renders NavigationPills correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <NavigationPills
            pills={ testPills }
            onPillClick={(e, pill) => { console.log(pill) }}
            label={'Filter by'}
            activePill={'dom2'}
          />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

// FIXME: not a currently working test
// it('it handles onPillClick correctly', () => {
//   const onButtonClick = spy()
//   const Pills = mount(
//     <StyleRoot>
//       <div>
//         <NavigationPills
//             pills={ testPills }
//             onPillClick={onButtonClick}
//             label={'Filter by'}
//             activePill={'dom2'}
//           />
//       </div>
//     </StyleRoot>
//   )
//
//   const pill = Pills.find('li a').first()
//   pill.simulate('click')
//   expect(onButtonClick.calledOnce).toEqual(true)
// })
