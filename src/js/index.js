// //不可以修改分辨率
// //luwenjie hualun
// window.addEventListener('mousewheel', function (event) {
//     if (event.ctrlKey === true || event.metaKey) {
//         event.preventDefault();
//     }
// }, { passive: false });

// //firefox
// window.addEventListener('DOMMouseScroll', function (event) {
//     if (event.ctrlKey === true || event.metaKey) {
//         event.preventDefault();
//     }
// }, { passive: false });
// //+_
// window.onload = function () {
//     document.addEventListener('keydown', function (event) {
//         if ((event.ctrlKey === true || event.metaKey === true)
//             && (event.which === 61 || event.which === 107
//                 || event.which === 173 || event.which === 109
//                 || event.which === 187 || event.which === 189)) {
//             event.preventDefault();
//         }
//     }, false);
// }
console.log('aa');
//公共头部
$('.sLogo').load('./html/header.html .logo', () => {
    // $('.logo').css(`width: 296px;
    // height: 49px;
    // margin-right: 94px;
    // padding-top: 31px;
    // float: left;
    // background-color: #878787;`)
});
//proList滑动效果
let $porlist = $('.proList');
$porlist.each((index, value) => {
    $(value).hover(() => {
        $porlist.removeClass("active")
        $(value).addClass('active')
    })
})
// 倒计时效果
let timer = null;
let $o_hours = $('.hours');
let $o_minute = $('.minute');
let $o_second = $('.second')
function daoJiahi() {
    let n_date = new Date();
    let l_date = new Date('2022,9,30');
    let n_time = n_date.getTime();
    let l_time = l_date.getTime();
    let time = l_time - n_time;

    let minus = Math.floor(time / 1000);
    let day = (Math.floor(minus / 60 / 60 / 24)) < 10 ? '0' + Math.floor(minus / 60 / 60 / 24) : Math.floor(minus / 60 / 60 / 24);
    let hours = (Math.floor((minus - day * 24 * 60 * 60) / 60 / 60)) < 10 ? '0' + Math.floor((minus - day * 24 * 60 * 60) / 60 / 60) : Math.floor((minus - day * 24 * 60 * 60) / 60 / 60)
    let minutes = (Math.floor((minus - day * 24 * 60 * 60 - hours * 60 * 60) / 60)) < 10 ? '0' + Math.floor((minus - day * 24 * 60 * 60 - hours * 60 * 60) / 60) : Math.floor((minus - day * 24 * 60 * 60 - hours * 60 * 60) / 60);
    let seconds = (minus % 60) < 10 ? '0' + (minus % 60) : (minus % 60);
    $o_hours.text(hours);
    $o_minute.text(minutes);
    $o_second.text(seconds);
    // console.log(day + ' ' + hours + ' ' + minutes + ' ' + seconds)
}
timer = setInterval(daoJiahi, 5);


