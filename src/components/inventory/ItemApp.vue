<script setup lang="ts">
    import {ref, watch} from 'vue'
    const props = defineProps(['cell', 'capture'])
    const imagePath = ref(('@/assets/mockup/item_blue.png'))
</script>

<template lang="">
    <div class="cell"  v-if="props.cell" :class="{'cell--hideCorner':props.capture}">
        <img class="cell__image" :src="`/images/items/item_${props.cell.color}.png`" alt="">
        <div class="cell__corner-block">
            <!-- {{props}} -->
            <p class="cell__corner-block_number">{{props.cell.amount}}</p>
        </div>
    </div>
</template>

<style lang="scss" >
    .cell{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;
        cursor: grab;
        user-select: contain;
        &--hideCorner{
            .cell__corner-block{
                display: none;
            }
        }
        &__image{
            width: 54px;
        }
        &__corner-block{
            position: absolute;
            bottom: -0;
            right: 0;
            width: 16px;
            height: 16px;
            border-radius: 6px 0px 0px 0px;
            border: 1px solid var(--Primary-Border);
            border-bottom: none;
            border-right: none;
            display: flex;
            align-items: center;
            justify-content: center;
            &_number{
                color: white;
                opacity: 0.4;
                font-size: 10px;
                
            }

        }
    }
</style>