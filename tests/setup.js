import sinon from 'sinon';
// import 'sinon-as-promised';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });