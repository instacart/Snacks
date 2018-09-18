import React         from 'react'
import renderer      from 'react-test-renderer'
import { StyleRoot } from 'radium'
import { mount }     from 'enzyme'
import { spy }       from 'sinon'
import Table         from '../Table'

it('renders Table with minimal definition correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Table
          data={[
            { name: 'Apple', type: 'fruit' },
            { name: 'Carrot', type: 'vegetable' },
            { name: 'Lemon', type: 'fruit' },
            { name: 'Avocado', type: 'vegetable' }
          ]}
          definition={[
            { attribute: 'name' },
            { attribute: 'type' }
          ]}
        />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Table with definition headers correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Table
          data={[
            { name: 'Apple', type: 'fruit', qty: 3 },
            { name: 'Carrot', type: 'vegetable', qty: 99 },
            { name: 'Lemon', type: 'fruit', qty: 12 },
            { name: 'Avocado', type: 'vegetable', qty: 0 }
          ]}
          definition={[
            { header: 'Type', attribute: 'type' },
            { header: 'Name', attribute: 'name' },
            { header: 'Quantity', attribute: 'qty' }
          ]}
        />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Table with cellRender methods correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Table
          data={[
            { name: 'Apple', type: 'fruit', qty: 3 },
            { name: 'Carrot', type: 'vegetable', qty: 99 },
            { name: 'Lemon', type: 'fruit', qty: 12 },
            { name: 'Avocado', type: 'vegetable', qty: 0 }
          ]}
          definition={[
            { header: 'Name', attribute: 'name', cellRender: name => name.toLowerCase() },
            { header: 'Type', attribute: 'type', cellRender: type => type.charAt(0) },
            { header: 'Quantity', attribute: 'qty', cellRender: (qty, index, row) => `[${index}]: ${qty} ${row.name}s left` }
          ]}
        />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Table without header if specified', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Table
          data={[
            { name: 'Apple', type: 'fruit' },
            { name: 'Carrot', type: 'vegetable' },
            { name: 'Lemon', type: 'fruit' },
            { name: 'Avocado', type: 'vegetable' }
          ]}
          definition={[
            { attribute: 'name' },
            { attribute: 'type' }
          ]}
          withHeader={false}
        />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
