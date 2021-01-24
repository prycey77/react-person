
import App from './App';
import { shallow } from 'enzyme'
import PersonList from './PersonList'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
  let appWrapper
  beforeAll(() => {
    appWrapper = shallow(<App />);
  })

  it('renders a person list', () => {
    const personList = appWrapper.find(PersonList)

    expect(personList).toHaveLength(1);
  });
  it('has state', () => {
    const appState = appWrapper.state()
  
    expect(appState).not.toBeNull()
  })
  it('has a people property on state', () => {
    const appState = appWrapper.state()

    expect(appState.people).toBeDefined()
  })


});
