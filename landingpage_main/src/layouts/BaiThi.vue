<template>
    <div id="container_test">
        <section id="step1" v-if="page == 1">
            <div class="header_test">
                THỬ THÁCH TRỰC TUYẾN CÔNG DÂN THỜI ĐẠI SỐ
            </div>
            <div class="box_test">
                <b-container class="">
                    <b-row class="sticker_header">
                        VÒNG 1
                    </b-row>
                    <b-row class="content_test">
                        <b-col lg="5" class="order_2">
                            <img class="img_st1" src="@/assets/images/img-header.png" alt="">
                        </b-col>
                        <b-col lg="7" class="content_r_st1 order_1">
                            <h1>HƯỚNG DẪN VÀO THI</h1>
                            <h2>1. Bài thi Vòng 1 gồm có 2 phần:</h2>
                            <p>
                                Phần 1: Bài thi trắc nghiệm: 20 câu hỏi.<br>
                                Phần 2: Miêu tả ngắn gọn ý tưởng sản phẩm của bạn nếu vượt qua Vòng 1.
                            </p>
                            <h2>2. Tổng thời gian tối đa: 60 phút</h2>
                            <h2>3. Lưu ý: Đừng quên ấn nút “GỬI BÀI THI” ở cuối bài làm để gửi bài cho BTC nhé!</h2>
                            <h3>CHÚC CÁC BẠN LÀM BÀI THẬT TỐT!</h3>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <div class="box_btn_test">
                <a href="" @click="fetchData();nextStep1($event)">BẮT ĐẦU</a>
            </div>
        </section>
        <section id="step2" v-if="page == 2 || page == 3">
            <div class="box_test">
                <b-container class="">
                    <b-row class="sticker_header">
                        {{ this.partTitle }}
                    </b-row>
                    <b-row class="content_test">
                        <div class="box_time">
                            <div class="img_time">
                                <img src="@/assets/images/icon-time.png" alt="">
                            </div>
                            <div class="progress">
                                <div class="progress-bar" v-if="!showtime" role="progressbar" v-bind:style="{ width: couter/36  + '%' }"
                                    aria-valuemax="100">
                                </div>
                                <div class="progress-bar" v-if="showtime" role="progressbar" style="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                            <div class="text_time">
                                Thời gian: <span v-if="!showtime">{{ secondToMinute(couter) }}</span><span v-if="showtime">0</span>
                            </div>
                        </div>
                        <div class="box_question">
                            <div v-if="page == 2" class="header_question">
                                Chọn đáp án đúng cho 20 câu hỏi sau đây:
                            </div>
                            <div v-if="page == 3" class="header_question">
                                <img src="@/assets/images/icon-light.png" alt=""> Hãy cho chúng tôi biết ý tưởng của bạn về sản phẩm dự thi mà bạn muốn làm ở Vòng 2 bằng cách trả lời các câu hỏi dưới đây nhé!
                            </div>
                            <div class="question" v-for="(question) in Questions.questions" :key="question.id">
                                <div class="title_question" v-html="question.content" :ref="'select-'+ question.id ">
                                    <!-- <span>{{question.exam_part}}.</span> {{question.content}} -->
                                </div>
                                <type1 :content="question" v-if="question.content_type == 1">
                                    <!-- <template v-slot:question-number>
                                        <h2>Question {{ getQuestionNumber(Questions.questions, index) }}</h2>
                                    </template> -->
                                </type1>
                                <type2 :content="question" v-if="question.content_type == 4 && page == 3">

                                </type2>
                            </div>
                        </div>
                        <div class="box_btn_test" v-if="page == 2">
                            <a :class="{'disable': nextPartState != -1}" @click="nextStep2($event)" href="">ĐI TIẾP TỚI PHẦN 2</a>
                        </div>
                        <div class="box_btn_test" v-if="page == 3">
                            <a :class="{'disable': nextPartState != -1}" @click="nextStep3($event)" href="">HOÀN THÀNH</a>
                        </div>
                        <div class="box_btn_back" v-if="page == 3">
                            <a @click="nextStep1($event)" href="">QUAY LẠI PHẦN 1</a>
                        </div>
                    </b-row>
                </b-container>
            </div>
        </section>
        <!-- <section id="step3" v-if="page == 3">
            <div class="box_test">
                <b-container class="">
                    <b-row class="sticker_header">
                        {{ this.partTitle }}
                    </b-row>
                    <b-row class="content_test">
                        <div class="box_time">
                            <div class="img_time">
                                <img src="@/assets/images/icon-time.png" alt="">
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar"
                                    v-bind:style="{ width: couter/36  + '%' }" aria-valuemax="100">
                                </div>
                            </div>
                            <div class="text_time">
                                Thời gian: {{ secondToMinute(couter) }}
                            </div>
                        </div>
                        <div class="box_wirte">
                            <div class="header_wirte d-flex">
                                <img src="@/assets/images/icon-light.png" alt="">
                                <p>
                                    Hãy cho chúng tôi biết ý tưởng của bạn về sản phẩm dự thi mà bạn muốn làm ở Vòng 2
                                    bằng
                                    cách trả lời các câu hỏi dưới đây nhé!
                                </p>
                            </div>
                        </div>
                        <hr>
                        <div class="" v-for="(question) in Questions.questions" :key="question.id">
                            <type2 :content="question">

                            </type2>
                        </div>
                        <div class="box_btn_test">
                            <a @click="nextStep3($event)" href="">HOÀN THÀNH</a>
                        </div>
                        <div class="box_btn_back">
                            <a @click="nextStep1($event)" href="">QUAY LẠI PHẦN 1</a>
                        </div>
                    </b-row>
                </b-container>
            </div>
        </section> -->
        <section id="step4" v-if="page == 4">
            <div class="header_test">
                TRƯỚC KHI GỬI BÀI DỰ THI, VUI LÒNG XÁC NHẬN THÔNG TIN
                <br>
                CÁ NHÂN HOẶC NHÓM THI CỦA BẠN:
            </div>
            <div class="box_test">
                <b-container class="">
                    <b-row v-if="checkteam == 'member'" class="content_test confirm_info_member">
                        <b-form @submit="onSubmit" class="">
                            <b-form-group id="input-group-1" label-for="input-1">
                                <b-form-text>Họ và tên<span>*</span></b-form-text>
                                <b-form-input id="input-1" v-model="userInfo.name" :state="nameState" name="name"
                                    ref="name" placeholder="Nhập thông tin của bạn" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-invalid-feedback :state="nameState">Bạn vui lòng nhập họ và
                                tên</b-form-invalid-feedback>
                            <b-form-group id="input-group-4" label-for="input-2">
                                <b-form-text>Email<span>*</span></b-form-text>
                                <b-form-input id="input-2" v-model="userInfo.email" name="email" ref="email"
                                    :state="emailState" placeholder="Nhập thông tin của bạn" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-invalid-feedback :state="emailState">{{errEmail1}}
                            </b-form-invalid-feedback>
                            <b-form-group id="input-group-3" label-for="input-2">
                                <b-form-text>Số điện thoại<span>*</span></b-form-text>
                                <b-form-input id="input-2" v-model="userInfo.phone" name="phone" ref="phone"
                                    :state="phoneState" placeholder="Nhập thông tin của bạn" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-invalid-feedback :state="phoneState">{{errPhone}}</b-form-invalid-feedback>
                            <b-form-group id="input-group-2" label-for="input-2">
                                <b-form-text>Tuổi<span>*</span></b-form-text>
                                <b-form-input id="input-2" v-model="userInfo.age" name="age" ref="age" :state="ageState"
                                    placeholder="Nhập thông tin của bạn" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-invalid-feedback :state="ageState">{{errAge}}
                            </b-form-invalid-feedback>
                            <b-form-group id="input-group-2" label-for="input-2">
                                <b-form-text>Tỉnh thành<span>*</span></b-form-text>
                                <b-form-input id="input-2" v-model="userInfo.adress" name="adress" ref="adress"
                                    :state="addressState" placeholder="Nhập thông tin của bạn" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-invalid-feedback :state="addressState">Bạn vui lòng nhập địa chỉ
                            </b-form-invalid-feedback>
                            <b-form-radio-group ref="sex" v-model="userInfo.sex" :state="sexState"
                                class="input-group-5 checkbox-form" label-for="input-2">
                                <div class="learn-check custom-control custom-control-inline custom-checkbox"
                                    style="padding-left: 0px">
                                    <b-form-text>Giới tính<span>*</span></b-form-text>
                                </div>
                                <div class="checkbox">
                                    <b-form-radio value="0">Nam</b-form-radio>
                                </div>
                                <div class="checkbox">
                                    <b-form-radio value="1">Nữ</b-form-radio>
                                </div>
                            </b-form-radio-group>
                            <b-form-invalid-feedback :state="sexState">Bạn vui lòng chọn giới tính
                            </b-form-invalid-feedback>
                            <div class="d-flex  button-pg1 ">
                                <!-- <b-button class="submit_form_register" @click="pushContactMember()">
                                    XÁC NHẬN
                                </b-button> -->
                            </div>
                        </b-form>
                    </b-row>
                    <b-row v-if="checkteam == 'team'" class="content_test">
                        <b-form @submit="onSubmit" class="">
                            <div class="confirm_info_team">
                                <div class="d-lg-flex justify-content-between d-none w-100">
                                    <div class="form_team_left">
                                        <p class="title_form">Thông tin trưởng nhóm</p>
                                        <b-form-group id="input-group-1" label-for="input-1">
                                            <b-form-text>Họ và tên<span>*</span></b-form-text>
                                            <b-form-input id="input-1" v-model="userInfo.name" :state="nameState"
                                                name="name" ref="name" placeholder="Nhập thông tin của bạn" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-invalid-feedback :state="nameState">Bạn vui lòng nhập
                                            họ và
                                            tên</b-form-invalid-feedback>
                                        <b-form-group id="input-group-4" label-for="input-2">
                                            <b-form-text>Email<span>*</span></b-form-text>
                                            <b-form-input id="input-2" v-model="userInfo.email" name="email" ref="email"
                                                :state="emailState" placeholder="Nhập thông tin của bạn" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-invalid-feedback :state="emailState">{{errEmail1}}
                                        </b-form-invalid-feedback>
                                        <b-form-group id="input-group-3" label-for="input-2">
                                            <b-form-text>Số điện thoại<span>*</span></b-form-text>
                                            <b-form-input id="input-2" v-model="userInfo.phone" name="phone" ref="phone"
                                                :state="phoneState" placeholder="Nhập thông tin của bạn" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-invalid-feedback :state="phoneState">{{errPhone}}</b-form-invalid-feedback>
                                        <b-form-group id="input-group-2" label-for="input-2">
                                            <b-form-text>Tuổi<span>*</span></b-form-text>
                                            <b-form-input id="input-2" v-model="userInfo.age" name="age" ref="age"
                                                :state="ageState" placeholder="Nhập thông tin của bạn" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-invalid-feedback :state="ageState">{{errAge}}
                                        </b-form-invalid-feedback>
                                        <b-form-group id="input-group-2" label-for="input-2">
                                            <b-form-text>Tỉnh thành<span>*</span></b-form-text>
                                            <b-form-input id="input-2" v-model="userInfo.adress" name="adress"
                                                ref="adress" :state="addressState" placeholder="Nhập thông tin của bạn"
                                                required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-invalid-feedback :state="addressState">Bạn vui lòng nhập địa chỉ
                                        </b-form-invalid-feedback>
                                        <b-form-radio-group ref="sex" v-model="userInfo.sex" :state="sexState"
                                            class="input-group-5 checkbox-form" label-for="input-2">
                                            <div class="learn-check custom-control custom-control-inline custom-checkbox"
                                                style="padding-left: 0px">
                                                <b-form-text>Giới tính<span>*</span></b-form-text>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-radio value="0">Nam</b-form-radio>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-radio value="1">Nữ</b-form-radio>
                                            </div>

                                        </b-form-radio-group>

                                        <b-form-invalid-feedback :state="sexState">Bạn vui lòng chọn giới tính
                                        </b-form-invalid-feedback>
                                    </div>
                                    <div class="form_team_right">
                                        <p class="title_form">Thông tin đồng đội</p>
                                        <b-form-group id="input-group-1" label-for="input-1">
                                            <b-form-text>Họ và tên<span>*</span></b-form-text>
                                            <b-form-input id="input-1" v-model="userInfo.namefriend"
                                                :state="nameStatefriend" name="namefriend" ref="hoten"
                                                placeholder="Nhập thông tin của đồng đội" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-invalid-feedback :state="nameStatefriend">Bạn vui lòng nhập
                                            họ và
                                            tên đồng đội</b-form-invalid-feedback>
                                        <b-form-group id="input-group-4" label-for="input-2">
                                            <b-form-text>Email<span>*</span></b-form-text>
                                            <b-form-input id="input-2" v-model="userInfo.emailfriend" name="emailfriend"
                                                ref="emailfriend" :state="emailStatefriend"
                                                placeholder="Nhập thông tin của đồng đội" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-invalid-feedback :state="emailStatefriend">{{errEmail}}
                                        </b-form-invalid-feedback>
                                        <b-form-group id="input-group-3" label-for="input-2">
                                            <b-form-text>Số điện thoại<span>*</span></b-form-text>
                                            <b-form-input id="input-2" v-model="userInfo.phonefriend" name="phonefriend"
                                                ref="phonefriend" :state="phoneStatefriend"
                                                placeholder="Nhập thông tin của đồng đội" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-invalid-feedback :state="phoneStatefriend">{{errPhonefriend}}</b-form-invalid-feedback>
                                        <b-form-group id="input-group-2" label-for="input-2">
                                            <b-form-text>Tuổi<span>*</span></b-form-text>
                                            <b-form-input id="input-2" v-model="userInfo.agefriend" name="agefriend"
                                                ref="agefriend" :state="ageStatefriend"
                                                placeholder="Nhập thông tin của đồng đội" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-invalid-feedback :state="ageStatefriend">{{errAgeFriend}}
                                        </b-form-invalid-feedback>
                                        <b-form-group id="input-group-2" label-for="input-2">
                                            <b-form-text>Tỉnh thành<span>*</span></b-form-text>
                                            <b-form-input id="input-2" v-model="userInfo.addressfriend"
                                                name="addressfriend" ref="addressfriend" :state="addressStatefriend"
                                                placeholder="Nhập thông tin của bạn" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-invalid-feedback :state="addressStatefriend">Bạn vui lòng nhập
                                            địa chỉ đồng đội
                                        </b-form-invalid-feedback>
                                        <b-form-radio-group ref="sexfriend" v-model="userInfo.sexfriend"
                                            :state="sexStatefriend" class="input-group-5 checkbox-form"
                                            label-for="input-2">
                                            <div class="learn-check custom-control custom-control-inline custom-checkbox"
                                                style="padding-left: 0px">
                                                <b-form-text>Giới tính<span>*</span></b-form-text>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-radio value="0">Nam</b-form-radio>
                                            </div>
                                            <div class="checkbox">
                                                <b-form-radio value="1">Nữ</b-form-radio>
                                            </div>

                                        </b-form-radio-group>

                                        <b-form-invalid-feedback :state="sexStatefriend">Bạn vui lòng chọn giới
                                            tính đồng đội
                                        </b-form-invalid-feedback>

                                    </div>
                                </div>
                                <div class="d-lg-none d-block w-100">
                                    <b-tabs content-class="mt-3">
                                        <b-tab title="Trưởng nhóm" active>
                                            <b-form-group id="input-group-1" label-for="input-1">
                                                <b-form-text>Họ và tên<span>*</span></b-form-text>
                                                <b-form-input id="input-1" v-model="userInfo.name" :state="nameState"
                                                    name="name" ref="name" placeholder="Nhập thông tin của bạn"
                                                    required>
                                                </b-form-input>
                                            </b-form-group>
                                            <b-form-invalid-feedback :state="nameState">Bạn vui lòng nhập
                                                họ và
                                                tên</b-form-invalid-feedback>
                                            <b-form-group id="input-group-4" label-for="input-2">
                                                <b-form-text>Email<span>*</span></b-form-text>
                                                <b-form-input id="input-2" v-model="userInfo.email" name="email"
                                                    ref="email" :state="emailState" placeholder="Nhập thông tin của bạn"
                                                    required>
                                                </b-form-input>
                                            </b-form-group>
                                            <b-form-invalid-feedback :state="emailState">{{errEmail1}}
                                            </b-form-invalid-feedback>
                                            <b-form-group id="input-group-3" label-for="input-2">
                                                <b-form-text>Số điện thoại<span>*</span></b-form-text>
                                                <b-form-input id="input-2" v-model="userInfo.phone" name="phone"
                                                    ref="phone" :state="phoneState" placeholder="Nhập thông tin của bạn"
                                                    required>
                                                </b-form-input>
                                            </b-form-group>
                                            <b-form-invalid-feedback :state="phoneState">{{errPhone}}</b-form-invalid-feedback>
                                            <b-form-group id="input-group-2" label-for="input-2">
                                                <b-form-text>Tuổi<span>*</span></b-form-text>
                                                <b-form-input id="input-2" v-model="userInfo.age" name="age" ref="age"
                                                    :state="ageState" placeholder="Nhập thông tin của bạn" required>
                                                </b-form-input>
                                            </b-form-group>
                                            <b-form-invalid-feedback :state="ageState">{{errAge}}
                                            </b-form-invalid-feedback>
                                            <b-form-group id="input-group-2" label-for="input-2">
                                                <b-form-text>Tỉnh thành<span>*</span></b-form-text>
                                                <b-form-input id="input-2" v-model="userInfo.adress" name="adress"
                                                    ref="adress" :state="addressState"
                                                    placeholder="Nhập thông tin của bạn" required>
                                                </b-form-input>
                                            </b-form-group>
                                            <b-form-invalid-feedback :state="addressState">Bạn vui lòng nhập địa chỉ
                                            </b-form-invalid-feedback>
                                            <b-form-radio-group ref="sex" v-model="userInfo.sex" :state="sexState"
                                                class="input-group-5 checkbox-form" label-for="input-2">
                                                <div class="learn-check custom-control custom-control-inline custom-checkbox"
                                                    style="padding-left: 0px">
                                                    <b-form-text>Giới tính<span>*</span></b-form-text>
                                                </div>
                                                <div class="checkbox">
                                                    <b-form-radio value="0">Nam</b-form-radio>
                                                </div>
                                                <div class="checkbox">
                                                    <b-form-radio value="1">Nữ</b-form-radio>
                                                </div>

                                            </b-form-radio-group>

                                            <b-form-invalid-feedback :state="sexState">Bạn vui lòng chọn giới tính
                                            </b-form-invalid-feedback>
                                        </b-tab>
                                        <b-tab title="Đồng đội">
                                            <b-form-group id="input-group-1" label-for="input-1">
                                                <b-form-text>Họ và tên<span>*</span></b-form-text>
                                                <b-form-input id="input-1" v-model="userInfo.namefriend"
                                                    :state="nameStatefriend" name="namefriend" ref="hoten"
                                                    placeholder="Nhập thông tin của đồng đội" required>
                                                </b-form-input>
                                            </b-form-group>
                                            <b-form-invalid-feedback :state="nameStatefriend">Bạn vui lòng nhập
                                                họ và
                                                tên đồng đội</b-form-invalid-feedback>
                                            <b-form-group id="input-group-4" label-for="input-2">
                                                <b-form-text>Email<span>*</span></b-form-text>
                                                <b-form-input id="input-2" v-model="userInfo.emailfriend"
                                                    name="emailfriend" ref="emailfriend" :state="emailStatefriend"
                                                    placeholder="Nhập thông tin của đồng đội" required>
                                                </b-form-input>
                                            </b-form-group>
                                            <b-form-invalid-feedback :state="emailStatefriend">{{errEmail}}
                                            </b-form-invalid-feedback>
                                            <b-form-group id="input-group-3" label-for="input-2">
                                                <b-form-text>Số điện thoại<span>*</span></b-form-text>
                                                <b-form-input id="input-2" v-model="userInfo.phonefriend"
                                                    name="phonefriend" ref="phonefriend" :state="phoneStatefriend"
                                                    placeholder="Nhập thông tin của đồng đội" required>
                                                </b-form-input>
                                            </b-form-group>
                                            <b-form-invalid-feedback :state="phoneStatefriend">{{errPhonefriend}}</b-form-invalid-feedback>
                                            <b-form-group id="input-group-2" label-for="input-2">
                                                <b-form-text>Tuổi<span>*</span></b-form-text>
                                                <b-form-input id="input-2" v-model="userInfo.agefriend" name="agefriend"
                                                    ref="agefriend" :state="ageStatefriend"
                                                    placeholder="Nhập thông tin của đồng đội" required>
                                                </b-form-input>
                                            </b-form-group>
                                            <b-form-invalid-feedback :state="ageStatefriend">{{errAgeFriend}}
                                            </b-form-invalid-feedback>
                                            <b-form-group id="input-group-2" label-for="input-2">
                                                <b-form-text>Tỉnh thành<span>*</span></b-form-text>
                                                <b-form-input id="input-2" v-model="userInfo.addressfriend"
                                                    name="addressfriend" ref="addressfriend" :state="addressStatefriend"
                                                    placeholder="Nhập thông tin của đồng đội" required>
                                                </b-form-input>
                                            </b-form-group>
                                            <b-form-invalid-feedback :state="addressStatefriend">Bạn vui lòng nhập
                                                địa chỉ đồng đội
                                            </b-form-invalid-feedback>
                                            <b-form-radio-group ref="sexfriend" v-model="userInfo.sexfriend"
                                                :state="sexStatefriend" class="input-group-5 checkbox-form"
                                                label-for="input-2">
                                                <div class="learn-check custom-control custom-control-inline custom-checkbox"
                                                    style="padding-left: 0px">
                                                    <b-form-text>Giới tính<span>*</span></b-form-text>
                                                </div>
                                                <div class="checkbox">
                                                    <b-form-radio value="0">Nam</b-form-radio>
                                                </div>
                                                <div class="checkbox">
                                                    <b-form-radio value="1">Nữ</b-form-radio>
                                                </div>

                                            </b-form-radio-group>

                                            <b-form-invalid-feedback :state="sexStatefriend">Bạn vui lòng chọn giới
                                                tính đồng đội
                                            </b-form-invalid-feedback>
                                        </b-tab>
                                    </b-tabs>
                                </div>
                            </div>
                            <div class="box_endform">
                                <div class="d-flex justify-content-center button-pg1 ">
                                    <!-- <b-button class="submit_form_register" @click="pushContactTeam()">XÁC NHẬN
                                    </b-button> -->
                                </div>
                            </div>
                        </b-form>
                    </b-row>
                </b-container>
            </div>
            <div class="box_btn_test">
                <a @click="nextStep4($event)" href="">GỬI BÀI THI</a>
            </div>
        </section>
        <section id="step5" v-if="page == 5">
            <div class="box_test">
                <b-container class="">
                    <b-row class="finish_test">
                        <h1>
                            BẠN ĐÃ GỬI BÀI THI THÀNH CÔNG!
                        </h1>
                        <h2>ĐIỂM SỐ PHẦN 1 CỦA BẠN LÀ: <span>{{score}} điểm</span></h2>
                        <h2>BGK SẼ CHẤM ĐIỂM PHẦN 2 VÀ CÔNG BỐ KẾT QUẢ THÍ SINH<br>
                            ĐI TIẾP VÀO NGÀY 25/09.</h2>
                        <hr>
                        <p>Cảm ơn bạn đã tham gia thử thách trực tuyến
                            <span>CÔNG DÂN THỜI ĐẠI SỐ!</span><br>
                            Hãy chờ
                            đón kết quả từ chương trình nhé!</p>
                    </b-row>
                </b-container>
            </div>
        </section>
        <div v-if="showModalSuccess" class="modal_success">
            <transition name="modal" ref="modal_sc" id="modal_sc">
                <div>
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <div class="modal-body">
                                <div class="btn_close_err" @click="showModalSuccess = false">
                                    <img src="@/assets/images/icon-close.png" alt="">
                                </div>
                                <slot name="body">
                                    <img class="icon_bell" src="@/assets/images/icon-bell.png" alt="">
                                    <div>
                                       <p v-if="page != 3">{{ text_err }} </p>
                                       <p v-if="page == 3">{{ getTextErr }} </p>
                                    </div>
                                </slot>
                            </div>
                        </div>
                    </div>
                    <div class="modal-mask" @click="showModalSuccess = false"></div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
    // import { defineComponent } from '@vue/composition-api'
    import type1 from '@/components/type_questions/type1.vue'
    import type2 from '@/components/type_questions/type2.vue'
    export default ({
        name: 'baithi',
        data: function () {
            return {
                step: false,
                couter: 0,
                submited: false,
                start_timing: true,
                id_contact: '',
                userInfo: {
                    name: '',
                    email: '',
                    adress: '',
                    sex: '',
                    phone: '',
                    age: '',
                    namefriend: '',
                    emailfriend: '',
                    addressfriend: '',
                    sexfriend: '',
                    phonefriend: '',
                    agefriend: '',
                },
                showModalSuccess: false,
                text_err: '',
                checkSelected: false,
                errEmail: '',
                errPhone: '',
                errPhonefriend: '',
                errAge : '',
                errAgeFriend : '',
                errEmail1: '',
                showtime: false
            }
        },
        components: {
            type1,
            type2
        },
        computed: {
            getTextErr(){
                return this.$store.state.text_err1
            },
            checkValid(){
                return this.$store.state.checkValid
            },
            nextPartState() {
                return this.$store.state.nextPartState
            },
            countDown() {
                return this.$store.state.countDownInterval
            },
            doing() {
                return this.$store.state.doing
            },
            score() {
                return this.$store.state.score
            },
            page() {
                return this.$store.state.page
            },
            checkteam() {
                return localStorage.getItem('statusModal')
            },
            Questions() {
                return this.$store.getters['getQuestionPart'] || []
            },
            partTitle() {
                return this.$store.getters['getPartTitle'] || ''
            },
            part() {
                return this.$store.state.part
            },
            questions() {

                return this.$store.state.questions
            },
            questionAmount() {
                if (this.Questions.length == 0) {
                    return 0
                }
                let amount = 0;
                for (let index = 0; index < this.Questions.questions.length; index++) {
                    const element = this.Questions.questions[index];
                    if (element.content_type !== 5) {
                        amount++
                    }
                }
                return amount
            },
            partNumber() {
                return this.$store.getters['getPartNumber'] + 1
            },
            examPart() {
                return this.$store.getters['getExamPart'] || []
            },
            acceptState() {
                if (!this.submited) {
                    return null
                }
                if (this.accept.length == '') {
                    return false
                } else {
                    return true
                }
            },
            nameState() {
                if (!this.submited) {
                    return null
                }
                if (this.userInfo.name.trim().length == '' || !/[A-Z, a-z]/.test(this.userInfo.name) || /[0-9]/
                    .test(this.userInfo.name) || /[!@#$%^&*()_+:".,?|[\]]/.test(this.userInfo.name)) {
                    return false
                } else {
                    return true
                }
            },
            nameStatefriend() {
                if (!this.submited) {
                    return null
                }
                if (this.userInfo.namefriend.trim().length == '' || !/[A-Z, a-z]/.test(this.userInfo.namefriend) ||
                    /[0-9]/.test(this.userInfo.namefriend) || /[!@#$%^&*()_+:".,?|[\]]/.test(this.userInfo
                        .namefriend)) {
                    return false
                } else {
                    return true
                }
            },
            emailStatefriend() {

                if (!this.submited) {
                    return null
                }
                if (!this.validEmailfriend(this.userInfo.email, this.userInfo.emailfriend)) {
                    return false;
                } else {
                    return true
                }
            },
            emailState() {

                if (!this.submited) {
                    return null
                }

                if (!this.validEmail(this.userInfo.email)) {
                    return false;
                } else {
                    return true
                }
            },
            ageState() {
                if (!this.submited) {
                    return null
                }

                if (!this.validAge(this.userInfo.age)) {
                    return false;
                } else {
                    return true;
                }
            },
            ageStatefriend() {
                if (!this.submited) {
                    return null
                }

                if (!this.validAgefriend(this.userInfo.agefriend)) {
                    return false;
                } else {
                    return true;
                }
            },
            phoneState() {
                if (!this.submited) {
                    return null
                }

                if (!this.checkPhone(this.userInfo.phone)) {
                    return false;
                } else {
                    return true
                }
            },
            phoneStatefriend() {

                if (!this.submited) {
                    return null
                }

                if (!this.checkPhonefriend(this.userInfo.phonefriend)) {
                    return false;
                } else {
                    return true
                }
            },
            sexState() {
                if (!this.submited) {
                    return null
                }
                return this.userInfo.sex.length === 1
            },
            sexStatefriend() {
                if (!this.submited) {
                    return null
                }
                return this.userInfo.sexfriend.length === 1
            },
            addressState() {

                if (!this.submited) {
                    return null
                }

                if (this.userInfo.adress.trim().length == '' || !/[A-Z, a-z]/.test(this.userInfo.adress) || /[0-9]/
                    .test(this.userInfo.adress) || /[!@#$%^&*()_+:".,?|[\]]/.test(this.userInfo.adress)) {
                    return false
                } else {
                    return true
                }
            },
            addressStatefriend() {

                if (!this.submited) {
                    return null
                }

                if (this.userInfo.addressfriend.trim().length == '' || !/[A-Z, a-z]/.test(this.userInfo
                    .addressfriend) || /[0-9]/.test(this.userInfo.addressfriend) || /[!@#$%^&*()_+:".,?|[\]]/.test(
                        this.userInfo.addressfriend)) {
                    return false
                } else {
                    return true
                }
            },
        },
        methods: {
            secondToMinute(time) {
                const minute = parseInt(time / 60, 0) < 10 ? `0${parseInt(time / 60, 0)}` : parseInt(time / 60, 0)
                const secord = time % 60 < 10 ? `0${time % 60}` : time % 60
                return `${minute}:${secord}`
            },
            countDownTimer() {
                if (this.countDown) {
                    return
                }
                const countDownInterval = setInterval(() => {
                    if (this.start_timing) {
                        this.couter -= 1
                        this.$store.commit('SET_TIME_REMAINING', this.couter)
                        // if (this.couter < 1) {
                        //     const trackid = localStorage.getItem('_cdtds_track')
                        //     this.$http.post('/test-submit', {
                        //             trackid: trackid,
                        //             test_id: localStorage.getItem('_test_id'),
                        //             data: JSON.parse(localStorage.getItem('cdtdsData')),
                        //             time: JSON.stringify(this.couter),
                        //         })
                        //         .then(res => {
                        //             if (res.data.code === 1) {
                        //                 this.$bvModal
                        //                 .msgBoxConfirm(
                        //                     "Bài thi của bạn đã được gửi đi, vui lòng đợi kết quả từ chúng tôi.",
                        //                     {
                        //                         title: "Thời gian làm bài đã hết!",
                        //                         size: "lg",
                        //                         modalClass: "moodal_continue_test",
                        //                         buttonSize: "sm",
                        //                         okVariant: "primary",
                        //                         okTitle: "OK",
                        //                         // cancelTitle: false,
                        //                         hideHeaderClose: false,
                        //                         centered: true,
                        //                     }
                        //                 )
                        //                 .then(() => {
                        //                     localStorage.removeItem("cdtdsData");
                        //                     localStorage.removeItem("_test_id");
                        //                     localStorage.removeItem("cdtdsEmail");
                        //                     localStorage.removeItem("cdtdsPage");
                        //                     localStorage.removeItem("cdtdsPart");
                        //                     localStorage.removeItem("userInfo");
                        //                     localStorage.removeItem("statusModal");
                        //                     this.$store.commit('SET_DOING', false)
                        //                     window.location.href = window.location.origin + '/cdtds-main';
                        //                 });

                        //             }
                        //         })
                        // }
                    }
                    // this.countDownTimer()
                }, 1000)

                this.$store.commit('SET_COUNTDOWN', countDownInterval)
            },
            postTestData() {
                const trackid = localStorage.getItem('_cdtds_track')
                this.$http.post('/test-save', {
                    trackid: trackid,
                    test_data: JSON.parse(localStorage.getItem('cdtdsData')),
                    test_id: localStorage.getItem('_test_id')
                }).then(res=>{
                    if (res.data.code === 0) {
                            this.showtime = true
                            const trackid = localStorage.getItem('_cdtds_track')
                            this.$http.post('/test-submit', {
                                    trackid: trackid,
                                    test_id: localStorage.getItem('_test_id'),
                                    data: JSON.parse(localStorage.getItem('cdtdsData')),
                                    time: JSON.stringify(this.couter),
                                })
                                .then(res1 => {
                                    if (res1.data.code === 1) {
                                        this.$bvModal
                                        .msgBoxConfirm(
                                            "Bài thi của bạn đã được gửi đi, vui lòng đợi kết quả từ chúng tôi.",
                                            {
                                                title: "Thời gian làm bài đã hết!",
                                                size: "lg",
                                                modalClass: "moodal_continue_test",
                                                buttonSize: "sm",
                                                okVariant: "primary",
                                                okTitle: "OK",
                                                // cancelTitle: false,
                                                hideHeaderClose: false,
                                                centered: true,
                                            }
                                        )
                                        .then(() => {
                                            localStorage.removeItem("cdtdsData");
                                            localStorage.removeItem("_test_id");
                                            localStorage.removeItem("cdtdsEmail");
                                            localStorage.removeItem("cdtdsPage");
                                            localStorage.removeItem("cdtdsPart");
                                            localStorage.removeItem("userInfo");
                                            localStorage.removeItem("statusModal");
                                            this.$store.commit('SET_DOING', false)
                                            this.$router.push('/')
                                        });

                                    }
                                })
                        }
                })
            },
            autoPushTest() {
                const self = this;
                const autoPush = setInterval(function () {
                    self.postTestData()
                }, 3000);

                this.$store.commit('SET_AUTO_PUSH', autoPush)
            },
            fetchData() {
                const self = this

                this.$store.dispatch('Questions').then((res) => {
                    if (res.data.code == 1) {
                        self.$store.commit('SET_QUESTIONS', res.data.data)
                        const trackid = localStorage.getItem('_cdtds_track')
                        const exam_id = res.data.data.id
                        const contact_id = self.userInfo.id_contact

                        if (!self.$store.state.doing) {
                            self.$http.post('/test-init', {
                                trackid: trackid,
                                exam_id: exam_id,
                                contact_id: contact_id,
                            }).then(res => {
                                if (res.data.code == 1) {
                                    localStorage.setItem('_test_id', res.data.data)
                                    if (localStorage.getItem('_test_id')) {
                                        this.autoPushTest()
                                        this.countDownTimer()
                                    }
                                    this.$store.commit('SET_DOING', true)
                                }
                            })
                        }
                    }
                })
            },
            nextStep1(event) {
                event.preventDefault()
                this.$store.commit('SET_PAGE', 2)
                this.$store.commit('SET_PART', 0)

                // this.countDownTimer()
            },
            nextStep2(event) {
                event.preventDefault()
                if(this.nextPartState != -1 && this.page == 2 ){
                    this.showModalSuccess = true
                    // console.log(this.$refs['select-'+this.nextPartState][0].offsetTop)
                    window.scrollTo(0, this.$refs['select-'+this.nextPartState][0].offsetTop )
                    this.text_err = 'Bạn vui lòng trả lời hết các câu hỏi!'
                    return false
                }else{
                    this.$store.commit('SET_PAGE', 3)
                    this.$store.commit('SET_PART', 1)
                }


            },
            nextStep3(event) {
                event.preventDefault()
                this.$store.dispatch('countAnswerOfPart')
                if(this.nextPartState != -1 && this.page == 3){
                    this.showModalSuccess = true
                    window.scrollTo(0, this.$refs['select-'+this.nextPartState][0].offsetTop )
                    return false
                }else{
                    this.$store.commit('SET_PAGE', 4)
                }
            },
            nextStep4(event) {
                event.preventDefault()
                this.submited = true
                if (!this.userInfo.name || this.nameState == false) {
                    this.$refs.name.focus()
                    return false
                }
                if (!this.userInfo.age || this.ageState == false) {
                    this.$refs.age.focus()
                    return false
                }
                if (!this.validEmail(this.userInfo.email) || this.emailState == false) {
                    this.$refs.email.focus()
                    return false
                }
                if (!this.checkPhone(this.userInfo.phone) || this.phoneState == false) {
                    this.$refs.phone.focus()
                    return false
                }
                if (!this.userInfo.adress || this.addressState == false) {
                    this.$refs.adress.focus()
                    return false
                }
                if (!this.userInfo.sex || this.userInfo.sexState == false) {
                    return false
                }
                // validate team
                if (this.checkteam == 'team') {
                    if (!this.userInfo.namefriend || this.nameStatefriend == false) {
                        this.$refs.namefriend.focus()
                        return
                    }

                    if (!this.userInfo.emailfriend || this.emailStatefriend == false) {
                        this.$refs.emailfriend.focus()
                        return
                    }
                    if (!this.userInfo.phonefriend || this.phoneStatefriend == false) {
                        this.$refs.phonefriend.focus()
                        return
                    }
                    if (!this.userInfo.agefriend || this.ageStatefriend == false) {
                        this.$refs.agefriend.focus()
                        return
                    }

                    if (!this.userInfo.addressfriend || this.addressStatefriend == false) {
                        this.$refs.addressfriend.focus()
                        return
                    }
                    if (!this.userInfo.sexfriend || this.sexStatefriend == false) {
                        this.$refs.sexfriend.focus()
                        return
                    }
                }
                const trackid = localStorage.getItem('_cdtds_track')
                this.$http.post('/track/confirm-contact',{
                    trackid: trackid,
                    contactid: this.userInfo.id_contact,
                    data:{
                        source: document.location.href,
                        name: this.userInfo.name,
                        email: this.userInfo.email,
                        age: this.userInfo.age,
                        phone: this.userInfo.phone,
                        province: this.userInfo.adress,
                        sex: this.userInfo.sex,
                        name_2: this.userInfo.namefriend,
                        email_2: this.userInfo.emailfriend,
                        age_2: this.userInfo.agefriend,
                        phone_2: this.userInfo.phonefriend,
                        province_2: this.userInfo.addressfriend,
                        sex_2: this.userInfo.sexfriend,
                    }
                }).then(res => {
                    if (res.data.code == 1) {
                        this.$store.commit('SET_PAGE', 5)
                        this.$http.post('/test-submit', {
                        trackid: trackid,
                        test_id: localStorage.getItem('_test_id')
                    })
                    .then(res => {
                            if (res.data.code === 1) {
                                this.$store.commit('SET_SCRORE', res.data.data)
                                localStorage.removeItem('cdtdsData')
                                localStorage.removeItem('cdtdsEmail')
                                localStorage.removeItem('cdtdsPage')
                                localStorage.removeItem('cdtdsPart')
                                localStorage.removeItem('_cdtds_track')
                                localStorage.removeItem('userInfo')
                                localStorage.removeItem('statusModal')
                                this.$store.commit('SET_DOING', false)
                            }
                    })
                    }else{
                        this.showModalSuccess = true
                        this.text_err =  'Email đã được sử dụng. Vui lòng nhập một địa chỉ email khác'
                        return false
                    }
                })

            },
            checkPhone(mobile) {
                let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                if (mobile !== '') {
                    if (vnf_regex.test(mobile) == false) {
                        this.errPhone = 'Số điện thoại bạn nhập chưa chính xác'
                        return false
                    } else {
                        return true
                    }
                }
                if(mobile == ''){
                    this.errPhone = 'Bạn vui lòng nhập số điện thoại'
                    return false
                }
            },
            checkPhonefriend(mobile) {
                let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                if (mobile !== '') {
                    if (vnf_regex.test(mobile) == false) {
                        this.errPhonefriend = 'Số điện thoại bạn nhập chưa chính xác'
                        return false
                    } else {
                        return true
                    }
                }
                if(mobile == ''){
                    this.errPhonefriend = 'Bạn vui lòng nhập số điện thoại đồng đội'
                    return false
                }
            },
            validAge(age){
                if(age == '' || !/[0-9]/.test(age) || /(-)/.test(age) || /\s/g.test(age) || /[.,;:\s@~!@#$%^&*()_+]/g.test(age) ){
                    this.errAge = 'Bạn vui lòng nhập tuổi'
                    return false
                }else if(age < 13){
                    this.errAge = 'Bạn vui lòng nhập số tuổi >13'
                    return false
                }else if(age > 100){
                     this.errAge = 'Bạn vui lòng nhập số tuổi <100'
                     return false
                }else{
                    return true
                }
                // age.trim().length < 1 || age.trim() < 13 || age.trim() == 0 || !/[0-9]/.test(age) || /\s/g.test(age) || /(-)/.test(age)
            },
            validAgefriend(age){
                if(age == '' || !/[0-9]/.test(age) || /(-)/.test(age) || /\s/g.test(age) || /[.,;:\s@~!@#$%^&*()_+]/g.test(age) ){
                    this.errAgeFriend = 'Bạn vui lòng nhập tuổi'
                    return false
                }else if(age < 13){
                    this.errAgeFriend = 'Bạn vui lòng nhập số tuổi >13'
                    return false
                }else if(age > 100){
                     this.errAgeFriend = 'Bạn vui lòng nhập số tuổi <100'
                     return false
                }else{
                    return true
                }
                // age.trim().length < 1 || age.trim() < 13 || age.trim() == 0 || !/[0-9]/.test(age) || /\s/g.test(age) || /(-)/.test(age)
            },
            validEmail(email) {
                if(email == ''){
                    this.errEmail1 = 'Bạn vui lòng nhập email'
                    return false;
                }else{
                    this.errEmail1 = 'Email bạn nhập chưa chính xác'
                }
                var re =
                    /^(([^<>()[\]\\.,;:\s@~!@#$%^&*()_+"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            validEmailfriend(email , email2) {
                if(email == email2 && email != ''){
                    this.errEmail = 'Bạn vui lòng nhập email khác trưởng nhóm'
                    return false;
                }else{
                    this.errEmail = 'Bạn vui lòng nhập email đồng đội'
                }
                var re =
                    /^(([^<>()[\]\\.,;:\s@~!@#$%^&*()_+"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                return re.test(email2);
            },
            onSubmit(event) {
                event.preventDefault()
            },
        },
        created() {
            const userInfoStorage = localStorage.getItem("userInfo");
            this.userInfo = Object.assign(this.userInfo, JSON.parse(userInfoStorage))
            // const cdtdsData = localStorage.getItem('cdtdsData')
            const cdtdsEmail = localStorage.getItem('cdtdsEmail')
            // const cdtdsPage = localStorage.getItem('cdtdsPage')
            if (!cdtdsEmail) {
                this.$router.push('/')
            }

            // if (this.Questions.time_remaining) {
            //     this.couter = this.Questions.time_remaining
            // } else {
            //     this.couter = this.Questions.time
            // }
            // this.countDownTimer()
        },
        watch: {
            Questions() {
                if (this.$store.state.questions && this.$store.state.questions.time != 0 && this.couter == 0) {
                    this.$store.dispatch('countAnswerOfPart')
                    if (!this.$store.state.countDownInterval) {
                        this.countDownTimer()
                    }
                    if (this.$store.state.questions.time_remaining) {
                        this.couter = this.$store.state.questions.time_remaining
                    } else {
                        this.couter = this.$store.state.questions.time
                    }
                }
            },
            questions: {
                handler(value) {
                    if (value !== null) {
                        localStorage.setItem('cdtdsData', JSON.stringify(value))
                        // for (let index = 0; index < this.questions.part[0].questions.length; index++) {
                        //     // console.log(this.questions.part[0].questions[index].answers)
                        //     if(this.questions.part[0].questions[index].answers != null){
                        //         this.checkSelected = true
                        //         // console.log(this.questions.part[0].questions[index].id)
                        //         // const itemSelect = 'select-'+this.questions.part[0].questions[index].id
                        //         // itemSelect.focus()
                        //         // console.log('con cau',this.questions.part[0].questions[index].id+'chưa pic')
                        //     }else{

                        //     }
                        // }
                    }
                },
                deep: true
            },
            // getTextErr(value){
            //     this.text_err = value
            // },
            score(value) {
                localStorage.setItem('_scrore', value)
            },
            doing(value) {
                if (value) {
                    this.countDownTimer()
                    this.autoPushTest()
                }
            },
            page(value) {
                if (value !== null) {
                    localStorage.setItem('cdtdsPage', value)
                    this.$store.dispatch('countAnswerOfPart')
                }
            },
            part(value) {
                if (value !== null) {
                    localStorage.setItem('cdtdsPart', value)
                }
            },
        },
        beforeDestroy() {
            this.$store.commit('SET_COUNTDOWN', null)
        },
        mounted(){
            // window.onbeforeunload = function () {
            //     return 'CCCCC';
            // }
        }
    })
</script>
<style scoped>
    @import "../assets/css/baithi.css";
</style>