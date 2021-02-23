import history, { setPath } from 'util/history';

describe('setPath', () => {
  let push;
  beforeEach(() => {
    push = jest.spyOn(history, 'push');
  });
  afterEach(() => {
    push.mockRestore();
  });
  it('should dispatch expected event', () => {
    setPath('/plan/12345');
    expect(push).toHaveBeenCalledWith({ search: '', pathname: '/plan/12345' });
  });
});
