 <template>
    <div 
        class="item" 
        v-bind:class="{ completed: item.completed }" >
        <h2>{{ item.title }}</h2>
        <button v-if="!item.completed" @click="removeItem">Odhacz</button>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        removeItem() {
            this. $emit('removeClicked', this.item.id)
        }
    }
}
</script>