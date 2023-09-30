<script setup lang="ts">
import ItemApp from "@/components/inventory/ItemApp.vue";
import { ref } from 'vue'


</script>
<template>
    <div class="inventory">
        <div class="inventory__wrap">
            <div class="inventory__left-card">
                <img src="@/assets/mockup/img_blur.png" alt="">
                <img class="inventory__left-card_skeleton" src="@/assets/skeleton/1.png" alt="">
            </div>

            <div class="inventory__grid">
                <li v-for="cell in 25" class="inventory__grid_cell">
                    <item-app/>
                </li>
            </div>

            <div class="inventory__bottom-panel">
                <img src="@/assets/skeleton/2.png" alt="">
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
            &_cell{
                background: var(--darkGray);
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
        }
        
    }
</style>
