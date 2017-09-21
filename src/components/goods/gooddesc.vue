<template>
    <div id="tmpl">
        <h3 v-text="info.name"></h3>
        <p class="line"></p>
        <p v-text="info.cpdes" class="content"></p>
        <img :src="info.img">
    </div>
</template>

<script>
    import common from '../../kits/common';

    export default {
        data() {
            return {
                info: {},
                listid: 0
            };
        },
        created() {
            this.listid = this.$route.params.listid;
            this.getgooddesc();
        },
        methods: {
            getgooddesc() {
                var url = common.apidomaindetail + '&id=' + this.listid;
                this.$http.get(url).then(function (res) {
                    this.info = res.body.showapi_res_body.details;
                });
            }
        }
    };
</script>

<style scoped>
    #tmpl {
        padding: 5px;
    }

    h3 {
        color: #0094ff;
    }

    .line {
        height: 1px;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .content {
        text-indent: 2em;
    }
</style>

