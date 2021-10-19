<template>
    <div>
        <div class="write_1">
            <div class="content_write">
                <textarea v-model="writingContent"  name="" id="" placeholder="Câu trả lời" ></textarea>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content : Object,
    },
    data() {
        return{
            writingContent: '',
        }
    },
    computed: {
        checkValid(){
            return this.content.checkvalid
        }
    },
    created(){
        this.question = JSON.parse(JSON.stringify(this.content))
        this.writingContent = this.question.answers

        this.$set(this.question, 'checkvalid', false)
    },
    watch: {
        checkValid(){
            this.$store.dispatch('countAnswerOfPart')
        },
        writingContent(value) {
            this.$store.dispatch('setQuestionAnwswer', {
                id: this.question.id,
                value: value,
                write : true
            })
        }
    },
}
</script>
<style scoped>

</style>