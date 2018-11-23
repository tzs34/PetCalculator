import renderer from 'react-test-renderer'
import App from './App'

test('The <APP /> component is corevtly rendered', () => {
  const component = renderer.create(<App />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
