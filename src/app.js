import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import chai from 'chai'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
  }
})

const expect = chai.expect
{
  const Construcor = Vue.extend(Button)
  const vm = new Construcor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Construcor = Vue.extend(Button)
  const vm = new Construcor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Construcor = Vue.extend(Button)
  const vm = new Construcor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Construcor = Vue.extend(Button)
  const vm = new Construcor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Construcor = Vue.extend(Button)
  const vm = new Construcor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount()
  vm.$on('click', function () {
    expect(1).to.eq(1)
  })
  let button = vm.$el
  button.click()
}