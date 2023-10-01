<script setup lang="ts">
const props = defineProps(['item'])
const emit = defineEmits(['deleteItem', 'close'])
</script>
<template>
    <div class="inner-modal" :class="{'inner-modal--is-open':props.item}">
        <img class="inner-modal__image" :src="`./images/items/item_${props.item?.color}.png`" alt="">
        <span class="inner-modal__separator"></span>
        <img src="@/assets/skeleton/1.png" alt="">
        <span class="inner-modal__separator"></span>
        <button @click="emit('deleteItem')" class="inner-modal__button">Удалить предмет</button>
        <img @click="emit('close')" class="inner-modal__cross" src="@/assets/icons/cross.svg" alt="">
    </div>
</template>
<style lang="scss">
.inner-modal{
    height: 100%;
    width: 250px;
    border-left: 1px solid var(--Primary-Border);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--darkGray);
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: .2s;
    &--is-open{
        transform: none;
    }
    &__image{
        width: 130px;
        padding-bottom: 20px;
    }
    &__separator{
        width: 100%;
        border-bottom: 1px solid var(--Primary-Border);
        margin: 20px 0;
    }
    &__button{
        @include button;
    }
    &__cross{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
}
</style>