//倒计时里面的书
let $timelist = $('.timelist')
$.get('data/book.json', (data) => {
    $timelist.each((index, value) => {
        let id = $(value).attr('id');
        let $img = $(value).children().children('img');
        let $name = $(value).children().children('p');
        let $skill = $(value).children().children().children('.skill')
        let $price = $(value).children().children().children('.origin').children()
        $img.attr("src", data[id].src + '.jpg');
        $name.text(data[id].name);
        $skill.text(data[id].price);
        $price.text(data[id].o_price)

    })

})
//每日精选切换
let $line = $('#select .line');
let $tabList = $('#select .tabList');
let $tabCon = $('.tabCon');
let $id = $('#select .conList').attr('id');
console.log($id.length)
$tabList.each((index, value) => {
    $(value).hover(() => {
        let $num = (($(value).attr('date-tab')[3]) - 1) * 100;
        // console.log($num);
        let that = $(value);
        $line.css("left", `${$num}px`);
        $($tabCon).each((index, value) => {
            $(value).attr('style', 'display: none');
            if ($(value).attr('tab') === `${that.attr('date-tab')}`) {
                $(value).attr('style', 'display: block');
                $.get('data/book.json', (data) => {
                    let $conList = $(value).children('.keyCon').children('.conList');
                    $conList.each((index, value) => {
                        let $id = $(value).attr('id');
                        let $img = $(value).children().children('.img').children().children();
                        let $name = $(value).children().children('.name').children();
                        let $author = $(value).children().children('.author');
                        let $lprice = $(value).children().children('.price').children('.lprice');
                        let $rprice = $(value).children().children('.price').children('.rprice');
                        $img.attr('src', data[$id].src + '.jpg');
                        $name.text(data[$id].name);
                        $author.text(data[$id].writer);
                        $lprice.text(data[$id].price);
                        $rprice.text(data[$id].o_price)
                    })
                })
            }
        })
    })
})
//文轩聚焦
let $conList = $('#focus .conList')
$.get('data/book.json', (data) => {
    $conList.each((index, value) => {
        let $id = $(value).attr('id');
        let $img = $(value).children().children('.img').children().children();
        let $name = $(value).children().children('.name').children();
        let $author = $(value).children().children('.author');
        let $lprice = $(value).children().children('.price').children('.lprice');
        let $rprice = $(value).children().children('.price').children('.rprice');
        $img.attr('src', data[$id].src + '.jpg');
        $name.text(data[$id].name);
        $author.text(data[$id].writer);
        $lprice.text(data[$id].price);
        $rprice.text(data[$id].o_price)

    })

})
//作家推荐
let $tabLists = $('#author .tabList');
let $lines = $('#author .line');
let $cList = $('#author .cList');
$tabLists.each((index, value) => {
    $(value).on("mouseenter", () => {

        let $num = (($(value).attr('data-tab')[3]) - 1) * 100;
        $lines.css("left", `${$num}px`);
        let that = $(value);
        $cList.each((index, value) => {
            $(value).attr('style', 'display: none');
            if ($(value).attr('tab-id') === `${that.attr('data-tab')}`) {
                $(value).attr('style', 'display: block');
                $.get('data/book.json', (data) => {
                    let name = $(value).children().children('.intro').children().children().text();
                    let cBook = $(value).children('.cBook').children();
                    let bookName = $(value).children('.cBook').children().children().children('.name').children().text()
                    let photo = $(value).children('.cAuthor').children('.img').children().children()
                    let info = $(value).children('.cAuthor').children('.intro').children('.info')
                    // console.log(name);
                    console.log(photo)
                    for (let k in data) {
                        //判断作家
                        if ('compellation' in data[k]) {
                            if (data[k].compellation == name) {
                                photo.attr('src', data[k].src + '.png');
                                info.text(data[k].introduce)
                            }
                        }
                        //判断书籍
                        if ('writer' in data[k]) {
                            if (data[k].writer.includes(name)) {
                                console.log(data[k]);
                                if (!(bookName.includes(data[k].name))) {
                                    cBook.append(`
                                <li>
                                <div class="img">
                                    <a href="#">
                                        <img src=${data[k].src}.jpg alt="">
                                    </a>
                                </div>
                                <div class="name">
                                    <a href="#">${data[k].name}</a>
                                </div>
                                <div class="price">
                                    <span class="lprice">${data[k].price}</span>
                                    <span class="rprice">${data[k].o_price}</span>
                                </div>
                            </li>
                                `)
                                }


                            }

                        }


                    }
                })
            }

        })
    })
})
//音响切换
let $tabs = $('#public').children('.tit').children('span');
let $con = $('#public').children('.con')
// console.log($tabs)
$tabs.each((index, value) => {
    $(value).hover(() => {
        $tabs.css("color", "#999");
        $con.attr("style", "display:none")
        let tname = $(value).attr('tab');
        $(value).css({ "color": "#333" })
        $con.each((index, value) => {

            if ($(value).attr('tab-id') == tname) {
                $(value).attr("style", "display:block")
            }
        })
    })
})

