<template>
    <b-card>
        <b-modal ref="modal-primary" modal-class="modal-primary" centered hide-footer size="lg" title="Thêm đề mới">
            <b-card-text>
                <b-row>
                    <b-col class="mb-1">
                        <b-form-group label="Tên đề thi" label-for="exam-name">
                            <b-form-input :state="examNameValidation" v-model="examModalData.name" id="exam-name" placeholder="Tên đề thi"></b-form-input>
                            <b-form-invalid-feedback v-if="!examNameValidation" id="input-live-feedback">
                                Hãy nhập tên của đề thi
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-checkbox id="checkbox-1" v-model="examModalData.status" name="checkbox-1" value="1" unchecked-value="0">Xuất bản</b-form-checkbox>
                        <b-form-group class="mt-2" label="Mô tả đề thi" label-for="question-content">
                            <quill-editor id="question-content" v-model="examModalData.description" :options="editorOption" ref="myQuillEditor" />
                        </b-form-group>
                        <!-- <b-form-group label="Loại đề thi" label-for="exam-type">
                            <b-form-select :state="examLevelValidation" v-model="examModalData.level" :options="typeOptions" id="exam-type"></b-form-select>
                            <b-form-invalid-feedback v-if="!examLevelValidation" id="input-live-feedback">
                                Hãy chọn một loại đề thi
                            </b-form-invalid-feedback>
                        </b-form-group> -->
                        <b-button class="mt-2" variant="primary" block @click="addExam()">XÁC NHẬN</b-button>
                    </b-col>
                </b-row>
            </b-card-text>
        </b-modal>
        <b-card-text>
            <div class="custom-search d-flex justify-content-between mb-2">
                <b-button variant="success" @click="openModalAdd()">Thêm đề thi mới</b-button>
                <b-form-group class="mb-0">
                    <div class="d-flex align-items-center">
                        <label class="mr-1">Search</label>
                        <b-form-input v-model="searchTerm" placeholder="Search" type="text" class="d-inline-block" />
                    </div>
                </b-form-group>
            </div>
            <b-row>
                <b-col cols="12">
                    <b-table striped hover responsive :items="rows" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :sort-direction="sortDirection" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                        <template #cell(index)="data">{{ data.index + 1 }}</template>
                        <template #cell(question)="data">
                            <div class="question-content" v-html="data.value"></div>
                        </template>
                        <template #cell(description)="data">
                            <div class="question-content" v-html="data.value"></div>
                        </template>

                        <template #cell(level)="data">
                            <b-badge :variant="data.value === 1 ? 'success' : 'warning' ">{{ data.value === 1 ? "Đã học" : "Chưa học" }}</b-badge>
                        </template>

                        <template #cell(status)="data">
                            <b-badge :variant="data.value === 1 ? 'success' : 'warning' ">{{ data.value === 1 ? "Xuất bản" : "Ẩn" }}</b-badge>
                        </template>

                        <template #cell(action)="data">
                            <div class="d-flex">
                                <b-button class="mx-1" size="sm" variant="danger" @click="deleteItem(data.item.id)">Xóa</b-button>
                                <router-link class="mx-1 btn mx-1 btn-primary btn-sm" :to="'/exam/' + data.item.id">Sửa</router-link>
                            </div>
                        </template>
                    </b-table>
                </b-col>
            </b-row>
        </b-card-text>
    </b-card>
</template>

<script>
// eslint-disable-next-line
import "quill/dist/quill.core.css";
// eslint-disable-next-line
import "quill/dist/quill.snow.css";
// eslint-disable-next-line
import "quill/dist/quill.bubble.css";

import { quillRedefine } from '@/libs/quillRedefine'
import { quillEditor } from "vue-quill-editor";

import {
    BAvatar,
    BBadge,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BDropdown,
    BDropdownItem,
    BCard,
    BCardText,
    BButton,
    BModal,
    BRow,
    BCol,
    BFormTextarea,
    BFormCheckbox,
    BTable,
    BFormInvalidFeedback
} from "bootstrap-vue";
import { VueGoodTable } from "vue-good-table";
import store from "@/store/index";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import Config from '../../../config'

