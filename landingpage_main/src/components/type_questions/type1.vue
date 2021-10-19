<template>
    <div>
        <div class="box_answer">
            <div class="item_answer " v-for="(value, key) in question.option_data" :key="key"
                 @click="picked(key)" :class="{active : value.choose}"
                >
                <div class="cycle_answer">
                </div>
                <!-- <div class="character_answer">
                                            A.
                                        </div> -->
                <div class="content_answer">
                    {{value.content}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    props: {
        content: Object
    },
    data() {
        return {
            question: [],
            questionSelect: []
        }
    },
    created() {
        this.question = JSON.parse(JSON.stringify(this.content))
        if (this.question.option_data) {
            for (let index = 0; index < this.question.option_data.length; index++) {
                // find in answer
                const find = this.content.answers.findIndex(ans => { return ans === this.question.option_data[index].id})
                this.$set(this.question.option_data[index], 'choose', find !== -1 ? true : false)
            }
        }
    },
    watch: {
    },
    computed: {
        // choose () {
        //     return `${this.input1}_${this.input2}_${this.input3}_${this.input4}_${this.input5}`;
        // },
    },
    methods: {
        picked(key){
            // this.question.map(item => {item.choose = false})

            let answer = []

            if (this.question.number_answers == 1) {
                if (this.question.option_data[key].choose) {
                    this.question.option_data[key].choose = !this.question.option_data[key].choose
                } else {
                    this.question.option_data.map(item => {item.choose = false})
                    this.question.option_data[key].choose = true
                }

            } else {
                this.question.option_data[key].choose = !this.question.option_data[key].choose
            }

            for (let index = 0; index < this.question.option_data.length; index++) {
                if (this.question.option_data[index].choose) {
                    answer.push(this.question.option_data[index].id)
                }
            }
            this.$store.dispatch('setQuestionAnwswer', {
                id: this.question.id,
                value: answer
            })
            // this.content.answers.push(this.question.option_data[key])
        },
        changleCharacter(character){
            let listCharacter = 'ABCDEFGHJKLM'
            return listCharacter.substr(character, 1)
        }
    },
}
</script>
<style scoped>

</style>