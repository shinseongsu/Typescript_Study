<template>
    <div>
        <h1>{{ title }} {{ num }}</h1>
    </div>
</template>

<script>
export default {
    props: [
        'num'
    ],
    data: () => {
        return {
            title: ''
        };
    },
    methods: {
        addNum() {
            this.num++;
        }
    },
    computed: {
        titleAndNum() {
            return this.title + this.num;
        }
    },
    beforeCreate : function() {
        console.warn("2 ==========================");
        console.warn("2 " + this.titleAndNum + " beforeCreate");
    },
    created: function() {
        console.warn("2 " + this.titleAndNum + " created");
        this.title = "Vue 라이프 사이클";
    },
    beforeMount: function() {
        console.warn("2 " + this.titleAndNum + " beforeMount");
    },
    mounted: function() {
        console.warn("2 " + this.titleAndNum + " mounted");
    },
    beforeUpdate: function() {
        console.warn("2 " + this.titleAndNum + " beforeUpdate");
    },
    updated: function() {
        console.warn("2 " + this.titleAndNum + " updated");
    },
    beforeDestroy: function() {
        console.warn("2 " + this.titleAndNum + " beforeDestroy");
    },
    destroyed : function() {
        console.warn("2 " + this.titleAndNum + " destoryed");
        console.warn("2 ============================");
    }
};
</script>