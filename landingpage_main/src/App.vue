<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Main from './layouts/Main.vue'

export default {
    name: "App",
    components: {},
    data() {
        return {
            testData: null
        }
    },
    created() {
        this.checkTestHistory()
    },
    watch: {
        $route (to) {
            if (to.path == '/bai-thi/' && this.$store.state.doing) {
                this.$nextTick(()=> {
                    this.$store.commit("SET_QUESTIONS", this.testData);
                })
            }
            if (to.path == '/' && this.$store.state.doing) {
                this.checkTestHistory()
            }
        }
    },
    methods: {
        checkTestHistory () {
            this.$store.dispatch('Tracking_init')
            const testId = localStorage.getItem('_test_id')
            const trackId = localStorage.getItem('_cdtds_track')
            if (testId && trackId) {
                this.$http.post('/test-check', {
                    trackid: trackId,
                    test_id: testId
                }).then((res) => {
                    if (res.data.code === 1) {
                        this.$bvModal
                        .msgBoxConfirm(
                            "Lưu ý: Mỗi email chỉ có 1 lượt làm bài. Nếu chọn TÔI KHÔNG MUỐN TIẾP TỤC, bạn sẽ không thể quay trở lại.",
                            {
                                title: "Bạn có một bài thi đang làm. Bạn có muốn tiếp tục không?",
                                size: "lg",
                                modalClass: "moodal_continue_test",
                                buttonSize: "sm",
                                okVariant: "primary",
                                okTitle: "Tôi muốn làm tiếp",
                                cancelTitle: "Tôi không muốn tiếp tục",
                                hideHeaderClose: false,
                                centered: true,
                            }
                        )
                        .then((value) => {
                            if (value == true) {

                                this.$http.post('/fetch-test', {
                                    trackid: trackId,
                                    test_id: testId
                                }).then((res2) => {
                                    if (res2.data.code == 1) {
                                        this.testData = res2.data.data.test_data
                                        this.testData.time_remaining = res2.data.data.time_remaining
                                        // this.$store.commit("SET_TIME_REMAINING", res2.data.data.time_remaining);

                                        const cdtdsPage = localStorage.getItem("cdtdsPage");
                                        const cdtdsPart = localStorage.getItem("cdtdsPart");

                                        if (cdtdsPage) {
                                            this.$store.commit("SET_PAGE", parseInt(cdtdsPage));
                                        }

                                        if (cdtdsPart) {
                                            this.$store.commit("SET_PART", parseInt(cdtdsPart));
                                        }

                                        const userInfo = localStorage.getItem("userInfo");

                                        this.$store.commit('SET_CONTACT_INFO', JSON.parse(userInfo))
                                        this.$store.commit('SET_DOING', true)
                                        if (this.$route.path != "/bai-thi/") {
                                            this.$router.push('/bai-thi/')
                                        } else {
                                            this.$nextTick(()=> {
                                                this.$store.commit("SET_QUESTIONS", this.testData);
                                            })
                                        }

                                        this.$nextTick(()=> {

                                        })

                                    } else {
                                        this.removeLocalData()
                                    }
                                })

                            } else {
                                this.removeLocalData()
                            }
                        });
                    } else {
                        this.removeLocalData()
                    }
                })
            }
        },
        removeLocalData() {
            localStorage.removeItem("cdtdsData");
            localStorage.removeItem("_test_id");
            localStorage.removeItem("cdtdsEmail");
            localStorage.removeItem("cdtdsPage");
            localStorage.removeItem("cdtdsPart");
            localStorage.removeItem("userInfo");
            localStorage.removeItem("statusModal");
            this.$store.commit('SET_DOING', false)
            if (this.$route.path != "/") {
                this.$router.push({path: '/'})
            }
        }
    }
};
</script>

<style>
@font-face {
  font-family: iCielPanton;
  src: url("assets/fonts/iCielPanton-Light.ttf") format("truetype"),
    url("assets/fonts/iCielPanton-Light.woff") format("woff");
}

@font-face {
  font-family: iCielPanton;
  font-weight: bold;
  src: url("assets/fonts/iCielPanton-Black.ttf") format("truetype"),
    url("assets/fonts/iCielPanton-Black.woff") format("woff");
}
html {
  font-size: 62.5%;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #343434;
  font-family: iCielPanton;
  /* margin-top: 60px; */
}
.moodal_continue_test .modal-header h5 {
    font-size: 2.5rem;
}
.moodal_continue_test .modal-header {
    padding: 1.8rem 2.4rem;
    border-bottom: 1px solid #ebe9f1;
    border-top-left-radius: calc(.358rem - 1px);
    border-top-right-radius: calc(.358rem - 1px);
    background-color: #f8f8f8;
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.moodal_continue_test .modal-body,.moodal_continue_test .modal-footer {
    padding: 1.8rem 2.4rem;
    font-weight: 400;
    line-height: 1.45;
    color: #6e6b7b;
    font-size: 2rem;
}
.box_btn a , .box_btn_test a{
    transition: 0.4s;
}
.box_btn a:hover , .box_btn_test a:hover{
    box-shadow: 0 20px 5px -10px rgb(0 0 0 / 40%);
    transform: translateY(10px);
}
.moodal_continue_test .modal-header .close {
    transform: translate(8px,-2px);
    padding: .2rem 0.9rem;
    box-shadow: 0 5px 20px 0 rgb(34 41 47 / 10%);
    border-radius: .357rem;
    background: #fff;
    opacity: 1;
    transition: all .23s ease .1s;
    position: relative;
    margin: -1.8rem -3rem -1.8rem auto;
    text-shadow: 0 1px 0 #fff;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 1.3;
    color: #5e5873;
}
.moodal_continue_test .btn-sm, .moodal_continue_test .btn-group-sm > .btn {
    padding: 0.8rem 1.8rem;
    font-size: 1.875rem;
    border-radius: 0.5rem;
    margin-left: 2em;
}
@media only screen and (max-width: 1600px) {
  html {
    font-size: 40%;
  }
}
@media only screen and (max-width: 767px) {
  html {
    font-size: 100%;
  }
  .moodal_continue_test .modal-header h5 {
    font-size: 1rem;
}
.moodal_continue_test .modal-header {
    padding: 1rem;
}
.moodal_continue_test .modal-body, .moodal_continue_test .modal-footer {
    padding: 1rem;
    font-size: 1rem;
}
.moodal_continue_test .btn-sm, .moodal_continue_test .btn-group-sm > .btn {
    padding: 0.5rem 1.8rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    margin-left: 2em;
    margin: 0 auto;
    margin-bottom: 1rem;
}
.moodal_continue_test .modal-header .close {
    padding: 0.3rem 0.6rem;
    margin: -3.8rem -1rem -1.8rem auto;
    font-size: 1rem;
}
}

</style>
