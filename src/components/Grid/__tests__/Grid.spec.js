import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from 'radium'
import Grid from '../Grid'
import Row from '../Row'
import Column from '../Column'

it('renders Grid correctly', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <div>
          <Grid />
        </div>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Grid with styles correctly', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <div>
          <Grid style={{ width: '100%', color: '#ccc' }} />
        </div>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Grid with Row correctly', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <div>
          <Grid>
            <Row maxColumns={10} />
          </Grid>
        </div>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Grid with Row with Columns correctly', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <div>
          <Grid>
            <Row maxColumns={10}>
              <Column sizes={{ sm: 2, lg: 4, xl: 5 }} />
              <Column sizes={{ sm: 2, lg: 4, xl: 5 }} />
              <Column sizes={{ sm: 2, lg: 4, xl: 5 }} />
            </Row>
          </Grid>
        </div>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
