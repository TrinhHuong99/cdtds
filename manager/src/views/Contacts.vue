<template>
    <div>
        <b-modal ref="modal-examEdit" modal-class="modal-primary" centered hide-footer size="lg" title="Sửa thông tin đề">
            <b-card-text>
                <b-row v-for="(data) in testData" :key="data">
                    <b-col class="mb-1" >
                        <b-form-group class="mt-2" :label="data.index" label-for="question-content">
                            <div v-html="data.value"></div>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-card-text>
        </b-modal>
        <b-card>
            <b-card-text>
                <b-row>
                    <b-col md="3">
                        <b-form-group label="Từ ngày" label-for="v-form-dateform">
                            <b-form-datepicker local="vi" placeholder="Từ ngày" v-model="date_from" class="mb-1" selected-variant="primary" id="v-form-dateform" />
                        </b-form-group>
                    </b-col>
                    <b-col md="3">
                        <b-form-group label="Đến ngày" label-for="v-to-dateto">
                            <b-form-datepicker local="vi" placeholder="Đến ngày" v-model="date_to" class="mb-1" selected-variant="primary" id="v-to-dateto" />
                        </b-form-group>
                    </b-col>
                    <b-col md="3">
                        <b-form-group label="Tuổi" label-for="v-to-age">
                            <b-form-input v-model="ageFilter" placeholder="Tuổi" id="v-to-age" />
                        </b-form-group>
                    </b-col>
                    <b-col md="3">
                        <!-- <b-form-group label="Tuổi" label-for="v-to-age">
                            <b-form-input v-model="ageFilter" placeholder="Tuổi" id="v-to-age" />
                        </b-form-group> -->
                    </b-col>
                </b-row>
                <b-row>

                    <b-col md="3">
                        <b-form-group label="Email" label-for="v-to-email">
                            <b-form-input v-model="emailFilter" placeholder="Email" id="v-to-email" />
                        </b-form-group>
                    </b-col>
                    <b-col md="3">
                        <b-form-group label="Số điện thoại" label-for="v-to-phone">
                            <b-form-input v-model="phoneFilter" id="v-to-phone" placeholder="Số điện thoại" />
                        </b-form-group>
                    </b-col>
                    <b-col md="3">
                        <b-form-group label="-">
                            <download-excel class="btn w-100 mr-1 btn-success" :fields="json_fields" :fetch="fetchDataExport" name="filename.xls">
                                Export Excel
                            </download-excel>
                        </b-form-group>
                    </b-col>
                    <b-col md="3">
                        <b-form-group label="-">
                            <b-button @click="filterData" type="submit" variant="primary" class="w-100 mr-1">LỌC</b-button>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-card-text>
        </b-card>
        <b-card>
            <b-card-text>
                <b-row>
                    <b-col md="6">
                        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" first-number last-number class="pagination-success">
                            <template #prev-text>
                                <feather-icon size="18" icon="ChevronLeftIcon" />
                            </template>
                            <template #next-text>
                                <feather-icon size="18" icon="ChevronRightIcon" />
                            </template>
                        </b-pagination>
                    </b-col>
                    <b-col md="2">
                        <!-- <download-excel class="btn w-100 mr-1 btn-success" :data="rows">
                            Export Excel
                        </download-excel> -->
                    </b-col>
                    <b-col md="4"><span class="float-right">Số lượng: <strong>{{ totalRows }}</strong></span></b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <b-table striped hover responsive :items="rows" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :sort-direction="sortDirection" :filter="filter">
                            <template #cell(test_id)="data">
                                <router-link v-if="data.value" :to="'/t/'+data.item.test_id">Chi tiết</router-link>
                            </template>
                            <template #cell(thoigiandangky)="data"><div v-html="data.value"></div></template>
                            <template #cell(thoigiannopbai)="data"><div v-html="data.value"></div></template>
                            <template #cell(thoigianthamgia)="data"><div v-html="data.value"></div></template>
                            <!-- <template #cell(created_at)="data">{{ dateToTimeString(data.value) }}<br>{{ dateToDateString(data.value) }}</template> -->
                            <template #cell(id)="data"><b-button :to="'/t/'+data.item.idbaithi" @click="$route.push({part: '/'})" size="sm" variant="primary" class="mr-1">Bài thi</b-button><b-button @click="openModalTestContent(data.item.test)" size="sm" variant="primary" class="mr-1">Tự luận</b-button></template>
                        </b-table>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" first-number last-number class="pagination-success">
                            <template #prev-text>
                                <feather-icon size="18" icon="ChevronLeftIcon" />
                            </template>
                            <template #next-text>
                                <feather-icon size="18" icon="ChevronRightIcon" />
                            </template>
                        </b-pagination>
                    </b-col>
                </b-row>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
