import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
};

Enzyme.configure({ adapter: new Adapter() });
