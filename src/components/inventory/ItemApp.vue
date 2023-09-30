<template lang="">
    <div class="cell">
        <img class="cell__image" src="@/assets/mockup/item_green.png" alt="">
        <div class="cell__corner-block">
            <p class="cell__corner-block_number">4</p>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss">
    .cell{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;
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