export default {
    components: {
        VueGoodTable,
        BAvatar,
        BBadge,
        BPagination,
        BFormGroup,
        BFormInput,
        BFormSelect,
        BDropdown,
        BDropdownItem,
        BCard,
        BCardText,
        BButton,
        BModal,
        BRow,
        BCol,
        BFormTextarea,
        BFormCheckbox,
        BTable,
        quillEditor,
        ToastificationContent,
        BFormInvalidFeedback
    },
    data() {
        return {
            examModalData: {
                name: "",
                description: "",
                level: null,
                status: 1,
            },
            qaEditData: {
                content: "",
                option: [],
            },
            // typeOptions: [
            //     { value: null, text: 'Hãy chọn trình độ đề thi' },
            //     { value: 1, text: 'Cho người đã học' },
            //     { value: 2, text: 'Cho người chưa học' }
            // ],
            pageLength: 10,
            dir: false,
            filter: null,
            filterOn: [],
            perPage: 20,
            sortBy: "",
            sortDesc: false,
            pageOptions: [10, 20, 40],
            sortDirection: "asc",
            fields: [
                { label: "ID", key: "id" },
                { label: "Name", key: "name" },
                { label: "Mô tả", key: "description" },
                // { label: "Loại đề", key: "level" },
                { label: "Status", key: "status" },
                { label: "Action", key: "action" },
            ],
            rows: [],
            searchTerm: "",
            totalRows: 1,
            currentPage: 1,
            
			uploadUrl: `${Config.uploadUrl}`,
            editorOption: {},
        };
    },
    computed: {
        statusVariant() {
            const statusColor = {
                0: "light-warning",
                1: "light-success",
            };

            return (status) => statusColor[status];
        },
        direction() {
            if (store.state.appConfig.isRTL) {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.dir = true;
                return this.dir;
            }
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.dir = false;
            return this.dir;
        },
        examNameValidation() {
            if (this.examModalData.name !== '') {
                return true
            }
            return false
        },
        examLevelValidation() {
            if (this.examModalData.level !== null) {
                return true
            }
            return false
        },
    },
    created() {
        // modify the rich text editor image upload path
        this.editorOption = quillRedefine({
            uploadConfig: {
                action: this.uploadUrl,
                res: (response) => {
                    if (response.data.type === 'audio') {
                        const length = this.$refs.myQuillEditor.quill.getSelection().index
                        this.$refs.myQuillEditor.quill.insertEmbed(length, 'audio', Config.assetUrl + response.data.src, "api")
                        this.$refs.myQuillEditor.quill.setSelection(length + 1)
                        return false;
                    }
                    return Config.assetUrl + response.data.src
                },
                name: 'file'
            }
        })

        this.$http.get("/get-exam-admin").then((res) => {
            if (res.data.code === 1) {
                this.rows = res.data.data;
                this.totalRows = this.rows.length;
            }
        });
    },
    methods: {
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        editItem(id) {
            const index = this.rows.findIndex((r) => r.id === id);
            this.qaEditData = {
                id,
                content: this.rows[index].question,
                option: this.rows[index].option,
            };
            this.$refs["modal-edit"].show();
        },
        openModalAdd() {
            this.examModalData = {
                name: "",
                description: "",
                level: null,
                status: 1,
            };
            this.$refs["modal-primary"].show();
        },
        deleteItem(id) {
            this.$bvModal
                .msgBoxConfirm(
                    "Hành động này không hoàn tác được, bạn có xác nhận xóa đề thi này ?",
                    {
                        title: "Xác nhận",
                        size: "sm",
                        okVariant: "primary",
                        okTitle: "Yes",
                        cancelTitle: "No",
                        cancelVariant: "outline-secondary",
                        hideHeaderClose: false,
                        centered: true,
                    }
                )
                .then((value) => {
                    if (value) {
                        this.$http
                            .post("/delete-exam", { id })
                            .then((res) => {
                                if (res.data.code === 1) {
                                    const index = this.rows.findIndex(
                                        (r) => r.id === id
                                    );
                                    this.rows.splice(index, 1);
                                }
                            });
                    }
                });
        },
        addQARowEditPopup() {
            this.qaEditData.option.push({
                value: "",
                right_answer: 0,
                text: "",
            });
        },
        addExam() {
            if (!this.examNameValidation || !this.examLevelValidation) {
                this.$toast({
                    component: ToastificationContent,
                    props: {
                        title: "Notification",
                        icon: "InfoIcon",
                        text: "Hãy nhập các trường được yêu cầu !",
                        variant: "danger",
                        position: "bottom-right",
                    },
                });

                return
            }

            this.$http
                .post("/create-exam", {
                    name: this.examModalData.name,
                    description: this.examModalData.description,
                    level: this.examModalData.level,
                    status: this.examModalData.status
                })
                .then((res) => {
                    if (res.data.code === 1) {
                        this.rows.push(res.data.data);
                        this.$refs["modal-primary"].hide();
                    }
                });
        },
        editQuestion() {
            this.$http
                .post("/edit-questions", {
                    question: this.qaEditData,
                })
                .then((res) => {
                    if (res.data.code === 1) {
                        this.$toast({
                            component: ToastificationContent,
                            props: {
                                title: "Notification",
                                icon: "InfoIcon",
                                text: "I do not think that word means what you think it means.",
                                variant: "success",
                                position: "bottom-right",
                            },
                        });

                        const index = this.rows.findIndex(
                            (r) => r.id === this.qaEditData.id
                        );
                        this.rows[index].question = res.data.data.question;
                        this.rows[index].option = res.data.data.option;
                        this.$refs["modal-edit"].hide();
                    }
                });
        },
    },
};
</script>

<style>
.question-content img {
    height: 300px;
}
</style>

<style lang="scss" >
@import "@core/scss/vue/libs/vue-good-table.scss";
</style>