import {
    // BAvatar,
    // BBadge,
    BPagination,
    BFormGroup,
    BFormDatepicker,
    BFormInput,
    BFormSelect,
    // BDropdown,
    // BDropdownItem,
    BCard,
    BCardText,
    BButton,
    // BModal,
    BRow,
    BCol,
    // BFormTextarea,
    // BFormCheckbox,
    BTable,
} from "bootstrap-vue";

export default {
    created() {
        this.filterData();
    },
    data() {
        return {
            testData: [],
            learnChoose: null,
            learnOptions: [
                { value: null, text: "Tất cả" },
                { value: "1", text: "Đã học" },
                { value: "2", text: "Chưa học" },
            ],
            testStatus: null,
            testOptions: [
                { value: null, text: "Tất cả" },
                { value: "1", text: "Đã làm bài thi" },
                { value: "2", text: "Chưa làm bài thi" },
            ],
            phoneFilter: '',
            ageFilter: '',
            emailFilter: '',
            currentPage: 1,
            totalRows: 0,
            perPage: 1,
            filter: null,
            sortDirection: "asc",
            sortBy: "",
            date_from: '',
            date_to: '',
            sortDesc: false,
            rows: [],
            fields: [
                { label: "Họ tên", key: "name" },
                { label: "SĐT", key: "phone" },
                { label: "Email", key: "email" },
                { label: "Tỉnh", key: "province" },
                { label: "Giới tính", key: "sex" },
                { label: "Hình thức đăng ký", key: "hinhthuc" },
                { label: "Họ tên thành viên", key: "name_2" },
                { label: "SĐT thành viên", key: "phone_2" },
                { label: "Email thành viên", key: "email_2" },
                { label: "Tỉnh thành viên", key: "province_2" },
                { label: "Giới tính thành viên", key: "sex_2" },
                { label: "Đăng ký", key: "dangky" },
                { label: "Thời gian đăng ký", key: "thoigiandangky" },
                { label: "Tham gia", key: "thamgia" },
                { label: "Thời gian tham gia", key: "thoigianthamgia" },
                { label: "Nộp bài", key: "nopbai" },
                { label: "Thời gian nộp bài", key: "thoigiannopbai" },
                { label: "Điểm trắc nghiệm", key: "test_score" },
                // { label: "Ngày ghi nhận", key: "created_at" },
                { label: "Bài làm tự luận", key: "id" },
            ],
            json_fields: {
                'Họ và tên': 'name',
                'Email': 'email',
                'SDT': 'phone',
                'Tuổi': 'age',
                'Tỉnh': 'province',
                'Giới tính': 'sex',
                'Hình thức đăng ký': 'hinhthuc',
                'Họ và tên thành viên': 'name_2',
                'Email thành viên': 'email_2',
                'SDT thành viên': 'phone_2',
                'Tuổi thành viên': 'age_2',
                'Tỉnh thành viên': 'province_2',
                'Giới tính thành viên': 'sex_2',
                'Đăng ký': 'dangky',
                'Thời gian đăng ký': 'thoigiandangky',
                'Tham gia': 'thamgia',
                'Thời gian tham gia': 'thoigianthamgia',
                'Nộp bài': 'nopbai',
                'Thời gian nộp bài': 'thoigiannopbai',
                'Điểm trắc nghiệm': 'test_score',
                'Câu trả lời tự tuận 1': 'test_1',
                'Câu trả lời tự tuận 2': 'test_2',
                'Câu trả lời tự tuận 3': 'test_3',
            }
        };
    },
    components: {
        BRow,
        BCol,
        BTable,
        BCard,
        BCardText,
        BPagination,
        BFormGroup,
        BFormDatepicker,
        BFormSelect,
        BButton,
        BFormInput
    },
    watch: {
        currentPage: {
            handler() {
                this.filterData();
            },
            deep: true,
        },
    },
    methods: {
         openModalTestContent(data) {
            this.testData = data
            this.$refs["modal-examEdit"].show();
        },
        async filterData() {
            const data = await this.fetchContact()
            this.rows = data.data.data.data;
            this.totalRows = data.data.data.total;
            this.perPage = data.data.data.perPage;
        },
        async fetchContact(exportData = false) {
            return this.$http
                .get("/contact", {
                    params: {
                        page: this.currentPage,
                        start: this.date_from,
                        end: this.date_to,
                        email: this.emailFilter,
                        age: this.ageFilter,
                        phone: this.phoneFilter,
                        export_data: exportData
                    },
                })
        },
        async fetchDataExport() {
            const data = await this.fetchContact(true)
            console.log(data.data.data)
            return data.data.data
        },
        dateToDateString(dateText) {
            const date = new Date(dateText)
            return `${date.getFullYear()}-${(`0${date.getMonth() + 1}`).slice(-2)}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`
        },
        dateToTimeString(dateText) {
            const date = new Date(dateText)
            return `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()} : ${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`
        },
    },
};
</script>

<style>

.table-responsive .table td, .table-responsive .table th {
    white-space: nowrap;
    width: 1%;
}
</style>
