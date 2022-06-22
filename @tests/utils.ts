import { ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

export const sleep = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
}

export const updateWrapper = async (wrapper: ReactWrapper, time: number = 0) => {
  await act(async () => {
    await sleep(time)
    wrapper.update()
  });
}

export const mockNativeEvent = (fn: Function = () => { }) => ({
  nativeEvent: { stopImmediatePropagation: fn },
});

export const nativeEvent = mockNativeEvent();
