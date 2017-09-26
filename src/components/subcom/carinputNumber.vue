<template>
    <div id="subtmpl">
        <div class="div inleft" @click="substrict">-</div>
        <div class="div incenter" v-text="count"></div>
        <div class="div inright" @click="add">+</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 1
            };
        },
        methods: {
            substrict() {
                this.count--;
                if (this.count < 1) {
                    this.count = 1;
                }
                this.sendmessage();
            },
            add() {
                this.count++;
                this.sendmessage();
            },
            sendmessage() {
                this.$emit('dataobj', this.count);
            }
        }
    };
</script>

<style scoped>
    #subtmpl .div {
        display: inline-block;
        width: 35px;
        height: 25px;
        line-height: 25px;
        border: 1px solid #000;
        text-align: center;
    }
</style>

