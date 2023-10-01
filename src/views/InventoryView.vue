<script setup lang="ts">
    import ItemApp from "@/components/inventory/ItemApp.vue";
    import InnerModal from '@/components/inventory/InnerModal.vue'
    import { useItemsStore } from '@/stores/itemsStore.ts'
    import { type Item} from '@/types/item'

    import { ref } from 'vue'

    const itemsStore = useItemsStore()

    const cells = ref<Array<Item|null>>([])
    const cellsElements = ref<Array<any>>([])
    const selectedItem = ref<Item|null>(null)
    function renderCells(){
        for(let i = 0; i < 25; i++){
            cells.value[i] = null
        }
        itemsStore.items.forEach((item:Item) => {
            
            cells.value[item.position] = item
        });
    }
    renderCells()


    function changePositionById(id:number|null, position:number) {
        if(id !== null){
            itemsStore.changePosition(id, position)
            renderCells()
        }
    }

    function selectItem(item:Item){
        selectedItem.value = item    
        console.log(selectedItem.value);
        
    }

    function closeModal(){
        console.log('closeModal');
        
        selectedItem.value = null
    }

    function deleteItem(){
        itemsStore.deleteItemById(selectedItem.value.id)
        closeModal()
        renderCells()
    }

    
    const idCapturedItem = ref<number | null>(null)

    function grabItem(id:number, position:number){
        idCapturedItem.value = id
        const startPosition = position
        const elementToMove = cellsElements.value[startPosition].children[0]
        function moveItem(e:any){
            elementToMove.style.position = 'fixed'
            elementToMove.style.pointerEvents = 'none'
            elementToMove.style.transform = 'scale(1.3)'
            elementToMove.style.left = (e.clientX - 30)+'px'
            elementToMove.style.top = (e.clientY- 30)+'px'
            elementToMove.style.zIndex = '10'
        }

        window.addEventListener('mousemove', moveItem)
        window.addEventListener('mouseup', () => {
            idCapturedItem.value = null
            window.removeEventListener('mousemove', moveItem)
            elementToMove.style.position = 'static'
            elementToMove.style.left = 'auto'
            elementToMove.style.top = 'auto'
            elementToMove.style.pointerEvents = 'all'
            elementToMove.style.zIndex = '1'
            elementToMove.style.transform = 'none'
        }, {once: true})
    }

    function dropItem(position:number){
        if(itemsStore.items.find(el => el.position == position)){
            return
        }
        changePositionById(idCapturedItem.value, position)
    }

</script>
<template>
    
    <div class="inventory" :class="{'inventory--grabbing':idCapturedItem !== null} ">
        <div class="inventory__wrap">
            <div class="inventory__left-card">
                <img src="@/assets/mockup/img_blur.png" alt="">
                <img class="inventory__left-card_skeleton" src="@/assets/skeleton/1.png" alt="">
            </div>

            <div class="inventory__grid">
                <li v-for="(cell, idx) in cells" ref="cellsElements" @mouseup="dropItem(idx)" :key="idx" class="inventory__grid_cell">
                    <span v-if="cell" >
                        <item-app @click="selectItem(cell)" @mousedown.prevent="grabItem(cell.id, idx)" :capture="cell.id == idCapturedItem" :cell="cell"/>
                    </span>
                </li>
                <InnerModal :item="selectedItem" @deleteItem="deleteItem" @close="closeModal"/>
            </div>

            <div class="inventory__bottom-panel">
                <img src="@/assets/skeleton/2.png" alt="">
                <img class="inventory__bottom-panel_cross" src="@/assets/icons/cross.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .inventory{
        background: var(--darkGray);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        &--grabbing{
            cursor: grabbing;
            .cell{
                cursor: grabbing;
            }
        }
        &__wrap{
            width: 785px;
            height: 600px;
            display: grid;
            grid-template-columns: 236px 525px;
            grid-template-rows: 500px 72px;
            gap: 22px;
        }
        &__left-card{
            @include card; 
            padding: 18px 14px 14px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &_skeleton{
                width: 190px;
                margin: 10px auto
            }
        }
        &__grid{
            @include card;
            display: grid;
            background: var(--Primary-Border);
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(5, 1fr);
            gap: 1px;
            border: 1px solid var(--Primary-Border);
            overflow: hidden;
            height: 100%;
            position: relative;
            &_cell{
                background: var(--darkGray);
                
                &:hover{
                    background: var(--darkGrayHover);
                }
                & > span{
                    transition: transform .1s;
                }
            }
        }
        &__bottom-panel{
            grid-column-start: 1;
            grid-column-end: 3;
            @include card;
            display: flex;
            padding: 18px;
            align-items: center;
            justify-content: flex-start;
            position: relative;
            &_cross{
                position: absolute;
                top: 10px;
                right: 10px;

            }
        }
        
    }
</style>
