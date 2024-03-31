import { afterEach, beforeEach, describe, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Countdown from './Countdown.vue';

describe('Countdown', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should display correct remaining time', async () => {
        const wrapper = mount(Countdown);
        expect(wrapper.find('time').element).toMatchInlineSnapshot(`
          <time
            aria-label="Remaining time"
            class="tw-px-2 tw-rounded tw-text-3xl tw-w-min ping"
            data-v-03072b6d=""
            datetime="PT00M10"
          >
            00:10
          </time>
        `);

        await vi.advanceTimersByTimeAsync(1000);
        expect(wrapper.find('time').text()).toEqual('00:09');

        await vi.advanceTimersByTimeAsync(1000);
        expect(wrapper.find('time').text()).toEqual('00:08');

        await vi.advanceTimersByTimeAsync(20_000);
        expect(wrapper.find('time').text()).toEqual('00:00');
    });
});
