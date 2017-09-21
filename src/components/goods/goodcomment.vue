<template>
    <div id="tmpl">
        <comment></comment>
    </div>
</template>

<script>
    import comment from '../subcom/comment.vue';

    export default {
        components: {
            comment
        },
        data() {
            return {
                listid: 0
            };
        },
        created() {
            this.listid = this.$route.params.listid;
        }
    };
</script>

<style scoped>

</style>

