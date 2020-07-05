<template>
    <div>
        {{ name }} <br />
        <b> {{ userName }} </b>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({
    props: {
        name: String,
    },
})

export default class PropsSample extends vue {
    get userName() {
        return this.$props.name;
    }
}
</script>