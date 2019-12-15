import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '../../src/components/Home.vue';

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Actions.vue', () => {
    let actions
    let getters
    let store

    beforeEach(() => {
        actions = {
            increment: jest.fn(),
            decrement: jest.fn()
        }
        getters = {
            getCounter: jest.fn(),
        }
        store = new Vuex.Store({
            actions,
            getters
        })

    })

    it('is a Vue instance', () => {
        const wrapper = shallowMount(Home, { store, localVue })
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it('dispatches "Increment button', () => {
        const wrapper = shallowMount(Home, { store, localVue })
        wrapper.find('button.btnIncrement').trigger('click')
    })

    it('dispatches "Decrement button', () => {
        const wrapper = shallowMount(Home, { store, localVue })
        wrapper.find('button.btnDecrement').trigger('click')
    })
})