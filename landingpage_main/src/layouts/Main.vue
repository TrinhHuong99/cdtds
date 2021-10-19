<template>
    <div class="">
        <section id="layout1" ref="layout1">
            <b-container>
                <b-row class="justify-content-between">
                    <b-col cols="6" class="d-flex justify-content-start align-items-center">
                        <a href="" class="logo">
                            <img src="@/assets/images/logo.png" alt="" />
                        </a>
                    </b-col>
                    <b-col cols="6" class="logo-hocmai d-flex just ify-content-end align-items-center">
                        <a href="">
                            <img src="@/assets/images/logo-hocmai.png" alt="" />
                        </a>
                    </b-col>
                </b-row>
                <b-row class="nav-header">
                    <nav class="">
                        <ul class="list-unstyled d-flex pl-0">
                            <li v-for="(item, index) in menus" :key="index"
                                @click="addactive(index), goto( item.goto )">
                                <a :class="{ 'active': active === index }"> {{ item.value }} </a>
                            </li>
                            <!-- <li>
                                <a  @click="goto('layout5')">Thể
                                    lệ</a>
                            </li>
                            <li>
                                <a  @click="goto('layout7')">Giải
                                    thưởng</a>
                           </li> -->
                            <li>
                                <a @click="showModalSelectTeam = true, closeTest()">Đăng ký và dự thi</a>
                            </li>
                        </ul>
                    </nav>
                </b-row>
                <b-row class="title_ly1">
                    <p>THỬ THÁCH TRỰC TUYẾN: <span>CÔNG DÂN THỜI ĐẠI SỐ</span></p>
                    <p>Làm chủ kỹ năng - Hăng say sáng tạo</p>
                </b-row>
                <b-row class="info_ly1">
                    <b-col lg="5" class="order_2">
                        <img src="@/assets/images/img-header.png" alt="" />
                    </b-col>
                    <b-col lg="7" class="order_1">
                        <p>
                            Tháng 09/2021, Hệ thống Giáo dục HOCMAI phát động thử thách trực
                            tuyến <span>“Công dân thời đại số”</span> với chủ đề
                            <span>“Làm chủ kỹ năng - Hăng say sáng tạo”</span>. Thử thách được
                            tổ chức dành cho học sinh, sinh viên từ 13 tuổi trở lên trên cả
                            nước, nhằm khuyến khích thế hệ trẻ Việt Nam phát triển sự sáng
                            tạo, lan tỏa những kỹ năng số và thông điệp tích cực đến cộng
                            đồng.
                        </p>
                        <div class="box_btn">
                            <a class="btn-header" @click="showModalSelectTeam = true, closeTest()">ĐĂNG
                                KÝ VÀ DỰ THI</a>

                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <section id="layout2" ref="layout2">
            <b-container>
                <b-row class="title_ly2">
                    <p>
                        GIỚI THIỆU VỀ THỬ THÁCH <i>TRỰC TUYẾN</i>
                        <span>“Công dân thời đại số” </span>
                    </p>
                </b-row>
                <b-row class="info_ly2">
                    <p>
                        Thử thách trực tuyến “Công dân thời đại số” với chủ đề “Làm chủ kỹ
                        năng - Hăng say sáng tạo” nằm trong khuôn khổ chương trình Tư duy
                        thời đại số - chương trình nhằm xây dựng và nâng cao các kỹ năng cho
                        một thế hệ công dân số có trách nhiệm do Hệ thống Giáo dục HOCMAI
                        triển khai với sự hỗ trợ của Facebook từ năm 2020.
                    </p>
                </b-row>
                <b-row class="box_ly2">
                    <b-col lg="4" class="order_2">
                        <div class="item_ly2">
                            <p>
                                Tạo sân chơi cho các bạn học sinh, sinh viên Việt Nam phát huy
                                tính sáng tạo và hiểu biết của mình để lan tỏa các thông điệp ý
                                nghĩa xung quanh chủ đề Kỹ năng số & An toàn số.
                            </p>
                        </div>
                    </b-col>
                    <b-col lg="4" class="order_1">
                        <div class="item_ly2 it2">
                            <p>
                                THỬ THÁCH TRỰC TUYẾN DÀNH CHO TẤT CẢ HỌC SINH, SINH VIÊN TỪ 13
                                TUỔI TRỞ LÊN TRÊN TOÀN QUỐC
                            </p>
                            <img src="@/assets/images/icon-emotion.png" alt="" />
                        </div>
                    </b-col>
                    <b-col lg="4" class="order_3">
                        <div class="item_ly2 it3">
                            <p>
                                Nâng cao nhận thức của học sinh, sinh viên về những kỹ năng số
                                quan trọng như việc sử dụng tư duy phản biện và thấu cảm khi
                                tham gia môi trường mạng, cách bảo vệ danh tính số của bản thân,
                                hiểu về dấu chân số và từ đó tạo ra một cộng đồng trực tuyến
                                lành mạnh, tích cực.
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <section id="layout3">
            <b-container>
                <b-row class="title_ly3">
                    <p>TẠI SAO BẠN NÊN THAM GIA?</p>
                </b-row>
                <b-row class="box_ly3">
                    <b-col>
                        <div class="item_ly3">
                            <div class="img_item">
                                <img src="@/assets/images/icon-light.png" alt="" />
                            </div>
                            <p>
                                Cơ hội thể hiện sức sáng tạo và tiếng nói của mình về chủ đề kỹ
                                năng số và an toàn số
                            </p>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="item_ly3">
                            <div class="img_item">
                                <img src="@/assets/images/icon-earth.png" alt="" />
                            </div>
                            <p>
                                Tích lũy thêm kiến thức và góp phần xây dựng cộng đồng trực
                                tuyến an toàn, lành mạnh
                            </p>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="item_ly3">
                            <div class="img_item">
                                <img src="@/assets/images/icon-gift.png" alt="" />
                            </div>

                            <p>Nhận giấy chứng nhận và hàng trăm phần quà hấp dẫn</p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <section id="layout4">
            <b-container>
                <b-row class="title_ly4">
                    <p>NỘI DUNG THỬ THÁCH</p>
                </b-row>
                <b-row class="info_ly4">
                    <p>
                        Hãy sáng tạo một sản phẩm để truyền tải thông điệp của bạn hoặc lan
                        tỏa các kỹ năng số và an toàn trực tuyến đến các bạn học sinh, sinh
                        viên Việt Nam, từ đó khuyến khích các bạn trẻ Việt Nam cùng nhau xây
                        dựng một thế hệ công dân số có trách nhiệm và cộng đồng mạng an
                        toàn, tích cực.
                    </p>
                </b-row>
                <b-row class="box_ly4">
                    <div class="conatiner_box">
                        <div class="title_box_ly4">
                            <p>HÌNH THỨC SẢN PHẨM</p>
                        </div>
                        <div class="content_box_ly4">
                            <div class="item_ly4">
                                <div class="header_item_ly4">
                                    <img src="@/assets/images/icon-video.png" alt="" />
                                    <span>VIDEO</span>
                                </div>
                                <div class="content_ly4">
                                    Độ dài từ 3 - 5 phút. Bạn có thể làm dưới dạng vlog, dựng tình
                                    huống, thuyết trình, hoạt hình, sáng tác bài hát, điệu
                                    nhảy,...
                                </div>
                            </div>
                            <div class="item_ly4">
                                <div class="header_item_ly4">
                                    <img src="@/assets/images/icon-picture.png" alt="" />
                                    <span>TRANH ẢNH</span>
                                </div>
                                <div class="content_ly4">
                                    Không giới hạn số trang. Có thể thể hiện trên giấy hoặc qua đồ
                                    họa bằng máy. Bạn có thể vẽ tranh/ truyện tranh, chụp ảnh,
                                    thiết kế poster, infographic,...
                                </div>
                            </div>
                            <div class="item_ly4">
                                <div class="header_item_ly4">
                                    <img src="@/assets/images/icon-post.png" alt="" />
                                    <span>BÀI VIẾT</span>
                                </div>
                                <div class="content_ly4">
                                    Độ dài từ 300 - 1000 từ. Bạn có thể viết bài luận, tản văn,
                                    truyện ngắn,...
                                </div>
                            </div>
                        </div>
                        <div class="title_box2_ly4">
                            <p>Thí sinh có thể đăng ký thi theo một trong hai hình thức</p>
                        </div>
                        <div class="content_box2_ly4 d-flex justify-content-center">
                            <div class="item2_ly4">
                                <img src="@/assets/images/icon-member.png" alt="" />
                                <p class="">Cá nhân</p>
                            </div>
                            <div class="item2_ly4">
                                <img src="@/assets/images/icon-team.png" alt="" />
                                <p class="">Đồng đội</p>
                                <span>(2 người)</span>
                            </div>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </section>
        <section id="layout5" ref="layout5">
            <b-container>
                <b-row class="title_ly5">
                    <p>THỂ LỆ CUỘC THI </p>
                </b-row>
                <b-row class="round1">
                    <div class="title_round">VÒNG 1</div>
                    <div class="info_round">
                        <p>
                            <p>Thí sinh sẽ làm bài thi online gồm 2 phần trong 60 phút. </p>
                            <p>Kết thúc
                                vòng 1, BTC chọn ra 70 thí sinh và nhóm thí sinh đi tiếp vào Vòng
                                2.</p>
                    </div>
                    <div class="box_ly5 d-flex justify-content-between">
                        <div class="item_ly5">
                            <div class="header_item_ly5">Phần 1: Bài thi trắc nghiệm</div>
                            <div class="content_item_ly5">
                                <p><span>Chủ đề câu hỏi:</span> Liên quan đến nội dung về an toàn số
                                    trong chương trình học trực tuyến Tư duy thời đại số.
                                </p>
                                <p><span>Hình thức thi: </span>Trắc nghiệm (20 câu)

                                </p>
                                <p>Chú ý: Để có thêm kiến thức về nội dung an toàn số, hoàn thành tốt vòng thi trắc
                                    nghiệm và ý tưởng sáng tạo, các bạn có thể tham gia chương trình học trực tuyến Tư
                                    duy thời đại số miễn phí tại đây: <a href="https://hocmai.vn/tuduythoidaiso/" target="_blank">https://hocmai.vn/tuduythoidaiso/</a>.
                                </p>
                            </div>
                        </div>
                        <div class="item_ly5">
                            <div class="header_item_ly5">
                                Phần 2: Miêu tả ý tưởng sản phẩm dự thi của bạn
                            </div>
                            <div class="content_item_ly5">
                                <p><span>Chủ đề:</span> Miêu tả ngắn gọn ý tưởng sản phẩm dự thi
                                    của bạn nếu vượt qua Vòng 1. </p>
                                <p><span>Hình thức thi:</span> Tự luận</p>
                                <p><span>Nội dung:</span> Thí sinh trả lời 3 câu hỏi:</p>
                                <ul class="list-unstyled">
                                    <li>
                                        Hình thức sản phẩm dự thi của bạn là gì? (Video, bài viết, tranh ảnh, ...)
                                    </li>
                                    <li>
                                        Chủ đề bài dự thi của bạn là gì? Bạn có thể tìm hiểu danh
                                        sách chủ đề gợi ý <a
                                            href="https://drive.google.com/file/d/1KO8altSrd_nBdc_aBJFyDp71TsDofR-7/view" target="_blank">tại
                                            đây.</a>
                                    </li>
                                    <li>
                                        Chia sẻ ngắn gọn về ý tưởng của sản phẩm mà bạn sẽ thực hiện
                                        nếu vượt qua Vòng 1 (trong khoảng 100 - 300 từ).
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="text_end_round">Điểm Vòng 1 = Điểm Phần 1 x 30% + Điểm Phần 2 x 70%</div>
                </b-row>
                <b-row class="round2">
                    <div class="title_round">
                        VÒNG 2
                    </div>
                    <div class="info_round2">
                        <p>Thí sinh hoặc nhóm thí sinh được chọn sẽ hoàn thiện sản phẩm đã mô tả từ Vòng 1.</p>
                        <p>BTC sẽ chấm điểm và đồng thời đăng sản phẩm dự thi của thí sinh lên fanpage <span>
                            <a href="https://www.facebook.com/teenhoclaptrinh" target="_blank">“Cộng đồng
                                Teen thích học Lập trình”</a></span> để khán giả bình chọn.</p>
                    </div>
                    <div class="text_end_round">Điểm Vòng 2 = Điểm BGK chấm x 50% + Điểm Bình chọn khán giả trên fanpage
                        x 50%</div>
                </b-row>
                <b-row class="box_btn">
                    <a class="btn_ly5"
                        href="https://docs.google.com/document/u/1/d/1fESf-S3MZ8FNHnYqQsDjgGlpqthIXQxeQpAGuHpAsLI/edit" target="_blank">TẢI
                        THỂ LỆ CHI TIẾT</a>
                </b-row>
            </b-container>
        </section>
        <section id="layout6">
            <b-container>
                <b-row class="title_ly6">
                    <p>MỐC THỜI GIAN CHI TIẾT</p>
                </b-row>
                <b-row class="box_ly6">
                    <div class="box_left">
                        <!-- <img src="@/assets/images/anchor.png" alt=""> -->
                    </div>
                    <div class="box_right">
                        <div class="item_ly6">
                            <div class="before_item">
                                <div class="circle circle_yellow"></div>
                                09h00 ngày 09/09
                            </div>
                            <p>
                                Mở cổng đăng ký tham gia thử thách tại: https://hocmai.vn/congdanthoidaiso/.
                                Vòng 1 chính thức bắt đầu.
                            </p>
                        </div>
                        <div class="item_ly6">
                            <div class="before_item">
                                <div class="circle circle_yellow"></div>
                                09/09 - 23/09
                            </div>
                            <p>Thời gian để các cá nhân và nhóm hoàn thành các nội dung của Vòng 1. </p>
                        </div>
                        <div class="item_ly6">
                            <div class="before_item">
                                <div class="circle circle_red"></div>
                                23h59’ ngày 23/09
                            </div>
                            <p>Hạn cuối để hoàn thành Vòng 1.</p>
                        </div>
                        <div class="item_ly6">
                            <div class="before_item">
                                <div class="circle circle_yellow"></div>
                                25/09
                            </div>
                            <p>Công bố kết quả Vòng 1.
                                <br>
                                70 cá nhân và nhóm xuất sắc sẽ bước vào Vòng 2.</p>
                        </div>
                        <div class="item_ly6">
                            <div class="before_item">
                                <div class="circle circle_yellow"></div>
                                25/09 - 09/10
                            </div>
                            <p>Các cá nhân và nhóm được chọn bước vào Vòng 2, hoàn thiện sản phẩm và gửi về
                                cho BTC (link gửi sản phẩm sẽ được đính kèm trong email thông báo vào Vòng 2).</p>
                        </div>
                        <div class="item_ly6">
                            <div class="before_item">
                                <div class="circle circle_red"></div>
                                23h59’ ngày 09/10
                            </div>
                            <p>Hạn cuối gửi bài Vòng 2.</p>
                        </div>
                        <div class="item_ly6">
                            <div class="before_item">
                                <div class="circle circle_yellow"></div>
                                10/10 - 17/10
                            </div>
                            <p>Thời gian chấm điểm từ BGK và bình chọn bài dự thi trên Facebook.
                            </p>
                        </div>
                        <div class="item_ly6">
                            <div class="before_item">
                                <div class="circle circle_yellow"></div>
                                19/10
                            </div>
                            <p>Công bố 15 thí sinh và nhóm thí sinh thắng cuộc.
                            </p>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </section>
        <section id="layout7" ref="layout7">
            <b-container>
                <b-row class="title_ly7">
                    <p>CƠ CẤU GIẢI THƯỞNG</p>
                    <p>DÀNH CHO 70 THÍ SINH VÀ NHÓM LỌT VÀO VÒNG 2</p>
                </b-row>
                <b-row class="info_ly7">
                    <p>
                        QUÀ TẶNG CHO 15 THÍ SINH VÀ<br> NHÓM
                        XUẤT SẮC NHẤT
                    </p>
                </b-row>
                <b-row class="box_gitf_member">
                    <div class="title_gitf">
                        Cá nhân
                    </div>
                    <div class="container_gift">
                        <div class="header_gift">
                            <img src="@/assets/images/gift-member.png" alt="">
                        </div>
                        <div class="info_gift">
                            <img src="@/assets/images/top.png" alt="">
                            <p>1 Giải nhất</p>
                            <p>1 Giấy chứng nhận, 1 Loa bluetooth, 1 Sạc dự phòng ,<br>
                                1 Bình giữ nhiệt , 1 Túi tote, 1 Balo, 1 Ô, 1 Áo
                            </p>
                        </div>
                        <div class="content_gift">

                            <div class="item_gift d-lg-block d-none">
                                <div class="header_item_gift">
                                    <img src="@/assets/images/top1.png" alt="">
                                </div>
                                <p>2 Giải Nhì</p>
                                <p>1 Giấy chứng nhận, 1 Loa bluetooth, 1 Sạc dự phòng, 1 Bình giữ nhiệt, 1 Túi
                                    tote, 1 Balo</p>
                            </div>
                            <div class="item_gift d-lg-block d-none">
                                <div class="header_item_gift">
                                    <img src="@/assets/images/top2.png" alt="">
                                </div>
                                <p>2 Giải Ba</p>
                                <p>1 Giấy chứng nhận, 1 Loa bluetooth, 1 Bình giữ nhiệt , 1 Túi tote, 1 Balo</p>
                            </div>
                            <div class="item_gift d-lg-block d-none">
                                <div class="header_item_gift">
                                    <img src="@/assets/images/top3.png" alt="">
                                </div>
                                <p>3 Giải Khuyến khích</p>
                                <p>1 Giấy chứng nhận, 1 Sạc dự phòng, 1 Bình giữ nhiệt, 1 Túi tote, 1 Balo</p>
                            </div>

                            <carousel class="box-slider-member d-lg-none d-block"
                                :responsive="{0:{items:1,nav:false},600:{items:2}}" :nav="false" :dots="false"
                                :items="1">
                                <div class="item_gift item">
                                    <div class="header_item_gift">
                                        <img src="@/assets/images/top1.png" alt="">
                                    </div>
                                    <p>2 Giải Nhì</p>
                                    <p>1 Giấy chứng nhận, 1 Loa bluetooth, 1 Sạc dự phòng, 1 Bình giữ nhiệt, 1 Túi
                                        tote, 1 Balo</p>
                                </div>
                                <div class="item_gift item">
                                    <div class="header_item_gift">
                                        <img src="@/assets/images/top2.png" alt="">
                                    </div>
                                    <p>2 Giải Ba</p>
                                    <p>1 Giấy chứng nhận, 1 Loa bluetooth, 1 Bình giữ nhiệt, 1 Túi tote, 1 Balo</p>
                                </div>
                                <div class="item_gift item">
                                    <div class="header_item_gift">
                                        <img src="@/assets/images/top3.png" alt="">
                                    </div>
                                    <p>3 Giải Khuyến khích</p>
                                    <p>1 Giấy chứng nhận, 1 Sạc dự phòng, 1 Bình giữ nhiệt, 1 Túi tote, 1 Balo</p>
                                </div>
                            </carousel>
                        </div>
                    </div>
                </b-row>
                <b-row class="box_gitf_team">
                    <div class="title_gitf">
                        Nhóm
                    </div>
                    <div class="container_gift">
                        <div class="header_gift">
                            <img src="@/assets/images/gift-team.png" alt="">
                        </div>
                        <div class="info_gift">
                            <img src="@/assets/images/top.png" alt="">
                            <p>1 Giải nhất</p>
                            <p>2 Giấy chứng nhận, 2 Loa bluetooth, 2 Bình giữ nhiệt,<br>
                                2 Sạc dự phòng, 2 Túi Tote
                            </p>
                        </div>
                        <div class="content_gift">
                            <div class="item_gift d-lg-block d-none">
                                <div class="header_item_gift">
                                    <img src="@/assets/images/top1.png" alt="">
                                </div>
                                <p>1 Giải Nhì</p>
                                <p>2 Giấy chứng nhận, 2 Loa bluetooth, 2 Bình giữ nhiệt, 2 Túi tote, 2 Ô </p>
                            </div>
                            <div class="item_gift d-lg-block d-none">
                                <div class="header_item_gift">
                                    <img src="@/assets/images/top2.png" alt="">
                                </div>
                                <p>2 Giải Ba</p>
                                <p>2 Giấy chứng nhận, 2 Sạc dự phòng, 2 Bình giữ nhiệt, 2 Túi tote, 2 Ô</p>
                            </div>
                            <div class="item_gift d-lg-block d-none">
                                <div class="header_item_gift">
                                    <img src="@/assets/images/top3.png" alt="">
                                </div>
                                <p>3 Giải Khuyến khích</p>
                                <p>2 Giấy chứng nhận, 2 Bình giữ nhiệt , 2 Túi tote,
                                    2 Ô</p>
                            </div>

                            <carousel class="box-slider-member d-lg-none d-block" :nav="false" :dots="false"
                                :responsive="{0:{items:1,nav:false},600:{items:2}}" :items="1">
                                <div class="item_gift">
                                    <div class="header_item_gift">
                                        <img src="@/assets/images/top1.png" alt="">
                                    </div>
                                    <p>1 Giải Nhì</p>
                                    <p>2 Giấy chứng nhận, 2 Loa bluetooth, 2 Bình giữ nhiệt, 2 Túi tote, 2 Ô </p>
                                </div>
                                <div class="item_gift">
                                    <div class="header_item_gift">
                                        <img src="@/assets/images/top2.png" alt="">
                                    </div>
                                    <p>2 Giải Ba</p>
                                    <p>2 Giấy chứng nhận, 2 Sạc dự phòng, 2 Bình giữ nhiệt, 2 Túi tote, 2 Ô</p>
                                </div>
                                <div class="item_gift">
                                    <div class="header_item_gift">
                                        <img src="@/assets/images/top3.png" alt="">
                                    </div>
                                    <p>3 Giải Khuyến khích</p>
                                    <p>2 Giấy chứng nhận, 2 Bình giữ nhiệt, 2 Túi tote, 2 Ô</p>
                                </div>
                            </carousel>
                        </div>
                    </div>
                </b-row>
            </b-container>
        </section>
        <section id="layout8">
            <b-container>
                <b-row class="title_ly8">
                    <p>
                        QUÀ TẶNG CHO 55 THÍ SINH<br>
                        VÀ NHÓM CÒN LẠI
                    </p>
                </b-row>
                <b-row class="box_ly8">
                    <b-col lg="6">
                        <div class="item_ly8 ">
                            <div class="circle_ly8">

                            </div>
                            <div class="content_item_ly8">
                                <div class="">
                                    <span>Cá nhân</span>
                                    <p>1 Giấy chứng nhận, 1 Bình giữ nhiệt, 1 Túi tote</p>
                                </div>
                                <img src="@/assets/images/certification.png" alt="">
                            </div>
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div class="item_ly8 ">
                            <div class="circle_ly8">

                            </div>
                            <div class="content_item_ly8">
                                <div class="">
                                    <span>Nhóm</span>
                                    <p>2 Giấy chứng nhận,
                                        2 Bình giữ nhiệt</p>
                                </div>
                                <img src="@/assets/images/certification2.png" alt="">
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="box_btn">
                    <a class="btn_ly8" @click="showModalSelectTeam = true, closeTest()">ĐĂNG KÝ VÀ DỰ
                        THI</a>

                </b-row>
            </b-container>
        </section>
        <section id="layout9">
            <b-container>
                <b-row>
                    <b-col lg="6" class="order_2">
                        <div class="header_info">
                            <p>THÔNG TIN LIÊN HỆ</p>
                        </div>
                        <div class="content_info">
                            <div class="item_ly9">
                                <a href="https://www.facebook.com/teenhoclaptrinh" target="_blank" >
                                    <img src="@/assets/images/icon-fb.png" alt="">
                                    <div class="">

                                        <p><span>Fanpage chương trình:</span></p>
                                        <p>https://www.facebook.com/teenhoclaptrinh</p>

                                    </div>
                                </a>
                            </div>
                            <div class="item_ly9">
                                <a href="https://www.facebook.com/groups/tuduythoidaiso.hocmai.vn " target="_blank">

                                    <img src="@/assets/images/icon-group.png" alt="">
                                    <div class="">
                                        <p><span>Group Cộng đồng học viên chương trình Tư duy thời đại số:</span></p>
                                        <p>https://www.facebook.com/groups/tuduythoidaiso.hocmai.vn</p>
                                    </div>
                                </a>

                            </div>
                            <div class="item_ly9">
                                <a href="">
                                    <img src="@/assets/images/icon-phone.png" alt="">
                                    <div class="">
                                        <p><span>Hotline: </span>0966.588.860</p>
                                    </div>
                                </a>
                            </div>
                            <div class="item_ly9">
                                <a href="">
                                    <img src="@/assets/images/icon-mail.png" alt="">
                                    <div class="">
                                        <p><span>Email: </span>tuduythoidaiso@hocmai.vn</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </b-col>
                    <b-col lg="6" class="order_1">
                        <a href="https://www.facebook.com/teenhoclaptrinh " target="_blank">
                            <img class="img_group" src="@/assets/images/img-group.png" alt="">
                        </a>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <section id="footer">
            <b-container>
                <b-row>
                    <b-col lg="6">
                        <nav class="nav_footer_left">
                            <ul>
                                <li><a @click="goto('layout2')">Giới thiệu</a></li>
                                <li><a @click="goto('layout5')">Thể lệ</a></li>
                                <li><a @click="goto('layout7')">Giải thưởng</a></li>
                            </ul>
                        </nav>
                        <p>copyright &#169; hocmai.vn</p>
                    </b-col>
                    <b-col lg="6">
                        <div class="">
                            <nav class="nav_footer_right">
                                <ul class="list-unstyled">
                                    <li><a href="" @click="goto('layout1')"><img src="@/assets/images/logo-hocmai.png"
                                                alt=""></a></li>
                                    <li><a href=""><img src="@/assets/images/social.png" alt=""></a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="box_download">
                            <a href="https://app.adjust.com/eol2fdv?campaign=WTD_Mobile_Web&adgroup=WTD_Mobile_Web&creative=WTD_Mobile_Web" target="_blank">
                                <img src="@/assets/images/download-chplay.png" alt="">
                            </a>
                            <a href="https://app.adjust.com/eol2fdv?campaign=WTD_Mobile_Web&adgroup=WTD_Mobile_Web&creative=WTD_Mobile_Web" target="_blank">
                                <img src="@/assets/images/download-appstore.png" alt="">
                            </a>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <div v-if="showModalSelectTeam && checkTime == false" class="modal_select_team">
            <transition name="modal">
                <div>
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <div class="modal-body">
                                <slot name="body">
                                    <div class="title_modal">Vui lòng cho chúng tôi biết bạn dự thi theo cá nhân hay
                                        theo nhóm?</div>
                                    <div class="form_select_team">
                                        <div class="form-check" @click="checkSelectTeam('member')">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                            <label class="form-check-label" for="exampleCheck1">Cá nhân</label>
                                        </div>
                                        <div class="form-check" @click="checkSelectTeam('team')">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck2">
                                            <label class="form-check-label" for="exampleCheck2">Nhóm</label>
                                        </div>
                                    </div>

                                </slot>
                            </div>
                            <div class="modal-footer">
                                <slot name="footer">
                                    <img class="d-lg-block d-none" src="@/assets/images/bg-form-register.png" alt="">
                                    <img class="d-lg-none d-block" src="@/assets/images/bg-form-mb.png" alt="">
                                </slot>
                            </div>
                        </div>
                    </div>
                    <div class="modal-mask" @click="showModalSelectTeam = false"></div>
                </div>
            </transition>
        </div>
        <div v-if="showModalMember" class="modal_member">
            <transition name="modal">
                <div>
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <div class="btn_close_modal" @click="showModalMember = false">
                                <img src="@/assets/images/icon-close.png" alt="">
                            </div>
                            <div class="modal-body">
                                <slot name="body">

                                    <div class="title_modal">Để đăng ký vào thi, bạn vui lòng điền các thông tin sau:
                                    </div>
                                    <div class="form_member">
                                        <p class="title_more_form">(*) Là những thông tin bắt buộc mà bạn phải điền</p>
                                        <b-form @submit="onSubmit">
                                            <b-form-group id="input-group-1" label-for="input-1">
                                                <b-form-text>Họ và tên<span>*</span></b-form-text>
                                                <b-form-input id="input-1" v-model="userInfo.name" :state="nameState" name="name"
                                                    ref="name" placeholder="Nhập thông tin của bạn" required>
                                                </b-form-input>
                                            </b-form-group>
                                            <b-form-invalid-feedback :state="nameState">Bạn vui lòng nhập họ và tên</b-form-invalid-feedback>
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
                                                <b-form-text>Tỉnh (thành)<span>*</span></b-form-text>
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
                                            <p class="text_info_form">Đây là thông tin bạn đăng kí dự thi, hãy chắc chắn
                                                thông tin này là chính
                                                xác để hỗ trợ cho việc liên hệ thông báo kết quả và tặng quà.
                                                <br>
                                                (*) Khi bấm vào Tôi đồng ý, bạn chắc chắn đã đọc và đồng ý với Chính
                                                sách bảo mật, Điều khoản dịch vụ và chính sách tư vấn của HOCMAI.</p>
                                                <b-form-group id="input-group-2" label-for="input-2">
                                                    <b-form-checkbox name="accept" ref="accept" :state="acceptState" v-model="accept" >
                                                        <b-form-text>Tôi đã đọc và đồng ý với
                                                        các điều khoản</b-form-text>
                                                    </b-form-checkbox>
                                                    <b-form-invalid-feedback :state="acceptState">Bạn vui lòng đồng ý với các điều khoản
                                            </b-form-invalid-feedback>
                                                </b-form-group>
                                            <!-- <div class="form-check">
                                                <input type="checkbox" class="form-check-input" id="checkbox3">
                                                <label class="form-check-label" for="checkbox3">Tôi đã đọc và đồng ý với
                                                    các điều khoản</label>
                                            </div> -->
                                            <div class="d-flex justify-content-center button-pg1 ">
                                                <b-button class="submit_form_register" @click="pushContactMember()">ĐĂNG
                                                    KÝ</b-button>
                                            </div>
                                        </b-form>
                                    </div>

                                </slot>
                            </div>
                            <div class="modal-footer">
                                <slot name="footer">
                                    <img class="d-lg-block d-none" src="@/assets/images/bg-form-register.png" alt="">
                                    <img class="d-lg-none d-block" src="@/assets/images/bg-form-mb.png" alt="">
                                </slot>
                            </div>
                        </div>
                    </div>
                    <div class="modal-mask" @click="showModalMember = false"></div>
                </div>
            </transition>
        </div>
        <div v-if="showModalTeam" class="modal_team">
            <transition name="modal">
                <div>
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <div class="btn_close_modal" @click="showModalTeam = false">
                                <img src="@/assets/images/icon-close.png" alt="">
                            </div>
                            <div class="modal-body">
                                <slot name="body">
                                    <div class="title_modal">Để đăng ký vào thi, bạn vui lòng điền các thông tin sau:
                                    </div>
                                    <p class="title_more_form">(*) Là những thông tin bắt buộc mà bạn phải điền</p>
                                    <div class="d-lg-block d-none">
                                        <b-form @submit="onSubmit" class="">
                                            <div class="form_team">

                                                <div class="form_team_left">
                                                    <p class="title_form">Thông tin trưởng nhóm</p>
                                                    <b-form-group id="input-group-1" label-for="input-1">
                                                        <b-form-text>Họ và tên<span>*</span></b-form-text>
                                                        <b-form-input id="input-1" v-model="userInfo.name" :state="nameState"
                                                            name="name" ref="name" placeholder="Nhập thông tin của bạn"
                                                            required>
                                                        </b-form-input>
                                                    </b-form-group>
                                                    <b-form-invalid-feedback :state="nameState">Bạn vui lòng nhập họ và
                                                tên</b-form-invalid-feedback>
                                                    <b-form-group id="input-group-4" label-for="input-2">
                                                        <b-form-text>Email<span>*</span></b-form-text>
                                                        <b-form-input id="input-2" v-model="userInfo.email" name="email"
                                                            ref="email" :state="emailState"
                                                            placeholder="Nhập thông tin của bạn" required>
                                                        </b-form-input>
                                                    </b-form-group>
                                                    <b-form-invalid-feedback :state="emailState">{{errEmail1}}
                                                    </b-form-invalid-feedback>
                                                    <b-form-group id="input-group-3" label-for="input-2">
                                                        <b-form-text>Số điện thoại<span>*</span></b-form-text>
                                                        <b-form-input id="input-2" v-model="userInfo.phone" name="phone"
                                                            ref="phone" :state="phoneState"
                                                            placeholder="Nhập thông tin của bạn" required>
                                                        </b-form-input>
                                                    </b-form-group>
                                                    <b-form-invalid-feedback :state="phoneState">{{errPhone}}</b-form-invalid-feedback>
                                                    <b-form-group id="input-group-2" label-for="input-2">
                                                        <b-form-text>Tuổi<span>*</span></b-form-text>
                                                        <b-form-input id="input-2" v-model="userInfo.age" name="age" ref="age"
                                                            :state="ageState" placeholder="Nhập thông tin của bạn"
                                                            required>
                                                        </b-form-input>
                                                    </b-form-group>
                                                    <b-form-invalid-feedback :state="ageState">{{errAge}}
                                                    </b-form-invalid-feedback>
                                                    <b-form-group id="input-group-2" label-for="input-2">
                                                        <b-form-text>Tỉnh (thành)<span>*</span></b-form-text>
                                                        <b-form-input id="input-2" v-model="userInfo.adress" name="adress"
                                                            ref="adress" :state="addressState"
                                                            placeholder="Nhập thông tin của bạn" required>
                                                        </b-form-input>
                                                    </b-form-group>
                                                    <b-form-invalid-feedback :state="addressState">Bạn vui lòng nhập địa
                                                        chỉ
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

                                                    <b-form-invalid-feedback :state="sexState">Bạn vui lòng chọn giới
                                                        tính
                                                    </b-form-invalid-feedback>
                                                </div>
                                                <div class="form_team_right">
                                                    <p class="title_form">Thông tin của đồng đội</p>
                                                    <b-form-group id="input-group-1" label-for="input-1">
                                                        <b-form-text>Họ và tên<span>*</span></b-form-text>
                                                        <b-form-input id="input-1" v-model="userInfo.namefriend"
                                                            :state="nameStatefriend" name="namefriend" ref="namefriend"
                                                            placeholder="Nhập thông tin của đồng đội" required>
                                                        </b-form-input>
                                                    </b-form-group>
                                                    <b-form-invalid-feedback :state="nameStatefriend">Bạn vui lòng nhập họ và
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
                                                        <b-form-input id="input-2" v-model="userInfo.phonefriend"
                                                            name="phonefriend" ref="phonefriend"
                                                            :state="phoneStatefriend"
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
                                                        <b-form-text>Tỉnh (thành)<span>*</span></b-form-text>
                                                        <b-form-input id="input-2" v-model="userInfo.adressfriend"
                                                            name="adressfriend" ref="adressfriend"
                                                            :state="addressStatefriend"
                                                            placeholder="Nhập thông tin của bạn" required>
                                                        </b-form-input>
                                                    </b-form-group>
                                                    <b-form-invalid-feedback :state="addressStatefriend">Bạn vui lòng
                                                        nhập
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

                                                    <b-form-invalid-feedback :state="sexStatefriend">Bạn vui lòng chọn
                                                        giới
                                                        tính đồng đội
                                                    </b-form-invalid-feedback>

                                                </div>
                                            </div>
                                            <div class="box_endform">
                                                <p class="text_info_form">Đây là thông tin bạn đăng kí dự thi, hãy chắc
                                                    chắn
                                                    thông tin này là chính
                                                    xác để hỗ trợ cho việc liên hệ thông báo kết quả và tặng quà.
                                                    <br>
                                                    (*) Khi bấm vào Tôi đồng ý, bạn chắc chắn đã đọc và đồng ý với Chính
                                                    sách bảo mật, Điều khoản dịch vụ và chính sách tư vấn của HOCMAI.
                                                </p>
                                                <b-form-group id="input-group-2" label-for="input-2">
                                                    <b-form-checkbox name="accept" ref="accept" :state="acceptState" v-model="accept" >
                                                        <b-form-text>Tôi đã đọc và đồng ý với
                                                        các điều khoản</b-form-text>
                                                    </b-form-checkbox>
                                                    <b-form-invalid-feedback :state="acceptState">Bạn vui lòng đồng ý với các điều khoản
                                            </b-form-invalid-feedback>
                                                </b-form-group>
                                                <div class="d-flex justify-content-center button-pg1 ">
                                                    <b-button class="submit_form_register" @click="pushContactTeam()">
                                                        ĐĂNG
                                                        KÝ</b-button>
                                                </div>
                                            </div>
                                        </b-form>
                                    </div>
                                    <div class="d-lg-none d-block">
                                        <b-form @submit="onSubmit" class="">
                                            <b-tabs content-class="mt-3">
                                                <b-tab title="Trưởng nhóm" active>
                                                    <b-form-group id="input-group-1" label-for="input-1">
                                                            <b-form-text>Họ và tên<span>*</span></b-form-text>
                                                            <b-form-input id="input-1" v-model="userInfo.name" :state="nameState"
                                                                name="name" ref="name" placeholder="Nhập thông tin của trưởng nhóm"
                                                                required>
                                                            </b-form-input>
                                                        </b-form-group>
                                                        <b-form-invalid-feedback :state="nameState">Bạn vui lòng nhập họ và tên</b-form-invalid-feedback>
                                                        <b-form-group id="input-group-4" label-for="input-2">
                                                            <b-form-text>Email<span>*</span></b-form-text>
                                                            <b-form-input id="input-2" v-model="userInfo.email" name="email"
                                                                ref="email" :state="emailState"
                                                                placeholder="Nhập thông tin của trưởng nhóm" required>
                                                            </b-form-input>
                                                        </b-form-group>
                                                        <b-form-invalid-feedback :state="emailState">{{errEmail1}}
                                                        </b-form-invalid-feedback>
                                                        <b-form-group id="input-group-3" label-for="input-2">
                                                            <b-form-text>Số điện thoại<span>*</span></b-form-text>
                                                            <b-form-input id="input-2" v-model="userInfo.phone" name="phone"
                                                                ref="phone" :state="phoneState"
                                                                placeholder="Nhập thông tin của trưởng nhóm" required>
                                                            </b-form-input>
                                                        </b-form-group>
                                                        <b-form-invalid-feedback :state="phoneState">{{errPhone}}</b-form-invalid-feedback>
                                                        <b-form-group id="input-group-2" label-for="input-2">
                                                            <b-form-text>Tuổi<span>*</span></b-form-text>
                                                            <b-form-input id="input-2" v-model="userInfo.age" name="age" ref="age"
                                                                :state="ageState" placeholder="Nhập thông tin của trưởng nhóm"
                                                                required>
                                                            </b-form-input>
                                                        </b-form-group>
                                                        <b-form-invalid-feedback :state="ageState">{{errAge}}
                                                        </b-form-invalid-feedback>
                                                        <b-form-group id="input-group-2" label-for="input-2">
                                                            <b-form-text>Tỉnh (thành)<span>*</span></b-form-text>
                                                            <b-form-input id="input-2" v-model="userInfo.adress" name="adress"
                                                                ref="adress" :state="addressState"
                                                                placeholder="Nhập thông tin của trưởng nhóm" required>
                                                            </b-form-input>
                                                        </b-form-group>
                                                        <b-form-invalid-feedback :state="addressState">Bạn vui lòng nhập địa
                                                            chỉ
                                                        </b-form-invalid-feedback>
                                                        <b-form-radio-group ref="sex" v-model="userInfo.sex" :state="sexState"
                                                            class="input-group-5 checkbox-form" label-for="input-2">
                                                            <div class="learn-check custom-control custom-control-inline custom-checkbox"
                                                                style="padding-left: 0px">
                                                                <b-form-text>Giới tính<span>*</span></b-form-text>
                                                            </div>
                                                            <div class="checkbox">
                                                                <b-form-radio value="1">Nam</b-form-radio>
                                                            </div>
                                                            <div class="checkbox">
                                                                <b-form-radio value="2">Nữ</b-form-radio>
                                                            </div>


                                                        </b-form-radio-group>

                                                        <b-form-invalid-feedback :state="sexState">Bạn vui lòng chọn giới
                                                            tính
                                                        </b-form-invalid-feedback>

                                                </b-tab>
                                                <b-tab title="Đồng đội">
                                                    <b-form-group id="input-group-1" label-for="input-1">
                                                            <b-form-text>Họ và tên<span>*</span></b-form-text>
                                                            <b-form-input id="input-1" v-model="userInfo.namefriend"
                                                                :state="nameStatefriend" name="namefriend" ref="namefriend"
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
                                                            <b-form-input id="input-2" v-model="userInfo.phonefriend"
                                                                name="phonefriend" ref="phonefriend"
                                                                :state="phoneStatefriend"
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
                                                            <b-form-text>Tỉnh (thành)<span>*</span></b-form-text>
                                                            <b-form-input id="input-2" v-model="userInfo.adressfriend"
                                                                name="adressfriend" ref="adressfriend"
                                                                :state="addressStatefriend"
                                                                placeholder="Nhập thông tin của đồng đội" required>
                                                            </b-form-input>
                                                        </b-form-group>
                                                        <b-form-invalid-feedback :state="addressStatefriend">Bạn vui lòng
                                                            nhập
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

                                                        <b-form-invalid-feedback :state="sexStatefriend">Bạn vui lòng chọn
                                                            giới
                                                            tính đồng đội
                                                        </b-form-invalid-feedback>
                                                </b-tab>
                                            </b-tabs>
                                            <div class="box_endform">
                                                <p class="text_info_form">Đây là thông tin bạn đăng kí dự thi, hãy chắc
                                                    chắn
                                                    thông tin này là chính
                                                    xác để hỗ trợ cho việc liên hệ thông báo kết quả và tặng quà.
                                                    <br>
                                                    (*) Khi bấm vào Tôi đồng ý, bạn chắc chắn đã đọc và đồng ý với Chính
                                                    sách bảo mật, Điều khoản dịch vụ và chính sách tư vấn của HOCMAI.
                                                </p>
                                                <b-form-group id="input-group-2" label-for="input-2">
                                                    <b-form-checkbox name="accept" ref="accept" :state="acceptState" v-model="accept" >
                                                        <b-form-text>Tôi đã đọc và đồng ý với
                                                        các điều khoản</b-form-text>
                                                    </b-form-checkbox>
                                                    <b-form-invalid-feedback :state="acceptState">Bạn vui lòng đồng ý với các điều khoản
                                            </b-form-invalid-feedback>
                                                </b-form-group>
                                                <div class="d-flex justify-content-center button-pg1 ">
                                                    <b-button class="submit_form_register" @click="pushContactTeam()">
                                                        ĐĂNG
                                                        KÝ</b-button>
                                                </div>
                                            </div>
                                        </b-form>
                                        </div>
                                </slot>
                            </div>
                            <div class="modal-footer">
                                <slot name="footer">
                                    <img class="d-lg-block d-none" src="@/assets/images/bg-form-register.png" alt="">
                                    <img class="d-lg-none d-block" src="@/assets/images/bg-form-mb.png" alt="">
                                </slot>
                            </div>
                        </div>
                    </div>
                    <div class="modal-mask" @click="showModalTeam = false"></div>
                </div>
            </transition>
        </div>
        <div v-if="showModalStartTest" class="modal_start_test">
            <transition name="modal">
                <div>
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <div class="modal-body">
                                <slot name="body">
                                    <div class="title_modal">Sau khi chọn VÀO THI NGAY, bạn chỉ có một lượt thi duy
                                        nhất.<span></span>
                                        Bạn đã sẵn sàng bắt đầu thi ngay chưa?</div>
                                    <div class="content_start_test">
                                        <p>Hãy chắc chắn rằng:</p>
                                        <div class="d-flex align-items-lg-center mb-lg-4 mb-2">
                                            <img src="@/assets/images/stt1.png" alt="">
                                            <p>Bạn đã nắm rõ thể lệ và gợi ý cho 2 phần thi mà bạn sẽ tham gia. Nếu chưa
                                                nắm rõ, bạn có thể đọc thêm thể lệ và gợi ý từ chương trình <a
                                                    href="https://docs.google.com/document/d/1fESf-S3MZ8FNHnYqQsDjgGlpqthIXQxeQpAGuHpAsLI/edit" target="_blank">tại đây.</a></p>
                                        </div>
                                        <div class="d-flex align-items-lg-center  mb-lg-4 mb-2">
                                            <img src="@/assets/images/stt2.png" alt="">
                                            <p>Không có yếu tố nào làm gián đoạn quá trình làm bài và nộp bài của bạn.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="">
                                        <router-link class="submit_start_test" to="/bai-thi">VÀO THI NGAY</router-link>
                                    </div>
                                    <div class="">
                                        <a class="back_page" href="">QUAY LẠI. TÔI SẼ VÀO THI SAU</a>
                                    </div>
                                </slot>
                            </div>
                            <div class="modal-footer">
                                <slot name="footer">
                                    <img class="d-lg-block d-none" src="@/assets/images/bg-form-register.png" alt="">
                                    <img class="d-lg-none d-block" src="@/assets/images/bg-form-mb.png" alt="">
                                </slot>
                            </div>
                        </div>
                    </div>
                    <div class="modal-mask" @click="showModalStartTest = false"></div>
                </div>
            </transition>
        </div>
        <div v-if="showModalError" class="modal_success">
            <transition name="modal" ref="modal_sc" id="modal_sc">
                <div>
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <div class="modal-body">
                                <div class="btn_close_err" @click="showModalError = false">
                                    <img src="@/assets/images/icon-close.png" alt="">
                                </div>
                                <slot name="body">
                                    <img class="icon_bell" src="@/assets/images/icon-bell.png" alt="">
                                    <div>
                                        <p>{{ text_err }}</p>
                                    </div>
                                </slot>
                            </div>
                        </div>
                    </div>
                    <div class="modal-mask" @click="showModalError = false"></div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
    // import { defineComponent } from '@vue/composition-api'
    import carousel from 'vue-owl-carousel'
    // import layoutTest from '@/component/BaiThi.vue'
    export default {
        name: 'home',
        components: {
            carousel,
            // layoutTest
        },
        data() {
            return {
                menus: [{
                    id: 0,
                    value: 'Giới thiệu',
                    goto: 'layout2'
                }, {
                    id: 1,
                    value: 'Thể lệ',
                    goto: 'layout5'
                }, {
                    id: 2,
                    value: 'Giải thưởng',
                    goto: 'layout7'
                }],
                showModalSelectTeam: false,
                showModalMember: false,
                showModalTeam: false,
                showModalError: false,
                showModalStartTest: false,
                userInfo: {
                    name: '',
                    email: '',
                    adress: '',
                    sex: [],
                    phone: '',
                    age: '',
                    namefriend: '',
                    emailfriend: '',
                    adressfriend: '',
                    sexfriend: [],
                    phonefriend: '',
                    agefriend: '',
                },
                accept: '',
                active: false,
                submited: false,
                show: true,
                truetime: false,
                text_err : '',
                errEmail: '',
                errPhone: '',
                errPhonefriend: '',
                errAge : '',
                errAgeFriend : '',
                errEmail1: '',
                checkTime: true

            }
        },
        computed: {
            acceptState(){
                if (!this.submited) {
                    return null
                }
                if (!this.accept){
                    return false
                }else {
                    return true
                }
            },
            nameState() {
               if (!this.submited) {
                    return null
                }
                if (this.userInfo.name.trim().length == '' || !/[A-Z, a-z]/.test(this.userInfo.name) || /[0-9]/.test(this.userInfo.name) || /[!@#$%^&*()_+:".,?|[\]]/.test(this.userInfo.name)) {
                    return false
                } else {
                    return true
                }
            },
            nameStatefriend() {
                if (!this.submited) {
                    return null
                }
                if (this.userInfo.namefriend.trim().length == '' || !/[A-Z, a-z]/.test(this.userInfo.namefriend) || /[0-9]/.test(this.userInfo.namefriend) || /[!@#$%^&*()_+:".,?|[\]]/.test(this.userInfo.namefriend)) {
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

                if (this.userInfo.adress.trim().length == '' || !/[A-Z, a-z]/.test(this.userInfo.adress) || /[0-9]/.test(this.userInfo.adress) || /[!@#$%^&*()_+:".,?|[\]]/.test(this.userInfo.adress)) {
                    return false
                } else {
                    return true
                }
            },
            addressStatefriend() {

                if (!this.submited) {
                    return null
                }

                if (this.userInfo.adressfriend.trim().length == '' || !/[A-Z, a-z]/.test(this.userInfo.adressfriend) || /[0-9]/.test(this.userInfo.adressfriend) || /[!@#$%^&*()_+:".,?|[\]]/.test(this.userInfo.adressfriend)) {
                    return false
                } else {
                    return true
                }
            },

        },
        methods: {
			closeTest(){
                if(this.checkTime ==  true){
                    this.showModalError = true
                    this.text_err = 'Cảm ơn bạn đã tham gia thử thách trực tuyến Công dân thời đại số. Tuy nhiên, cổng đăng ký và dự thi đã chính thức đóng lại vào 0h00 ngày 24/9.';
                }
			},
            checkSelectTeam(select) {
                if (select == 'member') {
                    this.$store.commit('SET_STATUS_MODAL', 'member')
                    this.showModalMember = true
                }
                if (select == 'team') {
                    this.$store.commit('SET_STATUS_MODAL', 'team')
                    this.showModalTeam = true
                }
                this.showModalSelectTeam = false
            },
            addactive(index) {
                this.active = index
            },
            goto(refName) {
                let element = this.$refs[refName];
                let top = element.offsetTop;

                window.scrollTo(0, top);
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
                }else if(age >100){
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
                }else if(age >100){
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
            pushContactMember() {
                this.submited = true
                const trackid = localStorage.getItem('_cdtds_track')
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
                if (!this.userInfo.sex || this.sexState == false) {
                    return false
                }
                if (!this.accept || this.acceptState == false) {
                    this.$refs.accept.focus()
                    return false
                }


                this.$http.post('/track/push-contact',{
                    trackid: trackid,
                    data:{
                        source: document.location.href,
                        name: this.userInfo.name,
                        email: this.userInfo.email,
                        age: this.userInfo.age,
                        phone: this.userInfo.phone,
                        province: this.userInfo.adress,
                        sex: this.userInfo.sex,
                    }
                }).then(res => {
                if (res.data.code === 1) {
                    this.$store.commit('SET_CONTACT_INFO',{
                        id_contact: res.data.data,
                        name: this.userInfo.name,
                        email: this.userInfo.email,
                        age: this.userInfo.age,
                        phone: this.userInfo.phone,
                        adress: this.userInfo.adress,
                        sex: this.userInfo.sex,
                    })
                    localStorage.setItem('cdtdsEmail', this.userInfo.email)
                    localStorage.setItem('statusModal', 'member')
                    this.showModalMember = false
                    this.showModalStartTest = true
                }else{
                    this.text_err = res.data.message;
                    this.showModalError = true
                    this.showModalMember = false
                }
            })
            },
            pushContactTeam() {
                this.submited = true
                const trackid = localStorage.getItem('_cdtds_track')
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
                if (!this.userInfo.sex || this.sexState == false) {
                    return false
                }
                if (!this.userInfo.adress || this.addressState == false) {
                    this.$refs.adress.focus()
                    return false
                }
                // validate team
                if (!this.userInfo.namefriend || this.nameStatefriend == false) {
                    this.$refs.namefriend.focus()
                    return false
                }

                if (!this.userInfo.emailfriend || this.emailStatefriend == false) {
                    this.$refs.emailfriend.focus()
                    return false
                }
                if (!this.userInfo.phonefriend || this.phoneStatefriend == false) {
                    this.$refs.phonefriend.focus()
                    return false
                }
                 if (!this.userInfo.agefriend || this.ageStatefriend == false) {
                    this.$refs.agefriend.focus()
                    return false
                }

                if (!this.userInfo.adressfriend  || this.addressStatefriend == false) {
                    this.$refs.adressfriend.focus()
                    return false
                }
                 if (!this.userInfo.sexfriend  || this.sexStatefriend == false) {
                    this.$refs.sexfriend.focus()
                    return false
                }
                if (!this.accept) {
                    this.$refs.accept.focus()
                    return false
                }
                this.$http.post('/track/push-contact',{
                    trackid: trackid,
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
                        province_2: this.userInfo.adressfriend,
                        sex_2: this.userInfo.sexfriend,
                    }
                }).then(res => {
                if (res.data.code === 1) {
                    this.$store.commit('SET_CONTACT_INFO', {
                        id_contact: res.data.data,
                        name: this.userInfo.name,
                        email: this.userInfo.email,
                        age: this.userInfo.age,
                        phone: this.userInfo.phone,
                        adress: this.userInfo.adress,
                        sex: this.userInfo.sex,
                        namefriend: this.userInfo.namefriend,
                        emailfriend: this.userInfo.emailfriend,
                        agefriend: this.userInfo.agefriend,
                        phonefriend: this.userInfo.phonefriend,
                        addressfriend: this.userInfo.adressfriend,
                        sexfriend: this.userInfo.sex,
                    })
                    localStorage.setItem('cdtdsEmail', this.userInfo.email)
                    localStorage.setItem('statusModal', 'team')
                    this.showModalTeam = false
                    this.showModalStartTest = true
                }else{
                    this.text_err = res.data.message;
                    this.showModalError = true
                    this.showModalTeam = false
                }

            })
            }
        },
       
    };
</script>
<style scoped></style>
<style scoped>
    @import "../assets/css/main.css";
</style>