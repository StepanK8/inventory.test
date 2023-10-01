import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { type Item } from '@/types/item'
const STORE_NAME = 'main'

export const useItemsStore = defineStore('main', {
  state: () => ({
      items: [
        {
          id: 1,
          position: 0,
          color: 'green',
          amount: 4,
        },
        {
          id: 2,
          position: 3,
          color: 'blue',
          amount: 5,
        },
        {
          id: 3,
          position: 6,
          color: 'yellow',
          amount: 2,
        },
      ] as Array<Item>,
  }),
  actions: {
    changePosition(id:number, position:number) {
      console.log(this.items);
      console.log('changePosition');
      this.items.forEach((el, idx) => {
        if(el.id == id){
          this.items[idx].position = position
          return
        }
      })
      console.log(this.items);
    },
    addItem(item:Item){
      this.items.push(item)
    },
    clearItems(){
      this.items = []
    }
  },
  persist: true,
})