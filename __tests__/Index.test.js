import Index from '../app/js/openmrs-owa-platformui';

describe('Index component', () => {
  it('renders without breaking', () => {
    expect(JSON.stringify(
      Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
    )).toMatchSnapshot();
  });
});
