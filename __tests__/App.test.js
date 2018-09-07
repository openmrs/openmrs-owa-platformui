import React from 'react';
import { shallow } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../app/js/config/axiosInstance';
import App from '../app/js/components/App';

describe('App component', () => {
  let wrapper;
  const loginRoute = jest.fn();

  const history = {
    push: loginRoute,
  };

  const mock = new MockAdapter(axiosInstance);

  beforeEach(() => {
    wrapper = shallow(<App history={history} />);
  });

  const createSpy = toSpy => (
    jest.spyOn(wrapper.instance(), toSpy)
  );

  it('renders without breaking', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call checkAuthentication when the component mounts', () => {
    mock.onGet('/session').reply(200, {
      authenticated: true,
    });
    const spy = jest.spyOn(wrapper.instance(), 'checkAuthentication');
    wrapper.instance().forceUpdate();
    wrapper.instance().componentDidMount();
    expect(spy).toBeCalled();
  });

  describe('handleResponse', () => {
    it('should redirect to "/login" if a user is not authenticated', () => {
      const response = {
        data: {
          authenticated: false,
        },
      };
      wrapper.instance().handleResponse(response);
      expect(loginRoute).toBeCalled();
    });
  });

  describe('handleResponse', () => {
    it('should call handleError method when the API call returns an error', () => {
      const spy = createSpy('toastError');
      const error = {
        response: { data: { error: { message: 'Resource not found' } } },
      };
      wrapper.instance().handleError(error);
      expect(spy).toBeCalledWith('Resource not found');
    });

    it('should show custom message if a newtork error occurs', () => {
      const spy = createSpy('toastError');
      const error = {
        request: jest.fn(),
      };
      wrapper.instance().handleError(error);
      expect(spy).toHaveBeenCalledWith(
        'Oops, something went wrong. Contact the system adminstrator',
      );
    });
  });
});
