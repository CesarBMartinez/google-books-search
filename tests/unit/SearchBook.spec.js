import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import SearchBook from '@/components/SearchBook.vue';

describe('SearchBook test', () => {
  it('check input text', () => {
    const wrapper = shallowMount(SearchBook);
    expect(wrapper.vm.searchInput).to.be('');
  });
});
