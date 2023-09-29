<template >
    <div @click="leave" ref="wrap" class="circleWrap" >
        
        <div class="circle" :class="{'circle--big': isLeave, 'circle--green': isGreen, 'circle--yellow': isLeave}"></div>
        
    </div>
</template>
<script>
const getRandom = (coff = 200, toUp = 0) => {
    return Math.round( Math.random()*coff) - coff /2 - toUp
}
export default {
    data(){
        return{
            isLeave: false,

            
            isGreen: false,
            coff: 350,
            toUp: 0,
        }
    },
    created() {
        this.isGreen = getRandom() > 0
        if(this.isGreen){
            this.coff = 200
        }
    },
    mounted() {
        let coordX = getRandom(this.coff*4)
        let coordY = getRandom(this.coff*4)
        setInterval(()=>{
            this.$refs.wrap.style.transform = `translateX(${coordX}px) translateY(${coordY}px)`
            coordX += getRandom(this.coff)
            coordY += getRandom(this.coff, this.toUp)
        }, 2200)

    },
    methods: {
        leave(){
            this.isLeave = true
            this.toUp = this.coff 
        },
    },
}
</script>
<style lang="scss">
    .circleWrap{
        width: 70px;
        height: 70px;
        transition: 2s ease-in-out;
        position: absolute;
        animation: appear 7s;
        
    }
    .circle{
        width: 40px;
        height: 40px;
        border-radius: 100px;
        background: #e234bd7a;
        transition: .4s;
        animation: spin 4s reverse forwards infinite linear;
        &--green{
            background: #2cbc687a;
            animation: spin-reverse 4s reverse forwards infinite linear;
        }
        &--yellow{
            background: #e3fc0152;
            transform: scale(1.2);
        }
        &--big{
            transform: scale(1.3);
        }
    }
    @keyframes appear{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    @keyframes spin{
        from{
            transform: rotate(0deg) translateX(40px);
        }
        to{
            transform: rotate(360deg) translateX(40px);
        }
    }

    @keyframes spin-reverse{
        from{
            transform: rotate(0deg) translateX(40px);
        }
        to{
            transform: rotate(-360deg) translateX(40px);
        }
    }

    
</style>