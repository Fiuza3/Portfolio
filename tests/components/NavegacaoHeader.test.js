import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import NavegacaoHeader from '@/components/NavegacaoHeader.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/sobre', name: 'sobre', component: { template: '<div>Sobre</div>' } }
  ]
})

describe('NavegacaoHeader', () => {
  it('renderiza todos os itens do menu', () => {
    const wrapper = mount(NavegacaoHeader, {
      global: {
        plugins: [router]
      }
    })
    
    expect(wrapper.text()).toContain('Início')
    expect(wrapper.text()).toContain('Sobre')
    expect(wrapper.text()).toContain('Projetos')
    expect(wrapper.text()).toContain('Contato')
  })

  it('alterna menu mobile ao clicar no botão', async () => {
    const wrapper = mount(NavegacaoHeader, {
      global: { plugins: [router] }
    })
    
    const button = wrapper.find('button[aria-label="Abrir menu de navegação"]')
    expect(wrapper.find('#mobile-menu').exists()).toBe(false)
    
    await button.trigger('click')
    expect(wrapper.find('#mobile-menu').exists()).toBe(true)
  })

  it('tem acessibilidade adequada', () => {
    const wrapper = mount(NavegacaoHeader, {
      global: { plugins: [router] }
    })
    
    expect(wrapper.find('nav[role="navigation"]').exists()).toBe(true)
    expect(wrapper.find('button[aria-expanded]').exists()).toBe(true)
  })
})