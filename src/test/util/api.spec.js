import axios from 'axios';

describe('axios', () => {
  let create;
  beforeEach(() => {
    create = jest.spyOn(axios, 'create');
  });
  afterEach(() => {
    create.mockRestore();
  });
  it('should dispatch expected event', () => {
    require('util/api');
    expect(create).toHaveBeenCalledWith({
      baseURL: 'https://www.reddit.com/',
    });
  });
});
