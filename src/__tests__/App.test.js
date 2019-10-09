import React from 'react'
import {shallow} from 'enzyme'
import App from '../App'

describe('Testando componente principal', () => {
    it('Renderizar conteúdo', () => {
        const wrapper = shallow(
            <App />
        )
        expect(wrapper).toMatchSnapshot()
    })
})