//共同底部
$('footer').load('./html/public.html #public_footer', () => {
});

//侧边导航
//鼠标点击
var mark = 1;
$("#sideNav .maodian .item").click(function () {
    // console.log('kk')
    mark = 2; //改变标记
    $("#sideNav .maodian .item").css('background-color', '#636263')
    $(this).css('background-color', '#D52C27');
    //点击左边导航 然后跳到指定的楼层
    var $index = $(this).index(); //找到了对应的序列号
    //alert($index);
    var $top = $(".modul").eq($index).offset().top; //获取制定Louti与浏览器上面的距离
    //alert($top);
    $("body,html").animate({
        scrollTop: $top
    }, 500, function () {
        mark = 1;
    }); //浏览器滚动的高度
});

//浏览器窗口滚动事件
$(window).scroll(function () {
    if (mark == 1) {
        var $t = $(this).scrollTop(); //获取滚动条滚动的高度
        //document.title = $t;
        if ($t > 1000) { //通过滚动条来判断
            $("#sideNav").fadeIn("fast"); //淡入 导航慢慢显示出来
        } else {
            $("#sideNav").fadeOut("fast"); //淡出 导航慢慢消失
        }
        var $obj = $("#page .modul");
        //循环每一个Louti 然后找到最先满足条件的那个 Louti
        $obj.each((index, value) => {
            // var $index = $(this).index();
            //楼层与浏览器上面的高度
            var $height = $obj.eq(index).offset().top + $(value).height() / 2
            // console.log($height)
            //alert($height)
            //document.title = $t + "--" + $height;
            if ($t < $height) {
                $("#sideNav .maodian .item").css('background-color', '#636263')
                $("#sideNav .maodian .item").eq(index).css('background-color', '#D52C27');
                return false;
            }
        });
    }
});

//吸顶效果
let $header = $('header');
let $top = $('#top');
let $toTop = $('#toTop')
$(window).scroll(function () {
    //顶部
    if ($(this).scrollTop() > 200) {
        $header.css({ "position": "fixed", "top": 0, "z-index": 2000 })
        //
        $top.fadeIn("10", function () {
            $top.css({ "display": "block", "position": "fixed", "top": "36px", "z-index": 2000 })
        })
    }
    else {
        $header.css({ "position": "static", "top": 0, "z-index": 1000 })
        // $top.css({ "display": "none", "position": "absolute", "top": "-70px", "z-index": 1000 })
        $top.fadeOut()
    }

})
//侧边栏
let s_nav = $('#sideNav');
let s_totop = $('#toTop')
// window.onload = function () {
console.log($(s_nav).get(0))
var win = window.innerWidth;
$(s_nav).get(0).style.left = (win - 1200) / 2 - 80 + 'px';
$(s_totop).get(0).style.right = (win - 1200) / 2 - 100 + 'px';
// }
window.onresize = function () {
    var win = window.innerWidth;
    $(s_nav).get(0).style.left = (win - 1200) / 2 - 80 + 'px';
    $(s_totop).get(0).style.right = (win - 1200) / 2 - 100 + 'px';
}
$(window).scroll(function () {
    //顶部
    if ($(this).scrollTop() > 200) {
        s_totop.css({ "display": "block" })
    }
    else {
        s_totop.css({ "display": "none" })
    }

})

//获取cookie
function convertStrToObj(str) {
    if (!str) {
        return ""
    }
    return JSON.parse(str)
}
let cookie_Str = $.cookie('user') ? $.cookie('user') : '';
console.log(cookie_Str)
//转为对象
let cookie_Obj = convertStrToObj(cookie_Str);
console.log(cookie_Obj.user.username)
if (cookie_Obj.user.username) {
    $('.login').children().detach();
    $('.login').text(`${cookie_Obj.user.username}`)
}
