let now_playing = document.querySelector('.current-play')
let song_banner = document.querySelector('.song-banner');
let song_name = document.querySelector('.song-name');
let song_artist = document.querySelector('.song-artist');

let play_pause_button = document.querySelector('.play-pause-song')
let next_button = document.querySelector('.next-song');
let prev_button = document.querySelector('.prev-song');

let time_change_slider = document.querySelector('.time-change-slider');
let volume_slider = document.querySelector('.volume-slider');
let current_time = document.querySelector('.current-time');
let total_time = document.querySelector('.total-time');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let repeatIcon = document.querySelector('.fa-repeat');
let current_song = document.createElement('audio');

let song_index = 0;
let prev_song_index = 0;
let isPlaying = false;
let isRandom = false;
let isRepeat = false;
let updateTimer;

let artis_info_wrapper = document.getElementById("artist-info-wrapper");
let song_description_wrapper = document.getElementById("song-description-wrapper");

let playlist = document.getElementById("playlist-wrapper");
const music_list = [
    //akmed
    {
        img: 'images/akmed.jpg',
        name: '"AKMED"',
        artist: 'KLG, Yang E',
        music: 'musics/akmed_klg_yange.mp3',
        artist_list: [
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
            {
                artist_name:'Yang E',
                imgsrc:'images/yange.jpg'
            },
        ],
        description: [
            {line: 'Song: "AKMED"'},
            {line: '———————————'},
            {line: 'Produce: Tú'},
            {line: 'Compose: Yang E, KLG'},
            {line: 'Mix: Yang E'},
            {line: 'Master: Minh Gao'},
            {line: 'Artwork & Banner: WEIASEC'},
            {line: '———————————'},
            {line: 'Released: 2021'},
            {line: 'EP: "You Treat Me Bad"'},
            {line: '"Anh không muốn nước mắt em thấm trên mi..'},
            {line: '... muốn một lần lại được nắm tay em à"'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {
                line:'Not Available.'
            },
        ]
    },

    //Asime
    {
        img: 'images/asime.jpg',
        name: 'ASIME',
        artist: 'KLG, L’Amore, Louies, Wildde',
        music: 'musics/asime_klg_lamour_wildde_louies.mp3',
        artist_list: [
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
            {
                artist_name:'L’Amore',
                imgsrc:'images/lamour.jpg'
            },
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            }
        ],
        description: [
            {line: 'Song: ASIME'},
            {line: '———————————'},
            {line: 'Produce: Beat BT '},
            {line: 'Mix & Master: KLG'},
            {line: 'Artwork & Banner: WEIASEC'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: '"Shh..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {
                line:'Not Available.'
            },
        ]
    },

    //askdtec
    {
        img: 'images/anhsekhocdethayemcuoi.jpg',
        name: '"askdtec"',
        artist: 'KLG, Chillingo, JayMou',
        music: 'musics/anhsekhocdethayemcuoi_klg_chillingo_jaymou.mp3',
        artist_list: [
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },
            {
                artist_name:'JayMou',
                imgsrc:'images/jaymou.jpg'
            }
        ],
        description: [
            {
                line: 'Song: Anh sẽ khóc để thấy em cười'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: Jayden '
            },
            {
                line: 'Mix & Master: KLG'
            },
            {
                line: 'Written by KLG, Chillingo, Jay Mou'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2018'
            },
            {
                line: '"Just let me kiss you one more..."'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line:'Anh sẽ khóc để giữ lấy nụ cười trên môi em'
            },
            {
                line:'Vì anh ta xứng đáng hơn'
            },
            {
                line:'những tình yêu mà Khôi đem'
            },
            {
                line:'Lê chân bước phía bóng tối, nhìn bầu trời chia đôi'
            },
            {
                line:'Sau tất cả mọi cố gắng, để thấy em cùng người kia thôi'
            },
            {
                line:'Thời gian sẽ nói cho anh thấu ngày dài ra sao'
            },
            {
                line:'Những ngày tháng anh có em chỉ còn là chiêm bao'
            },
            {
                line:'Anh chỉ ước mình được giống như hàng vạn câu ca'
            },
            {
                line:'Nơi em đến sẽ không còn buồn'
            },
            {
                line:'và hàng vạn phong ba'
            },
            {
                line:'Chỉ để được thấy ánh mắt ấy chất chứa niềm vui'
            },
            {
                line:'Và mọi buồn phiền buồn đau,'
            },
            {
                line:'anh gánh lấy trên môi nụ cười'
            },
            {
                line:'Không còn nhiều những dòng nước mắt'
            },
            {
                line:'Rớt xuống ướt hết đôi hàng mi'
            },
            {
                line:'Để khi mà anh rời đi em mới có thể nở nụ cười'
            },
            {
                line:'Baby girl, just let me kiss you one more time'
            },
            {
                line:'And love you one more day'
            },
            {
                line:'eventhough im not okay,'
            },
            {
                line:'things are turning grey'
            },
            {
                line:'Chuyện tình ta nhạt dần nhạt dần'
            },
            {
                line:'Không còn điệu còn vần'
            },
            {
                line:'Nhạc tình yêu giờ chẳng còn cầ'
            },
            {
                line:'All I need is gun...'
            },
            {
                line:'Có you everynight...'
            },
            {
                line:'Even though you told break up'
            },
            {
                line:'Because you in my mind'
            },
            {
                line:'Hope you will be alright'
            },
            {
                line:'Eventhough I know I cry,'
            },
            {
                line:'But I know you will smile'
            },
            {
                line:'Chỉ mong một ngày nào rồi anh cũng sẽ quên'
            },
            {
                line:'Và rồi, em cũng sẽ kiếm được một người nào'
            },
            {
                line:'mà em đang cần'
            },
            {
                line:'Để hai con tim cuối cùng cũng kiếm'
            },
            {
                line:'được bầu trời bình yên'
            },
            {
                line:'Để chỉ khi anh rời đi em mới có thể nở nụ cười'
            },
            {
                line:'Anh sẽ khóc để giữ lấy nụ cười trên môi em'
            },
            {
                line:'Vì anh ta xứng đáng hơn'
            },
            {
                line:'những tình yêu mà Khôi đem'
            },
            {
                line:'Lê chân bước phía bóng tối, nhìn bầu trời chia đôi'
            },
            {
                line:'Sau tất cả mọi cố gắng, để thấy em cùng người kia thôi'
            },
            {
                line:'Thời gian sẽ nói cho anh thấu ngày dài ra sao'
            },
            {
                line:'Những ngày tháng anh có em chỉ còn là chiêm bao'
            },
            {
                line:'Anh chỉ ước mình được giống như hàng vạn câu ca'
            },
            {
                line:'Nơi em đến sẽ không còn buồn'
            },
            {
                line:'và hàng vạn phong ba'
            },
            {
                line:'Another day, passing by'
            },
            {
                line:'Say Im okay, everything is still alright'
            },
            {
                line:'Đứng từ xa, nhìn em đi cùng bao chàng trai'
            },
            {
                line:'Đêm nay vu vơ, trôi qua thật là dài'
            },
            {
                line:'Anh có những điểm chưa tốt'
            },
            {
                line:'Không tuyệt như người ta'
            },
            {
                line:'How to let you go'
            },
            {
                line:'Nhưng anh không muốn em rời xa'
            },
            {
                line:'Những vết thương hằn sâu'
            },
            {
                line:'Anh chỉ vứt hết trong lời ca'
            },
            {
                line:'Though, I feel alone'
            },
            {
                line:'Nhưng em biết anh không nói ra...'
            },
            {
                line:'Anh sẽ khóc để giữ lấy nụ cười trên môi em'
            },
            {
                line:'Bởi những niềm đau, anh đã giữ riêng mình suốt bao đêm'
            },
            {
                line:'Thêm một phút'
            },
            {
                line:'có lẽ chắc cũng ổn thôi'
            },
            {
                line:'Vì anh vẫn muốn em có nụ cười trên môi'
            }
        ]
    },

    //back2dagame
    {
        img: 'images/back2dagame.jpg',
        name: 'BACK2DAGAME',
        artist: 'Wansentai, Strange H (Explicit)',
        music: 'musics/back2dagame_wansentai_strangeh.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Strange H',
                imgsrc:'images/strangeh.jpg'
            },
        ],
        description: [
            {line: 'Song: BACK2DAGAME'},
            {line: '———————————'},
            {line: 'Produce: Jayden'},
            {line: 'Mix & Master: Jayden'},
            {line: 'Recording: VOK Records '},
            {line: 'Artwork & Banner: Wansentai'},
            {line: '———————————'},
            {line: 'Released: 2021'},
            {line: 'Explicit.'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {
                line:'Not Available.'
            },
        ]
    },


    //bemylover
    {
        img: 'images/bemylover.jpg',
        name: 'Be my lover',
        artist: 'Wansentai, Harmonie',
        music: 'musics/bemylover_wansentai_harmonie.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Harmonie',
                imgsrc:'images/harmonie.jpg'
            },
        ],
        description: [
            {line: 'Song: Be my lover'},
            {line: '———————————'},
            {line: 'Melody written by Kym'},
            {line: 'Mix & Master: VOK Records'},
            {line: 'Artwork & Banner: Wansentai'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: '"Oh you should be my lover...'},
            {line: '... Oh you should be"'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Oh you should be my lover'},
            {line: 'Cũng nhau chạm vào từng giấc mơ'},
            {line: 'Oh you should be my lover'},
            {line: 'Bàn tay đan chặt mình hát lên'},
            {line: 'Oh you should be my lover'},
            {line: 'Đừng lo vì em luôn ở bên'},
            {line: 'Oh you should be my lover'},
            {line: 'Oh you should be'},
            {line: 'Oh you should be my lover'},
            {line: 'Cũng nhau chạm vào từng giấc mơ'},
            {line: 'Oh you should be my lover'},
            {line: 'Bàn tay đan chặt mình hát lên'},
            {line: 'Oh you should be my lover'},
            {line: 'Đừng lo vì em luôn ở bên'},
            {line: 'Oh you should be my lover'},
            {line: 'Oh you should be'},
            {line: 'Hello'},
            {line: 'Please pick up your phone'},
            {line: 'Common baby pick up me too'},
            {line: 'Ta vượt qua đại dương'},
            {line: 'Vượt qua trời cao vào dãy ngân hà'},
            
            {line: 'Want to be the one'},
            {line: 'Only just for you'},
            
            {line: 'You should be my lover'},
            {line: 'You should be my lover'},
            
            {line: 'Oh'},
            {line: 'Hold my hand and be with me tonight'},
            {line: 'One two three hour feel like century'},
            {line: 'Oh boy'},
            {line: 'I love myself when im with you'},
            {line: 'And oh boy'},
            {line: 'I just want you for my own'},
            {line: 'Xin em đừng là ciderella ah'},
            {line: 'Vì anh ko muốn lạc em giữa đêm'},
            {line: 'Xin em đừng là nàng bạch tuyết'},
            {line: 'Đừng ngủ chỉ 1 mình phải có anh ở bên'},
            
            {line: 'So'},
            {line: 'Be mah queen be mah queen'},
            {line: 'Ko ví em như công chúa vì em là hoàng hậu'},
            {line: 'Be mah queen be mah queen'},
            {line: 'Gặp em tim anh game over từ khi mới màn đầu'},
            {line: 'Oh you should be my lover'},
            {line: 'Cũng nhau chạm vào từng giấc mơ'},
            {line: 'Oh you should be my lover'},
            {line: 'Bàn tay đan chặt mình hát lên'},
            {line: 'Oh you should be my lover'},
            {line: 'Đừng lo vì em luôn ở bên'},
            {line: 'Oh you should be my lover'},
        ]
    },

    //bietdausaunay
    {
        img: 'images/bietdausaunay.jpg',
        name: 'Biết đâu sau này',
        artist: 'Custhekid, Kymm',
        music: 'musics/bietdausaunay_custhekid_kymm.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Kymm',
                imgsrc:'images/kymm.jpg'
            },
        ],
        description: [
            {
                line: 'Song: Biết đâu sau này'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: Jayden'
            },
            {
                line: 'Composer: Kym & Custhekid'
            },
            {
                line: 'Mix & Master: KLG'
            },
            {
                line: 'Artwork & Banner: Custhekid & Nhi'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2022'
            },
            {
                line: '"Biết đâu sau này, ta đường xa mà về chung lối..."'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line:'Khi một mai lỡ em già'
            },
            {
                line:'Rằng anh cũng sẽ dần quên em thôi'
            },
            {
                line:'Rằng đầu em sẽ xác xơ'
            },
            {
                line:'Chẳng còn trông giống xưa đâu'
            },
            {
                line:'Hôm nay buổi sáng thức giấc em dậy, chẳng già nua nhưng không có anh ở đây?'
            },
            {
                line:'Rằng liệu anh có nhớ em, liệu anh có nhớ em không vậy?'
            },
            {
                line:'Biết đâu sau này ở một nơi rất xa, ta sẽ xây 3 căn nhà nuôi thêm một bầy nhóc nha'
            },
            {
                line:'Em sẽ không hay quên rằng'
            },
            {
                line:'Hỏi anh mỗi đêm'
            },
            {
                line:'Không phải là em anh sẽ tìm ở đâu đây?'
            },
            {
                line:'Biết đâu sau này sau màn hình rất xa,'
            },
            {
                line:'Anh đến bên ôm em và cầm một đoá hoa'
            },
            {
                line:'Dù thời gian trôi, vẫn sẽ là anh thôi anh ơi'
            },
            {
                line:'Biết đâu sau này, ta đường xa mà về chung lối'
            },
            {
                line:'Biết đâu sau này, yêu mình anh và chỉ anh thôi'
            },
            {
                line:'Biết đâu sau này, em thường cười 1 mình là vì'
            },
            {
                line:'Ta sẽ của riêng nhau'
            },
            {
                line:'Bởi vì anh khá chắc, tình yêu đâu hẳn ngọt ngào'
            },
            {
                line:'Nhưng vì anh phá phách, trái tim em lỡ lọt vào'
            },
            {
                line:'Em thì thông thường hay tạo nét'
            },
            {
                line:'Nhưng đó là thương hay là ghét'
            },
            {
                line:'Rồi sẽ cùng đón ánh ban mai và'
            },
            {
                line:'Đón những giọt sương khi trời rét'
            },
            {
                line:'Gặp em thì chắc chắn là duyên'
            },
            {
                line:'Cưới anh mong không coi là nợ'
            },
            {
                line:'Nợ gì vừa xấu lại còn điên'
            },
            {
                line:'Nhưng mong được kêu em là vợ'
            },
            {
                line:'Biết đâu sau này sẽ lại là như thế'
            },
            {
                line:'Biết đâu sau này nhà không còn dư ghế'
            },
            {
                line:'Biết đâu sau này trong lòng em sẽ yên tâm'
            },
            {
                line:'Thức dậy mỗi ngày khi đã là của riêng anh'
            },
            {
                line:'Biết đâu sau này ở một nơi rất xa, ta sẽ xây 3 căn nhà nuôi thêm một bầy nhóc nha'
            },
            {
                line:'Em sẽ không hay quên rằng'
            },
            {
                line:'Hỏi anh mỗi đêm'
            },
            {
                line:'Không phải là em anh sẽ tìm ở đâu đây?'
            },
            {
                line:'Biết đâu sau này sau màn hình rất xa,'
            },
            {
                line:'Anh đến bên ôm em và cầm một đoá hoa'
            },
            {
                line:'Dù thời gian trôi, vẫn sẽ là anh thôi anh ơi'
            },
            {
                line:'Biết đâu sau này, ta đường xa mà về chung lối'
            },
            {
                line:'Biết đâu sau này, yêu mình anh và chỉ anh thôi'
            },
            {
                line:'Biết đâu sau này, em thường cười 1 mình là vì'
            },
            {
                line:'Ta sẽ của riêng nhau'
            },
            
        ]
    },

    //bonhauphiasau
    {
        img: 'images/bonhauphiasau.jpg',
        name: 'Bỏ nhau phía sau',
        artist: 'VOK',
        music: 'musics/bonhauphiasau.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            },
            {
                artist_name:'xa娇',
                imgsrc:'images/bayxa.jpg'
            },
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Kymm',
                imgsrc:'images/kymm.jpg'
            },
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            }
        ],
        description: [
            {
                line: 'Song: Bỏ nhau phía sau'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: Yusei'
            },
            {
                line: 'Mix & Master: VOK Records'
            },
            {
                line: 'Artwork: Maxk Nguyen'
            },
            {
                line: 'Banner: Chillingo'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2019'
            },
            {
                line: 'Special thanks to everyone has been supported us for all these years!'
            },
            {
                line: 'A song to celebrate and make memories.'
            },
            {
                line: 'Original Beat: SZA x Bryson Tiller Type Beat - Love Drunk'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line:'Not Available.'
            }
        ]
    },

    //cach mot man hinh
    {
        img: 'images/cachmotmanhinh.jpg',
        name: 'Cách một màn hình',
        artist: 'Wildde, dwalker',
        music: 'musics/cachmotmanhinh_dwalker_wildde.mp3',
        artist_list: [
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            },
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            },
        ],
        description: [
            {line: 'Song: Cách một màn hình'},
            {line: '———————————'},
            {line: 'Produce: Lee'},
            {line: 'Rec/Mix/Master: VOK Records'},
            {line: 'Artwork & Banner: Custhekid'},
            {line: '———————————'},
            {line: 'Released: 2019'},
            {line: '"Mình từng đọc được một bài về tình yêu. Trong đó có bảo yêu xa cũng rất tốt và cũng rất buồn. Những cặp đôi ấy qua năm tháng ngày nhớ, họ được rèn luyện cách sống độc lập, rằng chỉ khi mình biết yêu thương bản thân và có thể làm đa số mọi chuyện tự lực của mình thì mới có thể yêu thương người khác..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'},
        ],
    },

    //Chang the giu em lai
    {
        img: 'images/changthegiuemlai.jpg',
        name: 'Chẳng thể giữ em lại',
        artist: 'KLG, dwalker',
        music: 'musics/changthegiuemlai_klg_dwalker.mp3',
        artist_list: [
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            }
        ],
        description: [
            {line: 'Song: Chẳng thể giữ em lại'},
            {line: '———————————'},
            {line: 'Mix & Master: VOK Records'},
            {line: 'Written: KLG, dwalker'},
            {line: '———————————'},
            {line: 'Released: 2019'},
            {line: '"Đôi tay yếu ớt nên chẳng thể giữ em lại..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Not Available.'},
        ]
    },

    //check
    {
        img: 'images/check.jpg',
        name: 'Check',
        artist: 'Wansentai, Custhekid, Chillingo (Explicit)',
        music: 'musics/check_wansentai_custhekid_chillingo.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },
        ],
        description: [
            {line: 'Song: Cách một màn hình'},
            {line: '———————————'},
            {line: 'Produce: Tú'},
            {line: 'Rec/Mix/Master: Tú - VOK Records'},
            {line: 'Artwork & Banner: Wansentai & WEIASEC'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: '"Checking money, tụi tao check check!"'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Wan cùng với Chill và với Cus'},
            {line:'Đang trên 9 tầng mây vì đang chill bằng điếu kush'},
            {line:'Đốt sáng như là pháo burn the stage như nay tết'},
            {line:'Quậy cứ như hôm nay ngày cuối vì ngày mai là mình chết'},
            {line:'Knock down mấy em gái cứ gọi anh là wansentai'},
            {line:'Đi với anh thì vui cứ như là đang xem hài'},
            {line:'Mic check mic check như vậy chưa đủ nóng sao'},
            {line:'Khán giả ở phía bên dưới head-bang đến mức đổ rào'},
            {line:'Bố đời của âm nhạc chính là anh'},
            {line:'Nên cứ call me daddy không ai khác chính là anh'},
            {line:'Bật beat demo thu track giữ đầu lạnh'},
            {line:'From da head to shoulder khiến em giật thật là mạnh'},
            {line:'Mọi người đang hét to Wan - Chill - Cus'},
            {line:'Mấy em nhỏ cứ như vậy thì đáng yêu chết'},
            {line:'Hiphop từ đường phố lên sân khấu anh vẫn trùm mà'},
            {line:'Chơi từ lofi đến trap còn bây h chính là Rumbaa'},

            {line:'Checking money, tụi tao check check'},
            {line:'Mercedez (dez)'},
            {line:'Người mặc vest vest'},
            {line:'Phải là best best'},
            {line:'Checking money, nhạc làm khét khét'},
            {line:'Mấy thằng fake fake'},
            {line:'Làm mày ghét ghét'},
            {line:'Piece of cake cake'},
            
            {line:'Anh đây đâu phải là Zack cũng không phải Éc Gì Wang'},
            {line:'Nên em không cần né, em cũng đâu cần ngụy trang'},
            {line:'Một khi anh đã yêu là anh sẽ yêu cho kỹ càng'},
            {line:'Chứ không ra ngoài đường bị người ta đập cho vô chụp x-quang'},
            {line:'Em ơi ngồi xích sang'},
            {line:'Vai đeo MCM, tai nghe nhạc gucci gang'},
            {line:'Mấy em ngọt nước trên insta cả chục thằng'},
            {line:'2k4 khá chảnh, thích đón đưa bằng trực thăng'},
            {line:'Nhưng anh đâu giống Khá Bảnh, đâu muốn đi tù chục năm'},
            {line:'Em vẫn còn trẻ nên em cần người chăm sóc Không làm em khóc anh chỉ muốn knock em up Đừng lo ngại gì cả theo anh Chill vào trong pub VOK represent nhạc anh sẽ biến nó thành club'},
            {line:'Check check check nhạc bọn anh trên mây'},
            {line:'Đưa các em lên cao vút mọi muộn phiền quên ngay'},
            {line:'Vì Quan Chill Cus bọn anh sẽ thiêu đốt con tim em đang cháy vì nhạc hay thêm say Đêm nay các em xin anh hãy đừng về'},
            {line:'Kêu thêm chút whisky say quên hết đường về'},
            {line:'Gọi anh là daddy xin em đừng làm thế'},
            {line:'Các em đứng xếp hàng bật chế độ đa thê.'},
            
            {line:'Có tiền trong bank, nhưng không là công an'},
            {line:'Giữ thẻ xanh nơi tụi mày mong sang'},
            {line:'Viết nhạc hit và đưa lên top bảng'},
            {line:'Phi hành gia còn bật khi đầu gật bên ngoài không gian'},
            {line:'Chơi nhạc trẻ như custhekid'},
            {line:'Hít một kẻ cocaine cũng không phê bằng có track release'},
            {line:'Mấy thằng ngố nghe nhạc bố mà loan tin'},
            {line:'Make money make money cho trong ví đầy Franklin'},
            {line:'Wansentai, custhekid, chillingo yah'},
            {line:'Mang trên vai, nhiệt huyết, killing flow'},
            {line:'Rap là game thích là bem bằng nintendo yah'},
            {line:'Bùng nổ bên tai như co2 trong soda'},
            {line:'Không mang xiềng xích , nhạc bay biệt tích'},
            {line:'Check soundcloud, thấy nhạc hay liền thích'},
            {line:'Phải mở rộng kết nối, và không gây hiềm khích'},
            {line:'Đá động vào tiềm thức, giữ cho mình toàn điều chất'},
            {line:'Đến từ vok represent cả châu á'},
            {line:'Dù chỉ là thính giả, nhưng em lại đớp như câu cá'},
            {line:'Gọi Là người nông dân, không những anh phải đào hoa mà'},
            {line:'biết mình được tạo ra, vì còn khả năng làm giá'},
            {line:'Shinobi làng lá, không cho ai tàn phá'},
            {line:'Club banger, làm cho vok càng Khá (bảnh)'},
            {line:'Mấy thằng cá cảnh, chờ tao thống trị năm châu'},
            {line:'Nếu mà muốn gặp cus kid, thì còn chờ nhiều năm sau'},
            
            {line:'Checking money, tụi tao check check'},
            {line:'Mercedez (dez)'},
            {line:'Người mặc vest vest'},
            {line:'Phải là best best'},
            {line:'Checking money, nhạc làm khét khét'},
            {line:'Mấy thằng fake fake'},
            {line:'Làm mày ghét ghét'},
        ],
    },


    //chim dam trong em
    {
        img: 'images/chimdamtrongem.jpg',
        name: 'CHIMDAM TRONG EM',
        artist: 'KLG, Louies',
        music: 'musics/chimdamtrongem_klg_louies.mp3',
        artist_list: [
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
        ],
        description: [
            {line: 'Song: CHIMDAM TRONG EM'},
            {line: '———————————'},
            {line: 'Produce: Level'},
            {line: 'Mix & Master: KLG'},
            {line: 'Artwork & Banner: WEIASEC & imnotspecial'},
            {line: 'Composed by KLG, Louies'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: '"Louies bảo rằng KLG làm hook nhiều quá rồi để bài này Louies làm cho."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {
                line:'Not Available.'
            },
        ]
    },

    //Co con niu keo duoc nhau
    {
        img: 'images/coconniukeoduocnhau.jpg',
        name: '"ccnkdn"',
        artist: 'Custhekid, xa娇',
        music: 'musics/coconniukeoduocnhau_custhekid_bayxa.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'xa娇',
                imgsrc:'images/bayxa.jpg'
            }
        ],
        description: [
            {line: 'Song: Có Còn Níu Kéo Được Nhau'},
            {line: '———————————'},
            {line: 'Produce: Jordy Chandra'},
            {line: 'Mix & Master: VOK Records'},
            {line: 'Artwork: Kiet Nguyen'},
            {line: 'Banner: Custhekid'},
            {line: '———————————'},
            {line: 'Released: 2019'},
            {line: 'Có những cuộc tình không phải mình muốn giữ nhau là được....'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Và em mang ánh mặt trời đi mất để'},
            {line: 'lại 1 người buồn duy nhất'},
            {line: 'Những tin nhắn, chỉ còn là nghi thức'},
            {line: 'Có cơn gió nào vụt ngang qua thổi bay tình'},
            {line: 'Làm 2 ta đổi thay mình'},
            {line: 'Nhin lại kỷ niệm từng trải qua rồi'},
            {line: 'Nhiều lần cãi vả làm lòng mình phải xa rời'},
            {line: 'ai đã từng làm tim anh thổn thức'},
            {line: 'Từng mang về nơi bình yên ổn nhất'},
            {line: 'Trao thuơng nhớ vào bầu trời mới đầy màu'},
            {line: 'Ta từng cùng hát xuyên màn đêm đen'},
            {line: 'Xin lòng đừng khác, để đuợc bên em'},
            {line: 'Cho dù khó khăn, ta sẽ cùng buớc'},
            {line: 'Như những ngày truớc, hứa cùng bên nha'},
            {line: 'Mà dòng đời, kéo ta ra khỏi nhau, tạo ra bao nỗi đau và làm tình tan cõi mây'},
            {line: 'thanh âm vọng lại, như giấc mộng dài, nhưng thời gian sẽ làm cho đổi thay'},
            {line: 'Dù cho có khóc thêm bao lần cho em'},
            {line: 'Anh vẫn thất bại khi giữ sợi tơ duyên'},
            {line: 'như đôi chim trời, giờ bay về hai huớng'},
            {line: 'Lập thành tổ ấm, tạo nên bài thơ riêng'},
            {line: 'gợn mây trắng hoài nghi, ngày em đến và đi'},
            {line: 'trong khúc say tình, quay mình nhìn ai'},
            {line: 'một lần cuối để trong phút giây gió thu ngàn tiếc nuối'},
            {line: 'ta đi về đâu là bắt đầu, xa nhau cho hoàng hôn đầy nỗi nhớ'},
            {line: 'vậy đành thôi, dành cho mai sau, có (chẳng) còn níu kéo được nhau'},
            {line: 'Sẽ khong gặp em, vào những ngày mai mốt'},
            {line: 'Sẽ cầu cho em rồi kiếm đuợc 1 ai tốt'},
            {line: 'Hơn là nguời đã không thể làm e nhòe son'},
            {line: 'Mà làm tình phai, lệ sầu đọng trên mắt'},
            {line: 'Hãy dừng tìm nhau giữa hàng vạn cá thể'},
            {line: 'Bỏ lại niềm đau dù đã là quá trẽ'},
            {line: 'Trả lại bầu trời cho những vệt nắng chói'},
            {line: 'Gửi lời xin lõi từ lâu không dám nói'},
            {line: 'Vì a biết chắc, là e muốn xa'},
            {line: 'Vì e biết chắc, không còn chúng ta'},
            {line: 'Vì ta biết chắc, không thể bền lâu'},
            {line: 'Liệu ta có còn níu kéo đuợc nhau..'},
        ]
    },

    //condieugi
    {
        img: 'images/condieugi.jpg',
        name: 'Condieugi',
        artist: 'KLG, Left Hand, Yang E',
        music: 'musics/condieugi_klg_lefthand.mp3',
        artist_list: [
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
            {
                artist_name:'Left Hand',
                imgsrc:'images/lefthand.jpg'
            },
            {
                artist_name:'Yang E',
                imgsrc:'images/yange.jpg'
            },
        ],
        description: [
            {line: 'Song: Condieugi'},
            {line: '———————————'},
            {line: 'Produce: Treymxn'},
            {line: 'Mix & Master: KLG'},
            {line: 'Artwork & Banner: KLG'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: 'EP: "You Treat Me Bad"'},
            {line: '"Còn điều gì, còn điều gì"'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics: [
                {line:'Còn điều gì giữa chúng ta,em ơi'},
                {line:'Còn điều gì giữa chúng ta, em ơi'},
                {line:'Trong hai ta ai là người thứ ba'},
                {line:'Trong hai ta ai là người thứ ba'},
                {line:'Còn điều gì giữa chúng ta, em ơi'},
                {line:'Anh đâu có muốn mình xa nhau'},
                {line:'Em đâu có thấy mình sai đâu'},
                {line:'Đâu có đâu có đâu có thấy mình sai'},
                {line:'Còn điều gì, còn điều gì'},
                {line:'Em nói anh chẳng ra gì'},
                {line:'Vinh hoa phú quý ko thể bỏ qua đi'},
                {line:'Bad white bitch như là Barbie'},
                {line:'Make her pussy wet như là lavie'},
                {line:'Big bag, you know I want it'},
                {line:'All these hunnids blue cất vào va li'},
                {line:'I cant feel your luv, im not wall e'},
                {line:'I don’t wanna die alone'},
                {line:'I don’t wanna ride alone'},
                {line:'Nói anh đi đừng mãi lòng vòng'},
                {line:'Con tim anh tím tái trong lòng'},
                {line:'Em đã ghét tay trái phải không'},
                {line:'Tình cảm này của em chỉ là part time, công việc anh đâu phải như vậy'},
                {line:'Đưa anh vào nhưng cơn nồng say'},
                {line:'Bỏ lại cô đơn với tay lái'},
                {line:'Got a new chick on go'},
                {line:'Got a bag for sum dough'},
                {line:'Do the math Ngo Bao Chau'},
                {line:'Sự giả dối đem trao nhau'},
                {line:'Lòng tự nói không sao đâu'},
                {line:'Trời trở tối đã bao lâu'},
                {line:'Còn điều gì giữa chúng ta,em ơi'},
                {line:'Còn điều gì giữa chúng ta, em ơi'},
                {line:'Trong hai ta ai là người thứ ba'},
                {line:'Trong hai ta ai là người thứ ba'},
                {line:'Còn điều gì giữa chúng ta, em ơi'},
                {line:'Anh đâu có muốn mình xa nhau'},
                {line:'Em đâu có thấy mình sai đâu'},
                {line:'Đâu có đâu có đâu có thấy mình sai'},
                {line:'Còn điều gì, còn điều gì'},
        ]
    },

    //crazy
    {
        img: 'images/crazy.jpg',
        name: 'Crazy',
        artist: 'Wansentai, Gaomadeit',
        music: 'musics/crazy.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Gaomadeit',
                imgsrc:'images/gao.jpg'
            },
        ],
        description: [
            {line: 'Song: Crazy'},
            {line: '———————————'},
            {line: 'Mix & Master: RBA Recordings & VOK Records'},
            {line: 'Artwork & Banner: Wansentai'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: '"Crazy crazy..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records x RBA Recordings'}
        ],
        song_lyrics:[
            {line: 'Not Available.'},
        ]
    },

    //cry
    {
        img: 'images/cry.jpg',
        name: 'Cry',
        artist: 'dwalker',
        music: 'musics/cry_dwalker.mp3',
        artist_list: [
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            },
        ],
        description: [
            {line: 'Song: Cry'},
            {line: '———————————'},
            {line: 'Produce: 8ROKEBOY'},
            {line: 'Mix & Master: VOK Records'},
            {line: 'Artwork: Google'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: '"I cry a lot..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Not Available.'},
        ]
    },

    //dabaolan
    {
        img: 'images/dabaolan.jpg',
        name: 'Dabaolan',
        artist: 'KLG, s0sik, Bear-D',
        music: 'musics/dabaolan_klg_s0sik_bearD.mp3',
        artist_list: [
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
            {
                artist_name:'s0sik',
                imgsrc:'images/s0sik.jpg'
            },
            {
                artist_name:'Bear-D',
                imgsrc:'images/bearD.jpg'
            },
        ],
        description: [
            {line: 'Song: Dabaolan'},
            {line: '———————————'},
            {line: 'Produce: yung dan'},
            {line: 'Mix & Master: KLG, s0sik, Bear-D'},
            {line: '———————————'},
            {line: 'Released: 2021'},
            {line: 'EP: "You Treat Me Bad"'},
            {line: '"Cô ta chỉ xem tao là một thằng tồi"'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {
                line:'Not Available.'
            },
        ]
    },

    //degiuhinhbongem
    {
        img: 'images/degiuhinhbongem.jpg',
        name: 'Để giữ hình bóng em',
        artist: 'Custhekid, Chillingo',
        music: 'musics/degiuhinhbongem_custhekid_chillingo.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            }
        ],
        description: [
            {
                line: 'Song: Để giữ hình bóng em'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: J Grooves'
            },
            {
                line: 'Mix & Master: VOK Records'
            },
            {
                line: 'Banner: Custhekid & Chillingo'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2018'
            },
            {
                line: 'Sau mấy tháng qua Mỹ không thu nhạc được, đành phải comeback bằng tai nghe! Là 1 sản phẩm thư giãn, hãy nghe và cảm nhận!'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line: 'Có cơn mưa rào, lại chợt ghé ngang'
            },
            {
                line: 'Xé tan hết cả một góc trời'
            },
            {
                line: 'Bắt chuyến tàu cuối với một vé an yên'
            },
            {
                line: 'Buồn cứ thay phiên làm tim chẳng cất lời'
            },
            {
                line: 'Ta đánh mất rồi, thôi cứ để cho dòng đời cuốn trôi đi'
            },
            {
                line: 'Tâm tĩnh lặng, tránh làm ướt đôi mi'
            },
            {
                line: 'Đôi khi muốn cho nỗi lòng này tan biến!'
            },
            {
                line: 'Nhưng niềm vui với anh là thứ gì đó khan hiếm.'
            },
            {
                line: 'Và em..'
            },
            {
                line: 'Lẽ nào lại quên những thứ từng hay thề?'
            },
            {
                line: 'Dừng một chút để suy nghĩ.'
            },
            {
                line: 'Và lại tìm một nơi nào đó để quay về!'
            },
            {
                line: 'Để biết mình cần những điều gì.'
            },
            {
                line: 'Có cần tới một giấc ngủ sâu không?'
            },
            {
                line: 'Cần đủ lâu thời gian để lại nhớ?'
            },
            {
                line: 'Để giữ lại hình bóng của em!'
            },
            {
                line: 'Em...'
            },
            {
                line: 'Hình bóng em!'
            },
            {
                line: 'Giờ đã xa, nơi bình yên'
            },
            {
                line: 'Không còn hai chúng ta!'
            },
            {
                line: 'Mình nhớ nhung'
            },
            {
                line: 'Còn chút đâu, nghĩ về'
            },
            {
                line: 'Hương em trong gió!'
            },
            {
                line: 'Sao em không nhớ?'
            },
            {
                line: 'Những yêu thương thời mà ta?'
            },
            {
                line: 'Còn bên nhau như thế!'
            },
            {
                line: 'Sao anh luôn nhớ những đau thương này?'
            },
            {
                line: 'Để anh giữ hình bóng em!'
            },
            {
                line: 'Có chút ngọt để viết được tình ca'
            },
            {
                line: 'Giữ chút đắng để mong được em nhìn ra'
            },
            {
                line: 'Để lại mặn nồng trong tim anh cất'
            },
            {
                line: 'Và có chua xót vào cái ngày mà mình xa'
            },
            {
                line: 'Không biết là...'
            },
            {
                line: 'Anh liệu có được chờ không ?'
            },
            {
                line: 'Cách trăm vạn cây số nên trái ngược giờ nhau'
            },
            {
                line: 'Thời gian làm phai đi bao nỗi niềm.'
            },
            {
                line: 'Dù anh yêu bao nhiêu, cũng chỉ còn có mỗi mình, Anh!'
            },
            {
                line: 'Em có còn nhớ tới ?'
            },
            {
                line: 'Về những ngày đầu mà mình quen nhau ?'
            },
            {
                line: 'Tình yêu là cả một thế giới mới.'
            },
            {
                line: 'Ai cũng bị nó chuốc bằng men say.'
            },
            {
                line: 'Trong lòng anh không có bình yên'
            },
            {
                line: 'Tới vẻ ngoài cũng không dễ nhìn.'
            },
            {
                line: 'Nhân vật phụ của cả một đoạn phim'
            },
            {
                line: 'Vì anh biết tim của em không để mình.'
            },
            {
                line: 'Vì hình ảnh đó không thể mua lại bằng tiền!'
            },
            {
                line: 'Không thể điều khiển nó vì anh không phải nhà cầm quyền.'
            },
            {
                line: 'Không thể giữ được lâu đâu, vì chính em bỏ đi mất.'
            },
            {
                line: 'Em không phải là Chúa Trời, yêu đâu phải là nghi thức!'
            },
            {
                line: 'Tình mang đi cất, dù là duy nhất, thì cũng phải tránh xa.'
            },
            {
                line: 'Cảm xúc còn tồn lại, như hạt sương đêm đọng trên những cánh hoa.'
            },
            {
                line: 'Đáng ra anh phải chúc cho em và người ấy hạnh phúc dưới nhà thờ trong nền nhạc thánh ca.'
            },
        ]
    },
    
    //doicho acoustic
    {
        img: 'images/doicho.jpg',
        name: 'Đợi chờ (Acoustic)',
        artist: 'Wansentai, Harmonie',
        music: 'musics/doicho_wansentai_harmonie.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Harmonie',
                imgsrc:'images/harmonie.jpg'
            },
        ],
        description: [
            {line: 'Song: Đợi chờ (Acoustic)'},
            {line: '———————————'},
            {line: 'Produce: Jayden'},
            {line: 'Rec/Mix/Master: Jayden'},
            {line: 'Artwork & Banner: WANSENTAI'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: '"Kiểu gì lại chả thế..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'},
        ],
    },

    //em muon
    {
        img: 'images/emmuon.jpg',
        name: 'Em muốn',
        artist: 'Chillingo, Gavin G',
        music: 'musics/emmuon_chillingo_gaving.mp3',
        artist_list: [
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },
            {
                artist_name:'Gavin G',
                imgsrc:'images/gaving.jpg'
            },
        ],
        description: [
            {
                line: 'Song: Em muốn'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: Ilgu'
            },
            {
                line: 'Mix & Master: Chillingo'
            },
            {
                line: 'Artwork: WANSENTAI'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2021'
            },
            {
                line: '"Rời xa cạm bẫy tình yêu, không muốn quay đầu lại..."'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line:'Câu truyện cổ tích không được viết cho mình'
            },
            {
                line:'Anh ta không say ánh mắt, chỉ là liếc đưa tình'
            },
            {
                line:'Một người mà đã không nói yêu mình'
            },
            {
                line:'Đã không muốn bên mình'
            },
            {
                line:'Chẳng cần viết, chẳng chì chiết'
            },
            {
                line:'Cần gì quyến, cần gì luyến'
            },
            {
                line:'Cần gì tiếc cuộc tình này'
            },
            {
                line:'Rời xa cạm bẫy tình yêu, không muốn quay đầu lại'
            },
            {
                line:'Mệt mỏi with all these fucking shit, all these crazy things'
            },
            {
                line:'Em muốn được high, muốn được say để tìm đến yên bình'
            },
            {
                line:'Em muốn được yêu, em tha thiết duyên tình'
            },
            {
                line:'Để rồi một ngày nhận ra em đang giết chính mình'
            },
            {
                line:'Em muốn quên đi được hết bóng hình'
            },
            {
                line:'Em không muốn si tình'
            },
            {
                line:'Con tim lạnh buốt, em cần cần giúp'
            },
            {
                line:'Em cần hút, em cần uống'
            },
            {
                line:'Em cần vút bay khỏi đây'
            },
            {
                line:'Rời xa cạm bẫy tình yêu, không muốn quay đầu lại'
            },
            {
                line:'Mệt mỏi with all these fucking shit, all these crazy things'
            },
            {
                line:'Em muốn được high, muốn được say để tìm đến yên bình'
            },
            {
                line:'Em muốn được say muốn được high tới mai'
            },
            {
                line:'Chìm đắm trong cơn mê ở trên paradise'
            },
            {
                line:'Em không cần quan tâm như nào là đúng với sai'
            },
            {
                line:'Thứ mà em bận tâm là hôm nay qua đêm với ai'
            },
            {
                line:'Đừng có khóc làm nhoè đi eyeliner'
            },
            {
                line:'Em hoá trang biến mình trở thành một con nai tơ'
            },
            {
                line:'Chuyện thất tình em bịa ra chỉ là một cái cớ'
            },
            {
                line:'Khi mà gặp đại gia em dụ họ rút ra vài tờ'
            },
            {
                line:'I fell in love with the demon'
            },
            {
                line:'I pretty dumb to let her used me just for fun'
            },
            {
                line:'That’s the reason why I never trust in “mỹ nhân”'
            },
            {
                line:'You broke my heart down in the bad condition'
            },
            {
                line:'Em coi những chàng trai nghèo  không ra gì'
            },
            {
                line:'Nếu muốn quen được em cần tặng túi LV Gucci'
            },
            {
                line:'Làm sếp một công ty , lương nhiều trong phong bì, du lịch sang Bali'
            },
            {
                line:'Bitch, I’m not your Daddy'
            },
            {
                line:'Tình yêu với em cứ như một game show'
            },
            {
                line:'Làm em đau sau quá nhiều những mối tình đậm sâu'
            },
            {
                line:'Họ như là con mồi còn em cứ như là cần câu'
            },
            {
                line:'Đừng gặp nhau vì cảm xúc không giống như lần đầu'
            },
            {
                line:'Chẳng còn chút bối rối như lần đầu'
            },
            {
                line:'Em là mụ phù thủy, mỹ nữ, kiêm hoàng hậu'
            },
            {
                line:'Chẳng cần một ai ở kế, vì em cứ thế'
            },
            {
                line:'Em... không...'
            },
            {
                line:'Em không muốn to fall in love'
            },
            {
                line:'(Em muốn được yêu, em tha thiết duyên tình)'
            },
            {
                line:'You don’t want to fall in love with me'
            },
            {
                line:'(Để rồi một ngày nhận ra em đang giết chính mình)'
            },
            {
                line:'You don’t want to feel the pain inside'
            },
            {
                line:'(Em muốn quên đi được hết bóng hình)'
            },
            {
                line:'Inside your heart'
            },
            {
                line:'(Em không muốn si tình)'
            },
            {
                line:'Con tim lạnh buốt, em cần cần giúp'
            },
            {
                line:'Em cần hút, em cần uống'
            },
            {
                line:'Em cần vút bay khỏi đây'
            },
            {
                line:'Rời xa cạm bẫy tình yêu, không muốn quay đầu lại'
            },
            {
                line:'Mệt mỏi with all these fucking shit, all these crazy things'
            },
            {
                line:'Em muốn được high, muốn được say để tìm đến yên bình'
            },
        ]
    },

    //emquangatuduong
    {
        img: 'images/emquangatuduong.jpg',
        name: 'Em qua ngã tư đường',
        artist: 'dwalker, xa娇',
        music: 'musics/emquangatuduong.mp3',
        artist_list: [
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            },
            {
                artist_name:'xa娇',
                imgsrc:'images/bayxa.jpg'
            },
        ],
        description: [
            {line: 'Song: Em qua ngã tư đường'},
            {line: '———————————'},
            {line: 'Produce: Elijah Who'},
            {line: 'Rec/Mix/Master: VOK Records'},
            {line: 'Artwork & Banner: Custhekid'},
            {line: '———————————'},
            {line: 'Released: 2018'},
            {line: '"Là câu chuyện ngày hè chàng trai gặp cô gái ở nơi ngã tư đường..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'},
        ],
    },

    //fall in luv
    {
        img: 'images/fallinluv.jpg',
        name: 'Fall in luv',
        artist: 'Wansentai, Jayden',
        music: 'musics/fallinluv.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Jayden',
                imgsrc:'images/jayden.jpg'
            },
        ],
        description: [
            {line: 'Song: Fall in luv'},
            {line: '———————————'},
            {line: 'Produce: Jayden '},
            {line: 'Mix & Master: Jayden'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: 'I think I fall in luv so hard with you...'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Not Available.'},
        ],
    },

    //follower
    {
        img: 'images/follow.jpg',
        name: 'Follower',
        artist: 'dwalker, Wildde (Explicit)',
        music: 'musics/follower_dwalker_wildde.mp3',
        artist_list: [
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            },
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            }
        ],
        description: [
            {line: 'Song: Follower'},
            {line: '———————————'},
            {line: 'Mix & Master: VOK Records & Yang E'},
            {line: 'Artwork: Google'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: 'Follow with my team...'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Not Available.'},
        ]
    },

    //gia nhu ta chua tung yeu
    {
        img: 'images/gianhutachuatungyeu.jpg',
        name: '"gntcty"',
        artist: 'Wansentai, Kymm, Wildde',
        music: 'musics/gianhutachuatungyeu_wansentai_kymm_wildde.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Kymm',
                imgsrc:'images/kymm.jpg'
            },
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            },
        ],
        description: [
            {line: 'Song: Giá như ta chưa từng yêu'},
            {line: '———————————'},
            {line: 'Beat: EPIK HIGH – "스포일러(SPOILER) instrumental'},
            {line: 'Rec/Mix/Master: VOK Records'},
            {line: '———————————'},
            {line: 'Released: 2019'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'},
        ],
    },

    //giong nhu em
    {
        img: 'images/giongnhuem.jpg',
        name: 'Giống như em',
        artist: 'Custhekid, Tranc',
        music: 'musics/giongnhuem_custhekid_tranc.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Tranc',
                imgsrc:'images/tranc.jpg'
            },
        ],
        description: [
            {line: 'Song: Giống như em'},
            {line: '———————————'},
            {line: 'Produce: Tú'},
            {line: 'Mix & Master: KLG'},
            {line: 'Artwork & Banner: WEIASEC'},
            {line: '———————————'},
            {line: 'Released: 2021'},
            {line: 'Từ ngày có anh bên đời em'},
            {line: 'Em thấy con tim mình vui lên'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Anh, tại vì sao lại yêu một người giống như em'},
            {line: 'Tại vì sao lại chọn một người giống như em'},
            {line: 'Tại vì sao em lại chẳng thể ngừng lại dòng nghĩ suy'},
            {line: 'Từ ngày có anh bên đời em'},
            {line: 'Em thấy con tim mình vui lên'},
            {line: 'Và cũng có những khi thầm mong ước'},
            {line: 'Về những thứ nhỏ nhoi cạnh bên'},
            {line: 'Em chẳng thể theo kịp được anh'},
            {line: 'Anh quá cool và cũng quá xa'},
            {line: 'Vậy thì cớ tại sao yêu một người như em?'},
            {line: 'Tay cầm tay đi cùng nhau trên từng con phố'},
            {line: 'Ngước nhìn lên khuôn mặt anh luôn đẹp như thế'},
            {line: 'Em vẫn quen nép mình sau đôi bờ vai vững chãi của anh suốt cả ngày'},
            {line: 'Bởi vì em đây thật ra cũng chẳng có gì'},
            {line: 'Không giày cao, chân thì ngắn cũng không pretty'},
            {line: 'Nhưng cớ sao anh vẫn luôn cạnh bên và nói yêu em'},
            
            {line: 'Anh thì luôn là một vì sao sáng nhất'},
            {line: 'Còn em thì là vầng Tranc bị che mờ trong làn mây tối đen'},
            {line: 'Nhưng dù cho dù cho là như thế'},
            {line: 'Thì tại sao anh vẫn ở bên'},
            {line: 'Từ ngày có anh bên đời em'},
            {line: 'Em thấy con tim mình vui lên'},
            {line: 'Và cũng có những khi thầm mong ước'},
            {line: 'Về những thứ nhỏ nhoi cạnh bên'},
            {line: 'Em vẫn sẽ bước đi cạnh anh'},
            {line: 'Trên những tháng năm chờ đón ta'},
            {line: 'Vậy nên anh hãy cứ yêu một người như em'},
            {line: 'cớ tại sao không yêu 1 người như em baby'},
            {line: 'tìm đâu ra 1 người như em ở bên (nooo)'},
            {line: 'Nhưng sao em lại luôn cảm thấy âu sầu'},
            {line: 'hãy để cho anh làm em vui, không còn suy nghĩ đau đầu'},
            
            {line: 'Because oh, all I want is to be your world'},
            {line: 'Vì anh là dành cho em, em khỏi phải chờ'},
            {line: 'mãi tự ti làm chi, em xinh thế còn gì'},
            {line: 'Gần bên em lại làm anh si, làm anh mê thế còn gì'},
            
            {line: 'Vì em thì luôn là một vì sao sáng'},
            {line: 'Sao lại luôn tự cho mình che mờ trong màn mây tối đen'},
            {line: 'Nhưng dù cho dù cho là như thế'},
            {line: 'Thì anh vẫn sẽ mãi ở bên'},
            {line: 'Từ ngày có anh bên đời em'},
            {line: 'Em thấy con tim mình vui lên'},
            {line: 'Và cũng có những khi thầm mong ước'},
            {line: 'Về những thứ nhỏ nhoi cạnh bên'},
            {line: 'Em vẫn sẽ bước đi cạnh anh'},
            {line: 'Trên những tháng năm chờ đón ta'},
            {line: 'Vậy nên anh hãy cứ yêu một người như em'},
            {line: 'Baby em không cần lo'},
            {line: 'Em đẹp không vì dáng vóc, mà vì tình cảm em từng cho'},
            {line: 'Chỉ cần cười trong 1 thoáng chốc'},
            {line: 'Đủ để làm anh mơ về ngày mình dần trắng tóc'},
            {line: 'Ngồi quây quần cùng đám nhóc'},
            {line: 'Như những gì hai ta từng mơ'},
            
            {line: 'Biến tất cả thành sự thật, yeah, make it come true'},
            {line: 'The story of my life will become all about you'},
            {line: 'Không là em thì còn là ai khác để tới bên nhau'},
            {line: 'Dù cho có mai sau, vẫn như phút ban đầu'},
            {line: 'Từ ngày có anh bên đời em'},
            {line: 'Em thấy con tim mình vui lên'},
            {line: 'Và cũng có những khi thầm mong ước'},
            {line: 'Về những thứ nhỏ nhoi cạnh bên'},
            {line: 'Em vẫn sẽ bước đi cạnh anh'},
            {line: 'Trên những tháng năm chờ đón ta'},
            {line: 'Vậy nên anh hãy cứ yêu một người như em'},
        ],
    },

    //Hydrocodone
    {
        img: 'images/chemical.jpg',
        name: '"Hydrocodone"',
        artist: 'Custhekid, Wansentai',
        music: 'musics/hydrocodone_custhekid.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            }
        ],
        description: [
            {
                line: 'Song: "Hydrocodone"'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: 7ink'
            },
            {
                line: 'Mix & Master: KLG'
            },
            {
                line: 'Artwork & Banner: Custhekid'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2021'
            },
            {
                line: '"CHEMICAL EP"'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line: 'I know what you want'
            },
            {
                line: 'Know what you want babe'
            },
            {
                line: 'To leave me alone'
            },
            {
                line: 'Leave me alone right?'
            },
            {
                line: 'I know what you want'
            },
            {
                line: 'Know what you want babe babe'
            },
            {
                line: 'To leave me alone'
            },
            {
                line: 'Custhekid come on'
            },
            {
                line: 'Cần liều thuốc giảm đau cho nó dần chôn sâu trong mạch máu'
            },
            {
                line: 'Sau những lần choảng nhau, em lại cố trang điểm che sạch dấu'
            },
            {
                line: 'Dù cơ mỏi rã rời, vẫn sẽ cố làm miệng của em cười'
            },
            {
                line: 'Em có bỏ cả đời, chỉ để nhận thêm tiền giấy trên người'
            },
            {
                line: 'You can give away your virgin'
            },
            {
                line: 'For a Burberry'
            },
            {
                line: 'Bao nhiêu lời hứa, bao câu thơ tình'
            },
            {
                line: 'Sao bằng Mercedez'
            },
            {
                line: 'Bait từ Cali cho tới Berlin'
            },
            {
                line: 'Thật nực cười nhỉ, right baby girl?'
            },
            {
                line: 'Tình yêu bỏ vì Versace skirt'
            },
            {
                line: 'Cho những thằng sugar daddy flirt'
            },
            {
                line: 'Thật quá đáng dù em quá đáng'
            },
            {
                line: 'Rời đi, khi chán'
            },
            {
                line: 'And grab the bag then go'
            },
            {
                line: 'Đầu anh giờ còn khá choáng'
            },
            {
                line: 'Endorphin cần phải dùng'
            },
            {
                line: 'Endure bao lời cãi cùn'
            },
            {
                line: 'Hydrocodone sẽ không còn đủ'
            },
            {
                line: 'Cho cô đơn này phải dừng!'
            },
            {
                line: 'Em nói là em khác'
            },
            {
                line: 'Em nói là em cần những điều khác anh'
            },
            {
                line: 'All she need is the bag'
            },
            {
                line: 'And the car, and the cash'
            },
            {
                line: 'Vậy tình yêu với em là gì'
            },
            {
                line: 'Là cuộc vui hay là rác?'
            },
            {
                line: 'Lý do gì em thèm khát fame?'
            },
            {
                line: 'Babe, anh cần mặc xác em'
            },
            {
                line: 'Vậy đi!'
            },
            {
                line: 'Hydrocodone ở trong máu, hydrocodone ở trong máu tim'
            },
            {
                line: 'Để cho cô đơn đó nung nấu, để cho cô đơn đó không yên'
            },
            {
                line: 'Hydrocodone khi cần thiết, sao anh dùng miết'
            },
            {
                line: 'Hydrocodone giúp anh nghiện, nghiện con người em anh từng biết'
            },
            {
                line: 'Em bảo là anh không cần biết'
            },
            {
                line: 'Tình cảm là thứ không cần thiết'
            },
            {
                line: 'Em bảo em cần không gian riêng'
            },
            {
                line: 'Không gian em chứa đầy vàng và tiền'
            },
            {
                line: 'Em muốn ra khơi nhưng không muốn đọc bản đồ'
            },
            {
                line: 'Chỉ muốn đánh bắt trong khi anh muốn phiêu lưu'
            },
            {
                line: 'Em muốn tự do như thể là thác đổ'
            },
            {
                line: 'Không muốn là tranh mẫu chỉ cho người khác đồ'
            },
            {
                line: 'Còn bao nhiêu chuyện em chưa kể'
            },
            {
                line: '12h đêm em chưa về'
            },
            {
                line: 'Em thích cười với cả bóng bay'
            },
            {
                line: 'Thích xa hoa, vẻ ngoài bóng bẩy'
            },
            {
                line: 'Thích thức dậy ở nơi xa lạ nhưng phải xa hoa tầm cỡ Sala mới xứng'
            },
            {
                line: 'Đêm nào em chơi hết mình mỗi lần uống hết bình thì em mới dừng'
            },
            {
                line: 'Hydrocodone ở trong máu'
            },
            {
                line: 'Hydrocodone ở trong tim'
            },
            {
                line: 'Để cho cô đơn đó nung nấu'
            },
            {
                line: 'Để cho cô đơn đó không yên'
            },
        ]
    },

    //khi anh co em
    {
        img: 'images/khianhcoem.jpg',
        name: 'Khi anh có em',
        artist: 'Wansentai, Jayden',
        music: 'musics/khianhcoem.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Jayden',
                imgsrc:'images/jayden.jpg'
            },
        ],
        description: [
            {line: 'Song: Khi Anh Có Em'},
            {line: '———————————'},
            {line: 'Produce: Jayden'},
            {line: 'Mix & Master: Jayden'},
            {line: 'Artwork & Banner: Wansentai'},
            {line: '———————————'},
            {line: 'Released: 2021'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'}
        ],
    },


    //khoai
    {
        img: 'images/khoai.jpg',
        name: 'KHOÁI!',
        artist: 'Louies, KLG, Custhekid (Explicit)',
        music: 'musics/khoai_louies_klg_custhekid.mp3',
        artist_list: [
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
        ],
        description: [
            {line: 'Song: KHOÁI!'},
            {line: '———————————'},
            {line: 'Produce: Pendo46'},
            {line: 'Mix & Master: KLG'},
            {line: 'Artwork & Banner: WEIASEC'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: 'Làm nhạc hăng say, cùng với VOK!'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'VOK anh represent, nhắc đến tên thôi mấy em khoái nà.'},
            {line:'Âm thanh bật max, kề vô bên tai, giật bay tới nái nà.'},
            {line:'Say hello với mấy em Tây, wo ai ni với mấy em China.'},
            {line:'Ăn Sashimi, cùng Cardi B, dù gu anh là Nicki Minaj.'},
            {line:'Tao keep it A$AP.'},
            {line:'Rocky như phần linh hồn, đi flow làm chúng nó ghen tị.'},
            {line:'Ye, how bout that ?'},
            {line:'Bóng loáng cùng đôi Jordan, nhiêu đây cũng chỉ mới khai vị.'},
            {line:'Ye, rapper đông đúc'},
            {line:'Nhưng mà riêng bọn tao khác, khác biệt trong từng câu rap.'},
            {line:'Không ngang hàng, mấy thằng flexing gang gàng.'},
            {line:'Ngập tràn trên từng trang mạng.'},
            {line:'Quốc tế xứng tầm tụi tao đi lên.'},
            {line:'Cuối tuần làm nhạc như The Weeknd.'},
            {line:'Mấy cậu muốn diss ?'},
            {line:'Battle sống chết ?'},
            {line:'Gửi tặng tụi mày hai chữ the end.'},
            {line:'Làm nhạc hăng say, cùng với VOK.'},
            {line:'Level cứ up up up.'},
            {line:'All day, làm ngay trong hôm nay.'},
            {line:'Nỗ lực hàng ngày.'},
            {line:'Đường danh vọng tụi tao phi lao.'},
            {line:'Baby girl look at me now.'},
            {line:'Buông thả bản thân vào công việc không lối ra và rap cứu phần linh hồn tao không go down..'},
            {line:'Và kiến thức là cần thiết chất kích thích tao loại bỏ vì nó đem lại phần thiệt.'},
            {line:'Kĩ năng dần tăng sau đôi ba cái lần viết làm bài nhạc cho ra lò phải thật lit.'},
            {line:'Tên tuổi tụi tao bay cao !!!'},
            {line:'VOK anh represent, nhắc đến tên thôi mấy em khoái nà.'},
            {line:'Âm thanh bật max, kề vô bên tai, giật bay tới nái nà.'},
            {line:'Say hello với mấy em Tây, wo ai ni với mấy em China.'},
            {line:'Ăn Sashimi, cùng Cardi B, dù gu anh là Nicki Minaj.'},
            {line:'Nhạc lên là khoái khoái khoái nà.'},
            {line:'Flow ăn điểm.'},
            {line:'Build skill lại thấy cháy máy.'},
            {line:'Rap mà như lây cơn nhiễm.'},
            {line:'Hơi nguy hiểm, yeah.'},
            {line:'Anh em uyển.'},
            {line:'Người bay lướt lướt lướt, mình thì lại dab skirt skirt.'},
            {line:'Rồi lại mang suy nghĩ, bỏ vào nhạc.'},
            {line:'Tao không cần biết phía trước cùng quỷ ký khế ước'},
            {line:'Tích lũy.'},
            {line:'Tích lũy kinh nghiệm, đầu tư biến thành tiền.'},
            {line:'Thích nhỉ.'},
            {line:'Thích cảm giác học cách kiểm soát tầm nhìn mình.'},
            {line:'Thiết nghĩ.'},
            {line:'Cùng homie LOUIES tụi tao phá đảo hết trò chơi.'},
            {line:'KLG lấy con beat mà xơi.'},
            {line:'You will see !!!'},
            {line:'VOK anh represent, nhắc đến tên thôi mấy em khoái nà.'},
            {line:'Âm thanh bật max, kề vô bên tai, giật bay tới nái nà.'},
            {line:'Say hello với mấy em Tây, wo ai ni với mấy em China.'},
            {line:'Ăn Sashimi, cùng Cardi B, dù gu anh là Nicki Minaj.'},
        ],
    },

    //khong dam noi
    {
        img: 'images/khongdamnoi.jpg',
        name: 'Không dám nói',
        artist: 'VOK',
        music: 'musics/khongdamnoi_vok.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            },
            {
                artist_name:'xa娇',
                imgsrc:'images/bayxa.jpg'
            },
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            },
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            }
        ],
        description: [
            {line: 'Song: Không dám nói'},
            {line: '———————————'},
            {line: 'Produce: TRA$H'},
            {line: 'Mix & Master: VOK Records'},
            {line: 'Scenery Effects: xa娇'},
            {line: 'Banner: Chillingo'},
            {line: '———————————'},
            {line: 'Released: 2018'},
            {line: 'There will always be something never get a chance to be spoken out...'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'}
        ],
    },

    //lam sao anh biet duoc 
    {
        img: 'images/lamsaoanhbietduoc.jpg',
        name: 'Làm sao anh biết được',
        artist: 'Louies, Custhekid',
        music: 'musics/lamsaoanhbietduoc_louies_custhekid.mp3',
        artist_list: [
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
        ],
        description: [
            {line: 'Song: Làm sao anh biết được'},
            {line: '———————————'},
            {line: 'Produce: omgsora'},
            {line: 'Mix & Master: KLG'},
            {line: 'Artwork & Banner: WEIASEC'},
            {line: '———————————'},
            {line: 'Released: 2021'},
            {line: '"Em đừng hỏi anh tương lai sẽ ra sao..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Em đừng hỏi anh tương lai sẽ ra sao.'},
            {line:'Babe làm sao anh biết được .'},
            {line:'Vài năm trôi đi có còn nắm tay nhau.'},
            {line:'Nhưng mà em ơi làm sao anh biết được mà.'},
            {line:'Người nằm cạnh anh sau buổi sáng ban mai kia.'},
            {line:'Trời ơi làm sao anh biết được.'},
            {line:'Ngoài em ra anh có thể ở bên ai.'},
            {line:'Làm sao anh biết được.'},
            {line:'Chắc do anh lo cho mình hiện tại nhiều hơn.'},
            {line:'Để được nhìn em, mỗi khi thức dậy.'},
            {line:'Dắt tay đưa nhau đi qua thật là nhiều nơi.'},
            {line:'Rồi tự hỏi là tại sao anh lại yêu đến mức này.'},
            {line:'Baby, how do I know.'},
            {line:'How do I know.'},
            {line:'How far can we go?'},
            {line:'How far can we go oh oh.'},
            {line:'Mong em không phiền anh gọi mỗi sáng sớm.'},
            {line:'Vì biết buổi sáng hay ngủ nhiều.'},
            {line:'Dù bận công việc tan làm anh ráng đón.'},
            {line:'Để cùng nhau ăn vào buổi chiều.'},
            {line:'Rồi dạo quanh sài gòn mỗi khi em cần tình yêu.'},
            {line:'Nhiều nơi, chưa cùng tìm hiểu.'},
            {line:'Cùng nhau làm việc khi không còn tiền tiêu.'},
            {line:'Đừng lo, người đời phiền nhiễu.'},
            {line:'Bởi vì, khi xung quanh không có ai.'},
            {line:'Em vẫn cạnh anh cho gian khó phai mờ.'},
            {line:'You said, we will be alright.'},
            {line:'Sẽ luôn bên nhau, if we keeps trying.'},
            {line:'Nắm đôi bàn tay và đưa em đi đến những nơi thật xa.'},
            {line:'Dạt đi bao ưu phiền ngày qua.'},
            {line:'Thương em qua muôn ngàn lời ca.'},
            {line:'Vẫn đắm say ngất ngây khi về già.'},
            {line:'Em đừng hỏi anh tương lai sẽ ra sao.'},
            {line:'Babe làm sao anh biết được .'},
            {line:'Vài năm trôi đi có còn nắm tay nhau.'},
            {line:'Nhưng mà em ơi làm sao anh biết được mà.'},
            {line:'Người nằm cạnh anh sau buổi sáng ban mai kia.'},
            {line:'Trời ơi làm sao anh biết được.'},
            {line:'Ngoài em ra anh có thể ở bên ai.'},
            {line:'Làm sao anh biết được.'},
            {line:'Anh vẫn không nghĩ nhiều về chuyện mai sau.'},
            {line:'Cưới hỏi hay sinh con hay lúc tóc hai màu.'},
            {line:'Cause future - life thing how do i know.'},
            {line:'Sao có thể biểu đạt cảm xúc chỉ trong hai câu.'},
            {line:'Dành trọn cảm xúc dẫn em đi khắp phố phường này.'},
            {line:'Không sợ người đời quản thúc anh muốn được thấy em cười hàng ngày.'},
            {line:'Vì có đôi khi nản nhất lời dèm pha còn phản phất.'},
            {line:'Hãy để anh là thuyền trưởng tình cảm ta chất cả kho vàng đầy.'},
            {line:'Em là hoa anh đào Louies trong vai chàng nông dân.'},
            {line:'Khiến cảm xúc bay bổng như máy bay đang vào không phận.'},
            {line:'Luôn cảm thấy cô đơn lạnh lẽo dù nước ta đông dân.'},
            {line:'Em muốn bữa tối tình yêu anh có thể dọn cả trăm phần.'},
            {line:'Baby what its all about.'},
            {line:'Yêu em không vắng khung giờ nào.'},
            {line:'Miệng đời phán xét có làm sao.'},
            {line:'Chỉ cần ta cùng nhau, vượt hết mọi hàng rào letsgoo.'},
            {line:'Dù em xứng đáng có cả đại dương.'},
            {line:'Anh chỉ là cá nằm trong bể.'},
            {line:'Dù cho người đời xem thường.'},
            {line:'Bảo chuyện tình ta sẽ không thể.'},
            {line:'Baby how do i know.'},
            {line:'How do they know.'},
            {line:'How far can we go ?'},
            {line:'How far can we go.'},
            {line:'Em đừng hỏi anh tương lai sẽ ra sao.'},
            {line:'Babe làm sao anh biết được .'},
            {line:'Vài năm trôi đi có còn nắm tay nhau.'},
            {line:'Nhưng mà em ơi làm sao anh biết được mà.'},
            {line:'Người nằm cạnh anh sau buổi sáng ban mai kia.'},
            {line:'Trời ơi làm sao anh biết được.'},
            {line:'Ngoài em ra anh có thể ở bên ai.'},
            {line:'Làm sao anh biết được.'},
            {line:'Nên tương lai đừng quá quan tâm.'},
            {line:'Tình yêu từ đó sẽ giam cầm.'},
            {line:'Có những thứ không thể can ngăn.'},
            {line:'Đừng vội buông tay người đang cầm.'},
            {line:'Đường tình tinh khôi như giấy trắng.'},
            {line:'Cùng nhau tạo ra nhiều vết mực.'},
            {line:'Nếu hỏi ngoài em sẽ yêu ai.'},
            {line:'Điều đó làm sao anh biết được.'},
            
        ],
    },

    //loveyouneedyou
    {
        img: 'images/loveyouneedyou.jpg',
        name: 'Love you need you',
        artist: 'Jayden, Wansentai',
        music: 'musics/loveyouneedyou_wansentai_jayden.mp3',
        artist_list: [
            {
                artist_name:'Jayden',
                imgsrc:'images/jayden.jpg'
            },
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
        ],
        description: [
            {line: 'Song: Love you need you'},
            {line: '———————————'},
            {line: 'Produce: Jayden'},
            {line: 'Mix & Master: Jayden'},
            {line: 'Artwork & Banner: Wansentai'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: '"Love you baby..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'},
        ],
    },

    //lunglinh
    {
        img: 'images/lunglinh.jpg',
        name: 'Lung linh',
        artist: 'Louies',
        music: 'musics/lunglinh_louies.mp3',
        artist_list: [
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
        ],
        description: [
            {line: 'Song: Lung linh'},
            {line: '———————————'},
            {line: 'Produce: xhiew'},
            {line: 'Mix & Master: KLG'},
            {line: 'Artwork & Banner: WEIASEC'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: '"anh luôn thấy điều đó khi nhìn vào đôi mắt em."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Babi em là thiên thần, làm bao nỗi nhớ trong đầu.'},
            {line:'Sẽ luôn có mặt khi cần, không bao giờ muốn em sầu.'},
            {line:'Đôi mắt em lung linh, chìm đắm khi ta nhìn nhau.'},
            {line:'Keep it trẻ con, yêu như khi lần đầu.'},

            {line:'Hình bóng lưu trong tâm trí anh không thể ngừng mơ.'},
            {line:'Nét đẹp em nếu miêu tả thì cần phải dùng thơ.'},
            {line:'Inh ỏi là dòng cảm xúc về em cùng nỗi nhớ.'},
            {line:'Làm anh ngất ngây, đắm say đến dại khờ'},
            
            {line:'Không son phấn,'},
            {line:'Trót yêu sự mộc mạc ở nơi em.'},
            {line:'Không nghe tư vấn'},
            {line:'Từ một ai khác.'},
            {line:'Chỉ quan tâm lời từ môi em.'},
            
            {line:'Nơi bờ môi, là vị ngọt anh mong nếm trải.'},
            {line:'Thời gian được gặp ngày đêm đếm mãi'},
            {line:'Si mê, anh không chối cãi.'},
            {line:'Tim chứa mình em chứ không ai.'},
            
            {line:'Anh không nói dối, không lời đường mật,'},
            {line:'Em biết anh nguyện cạnh bên tới tối, nghe chuyện em nói như là việc thường nhật.'},
            {line:'Sẽ không hề có chuyện đùa cợt.'},
            {line:'Keep it thơ ngây.'},
            {line:'Hãy, call anh mỗi khi say.'},
            {line:'Im on my wayy.'},

            {line:'Babi em là thiên thần, làm bao nỗi nhớ trong đầu.'},
            {line:'Sẽ luôn có mặt khi cần, không bao giờ muốn em sầu.'},
            {line:'Đôi mắt em lung linh, chìm đắm khi ta nhìn nhau.'},
            {line:'Keep it trẻ con, yêu như khi lần đầu.'},

            {line:'Sự vâng lời chắc chắn cho em,'},
            {line:'Không cần đắn đo thêm.'},
            {line:'Và dưới ánh trắng đôi ta slow dance.'},
            {line:'Yêu nàng ở mọi vũ trụ nhưng đừng bảo anh là Doctor Strange.'},
            {line:'Sẽ luôn dỗ mỗi khi em ghen.'},
            {line:'Vậy, thì mới xứng đáng là người em quen.'},
            
            {line:'Em cứ hỏi về lí do vậy anh sẽ không nói lời điêu đâu.'},
            {line:'Cupid gửi gắm đôi mình cung tên và thế là ta iu nhau'},
            {line:'Và khi cả hai chạm mắt, khoảnh khắc đó lại siêu lâu.'},
            {line:'Bae anh không hề lãng tránh, thẳng thắn nói "yêu em mất rùi".'},

            {line:'Babi em là thiên thần, làm bao nỗi nhớ trong đầu.'},
            {line:'Sẽ luôn có mặt khi cần, không bao giờ muốn em sầu.'},
            {line:'Đôi mắt em lung linh, chìm đắm khi ta nhìn nhau.'},
            {line:'Keep it trẻ con, yêu như khi lần đầu.'},
        ],
    },

    //luvyou
    {
        img: 'images/luvyou.jpg',
        name: 'LuVyou',
        artist: 'Custhekid',
        music: 'musics/luvyou_custhekid.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
        ],
        description: [
            {line: 'Song: LuVyou'},
            {line: '———————————'},
            {line: 'Produce: Tú'},
            {line: 'Mix & Master: Jayden'},
            {line: 'Artwork & Banner: WEIASEC'},
            {line: '———————————'},
            {line: 'Released: 2021'},
            {line: '"VÌ cũng đã lỡ yêu rồi, baby what should I do?"'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Em như 1 siêu sao, làm anh ngất ngây '},
            {line: 'Ra đây là yêu sao, làm thao thức đêm ngày '},
            {line: 'Con tim dần tiêu hao,'},
            {line: 'Từng ngày kề cạnh '},
            {line: 'Baby Im still count '},
            
            {line: 'You are my wind, in time to chill out '},
            {line: 'Mặc kệ người cũ, its time for new house'},
            {line: 'Fuck that promise, I make a real vow'},
            {line: 'be by your side, in case you feel down '},
            
            {line: 'VÌ cũng đã lỡ yêu rồi, baby what should I do '},
            {line: 'Hiện diện bên trong giấc mơ,đêm ngày sao cứ mãi nhớ mong'},
            {line: 'How can our wish come true , hey girl, can you  just tell me '},
            {line: 'Because Im luvyou ohhh luvyou '},
            
            {line: 'Đừng hỏi tại sao anh yêu em tới nỗi này whoa'},
            {line: 'Tại bởi vì ai giờ thèm tin nhắn mỗi ngày whoa'},
            {line: 'Đừng nghĩ là vì mình yêu xa, là lại kêu xa '},
            {line: 'là sẽ đổi thay khi giận dỗi này no'},
            
            {line: 'Dù là anh không biết chắc/  mình sẽ đi về đâu '},
            {line: 'I will never know, you will never know'},
            {line: 'Em đừng suy nghĩ nhiều, khi hai ta còn nhau '},
            {line: 'Nên là mai về sau, Dont leave me alone '},
            
            {line: 'VÌ cũng đã lỡ yêu rồi, baby what should I do '},
            {line: 'Hiện diện bên trong giấc mơ,đêm ngày sao cứ mãi nhớ mong'},
            {line: 'How can our wish come true , hey girl, can you  just tell me '},
            {line: 'Because Im luvyou ohhh luvyou'},
            
            {line: 'VÌ cũng đã lỡ yêu rồi, baby đã lỡ yêu em '},
            {line: 'Hiện diện bên trong giấc mơ,đêm ngày sao cứ mãi nhớ mong'},
            {line: 'How can our wish come true , hey girl, please  just tell me '},
            {line: 'Because Im luvyou'},
            {line: 'Loving you '},
            {line: 'Loving you '},
        ],
    },

    //mario
    {
        img: 'images/mario.jpg',
        name: 'Mario',
        artist: 'Louies, Yang E (Explicit)',
        music: 'musics/mario_louies_yange.mp3',
        artist_list: [
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
            {
                artist_name:'Yang E',
                imgsrc:'images/yange.jpg'
            }
        ],
        description: [
            {line: 'Song: Mario'},
            {line: '———————————'},
            {line: 'Produce: Fantom XXX'},
            {line: 'Mix & Master: Yang E'},
            {line: 'Artwork & Banner: WEIASEC & 8thbitboi'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: 'Tao là super, Mario.'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Tao là super, Mario.'},
            {line: 'Đụng vô tao là mày gặp trouble, Mario.'},
            {line: 'Tiền trong bank luôn luôn phải double, Mario.'},
            {line: 'Lời hater bên tai tao phớt lờ. '},
            {line: 'Tao là super, Mario.'},
            {line: 'Đụng vô tao là mày gặp trouble, Mario.'},
            {line: 'Tiền trong bank luôn luôn phải double, Mario.'},
            {line: 'Lời hater bên tai tao phớt lờ. '},
            {line: 'Là Mario nhưng cái chất từ Vietnamese.'},
            {line: 'Bật Radio nhạc Louies toả nhiệt vang đi.'},
            {line: 'Cùng người anh em Luigi tao qua bên Mỹ tự hào gốc Italy.'},
            {line: 'Đẩy mạnh mana bốc lửa như Natra cứu được cô công chúa dẫn nàng đi Paris.'},
            {line: 'Tao cứ thế vượt qua những level.'},
            {line: 'Bỏ xa hết những cậu bé cố chấp.'},
            {line: 'MCK Wxrdie cùng Chơi Đồ không một thằng Tỉnh ở trong Thành Phố Nấm.'},
            {line: 'Sức đề kháng tao không thể mà đùa.'},
            {line: 'Chậm mà chắc cứ gọi tao là rùa.'},
            {line: 'Đọ kĩ năng thì cũng là bằng thừa.'},
            {line: 'Hạ bệ trùm cuối mà không cần cố gắng.'},
            {line: 'Đến từng lâu đài khiêu chiến mọi tay sai.'},
            {line: 'Mấy thằng Vớ vẩn một mình tao cân Tất.'},
            {line: 'Game này dễ hoàn thành trong nay mai với trách nhiệm ngay vai dồn hết vào toàn lực.'},
            {line: 'Với từng kỹ năng Chúa trời đã ban.'},
            {line: 'Ngăn cản băng đẳng bắt cóc công chúa.'},
            {line: 'Độc đáo và sức mạnh của loài Hổ Mang.'},
            {line: 'Thằng nào dám cả gan chặn đường tao nả bang bang bang.'},
            {line: 'Khiến đời quái vật phải toang hoang.'},
            {line: 'Thua trận trốn đi trong bẻ bàng.'},
            {line: 'Dân làng tung hô trong vẻ vang.'},
            {line: 'The power of kẻ phàm.'},
            {line: 'Từng có nhiều mong ước là bước thật xa.'},
            {line: 'Từng cố để không khóc để tiến vượt qua.'},
            {line: 'Cần cố phát huy, để nhạc này catchy'},
            {line: 'Để mọi người thấy thằng Louies này khác đi.'},
            {line: 'Và tiếp là Yang E,'},
            {line: 'YANG.'},
            {line: 'Không mang Yeezy.'},
            {line: 'Tao mê Nike.'},
            {line: 'Mario feat cùng Luigi.'},
            {line: 'B slide,'},
            {line: '(Shine)'},
            {line: 'B slide.'},
            {line: '(Flow like I’m cherry pie)'},
            {line: 'Nói nghe nè,'},
            {line: 'Luôn đi nguyên gang.'},
            {line: 'Man coi bộ ngông.'},
            {line: 'Mày nghĩ lời nói đó.'},
            {line: 'Chắc tao care.'},
            {line: 'Ui sao ngộ ghê.'},
            {line: 'But if shit pisses me off.'},
            {line: 'Imma let ya know.'},
            {line: 'And if shit makes me mad.'},
            {line: 'Thì tao diss mày luôn.'},
        ]
    },
    
    //melatonin
    {
        img: 'images/chemical.jpg',
        name: '"Melatonin"',
        artist: 'Custhekid, Chillingo',
        music: 'musics/melatonin_custhekid_chillingo.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            }
        ],
        description: [
            {
                line: 'Song: "Melatonin"'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: pilotkid'
            },
            {
                line: 'Mix & Master: KLG'
            },
            {
                line: 'Artwork & Banner: Custhekid'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2021'
            },
            {
                line: '"CHEMICAL EP"'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line: 'Màn đêm xuống nâng ly rượu vang'
            },
            {
                line: 'Tối đen trong hành lang'
            },
            {
                line: 'Hát vu vơ tình tang'
            },
            {
                line: 'Một vài câu vu vơ thế thôi'
            },
            {
                line: 'Cầu mong chúc đôi ta bình an'
            },
            {
                line: 'Trút bớt đi hành trang'
            },
            {
                line: 'Bớt đi chuyện tình tan'
            },
            {
                line: 'Bình yên say trong giấc mơ'
            },
            {
                line: 'Anh ta sẽ cho điều em hằng mong ước'
            },
            {
                line: 'Biết cách ôm em'
            },
            {
                line: 'Biết cách hôn em yah yah'
            },
            {
                line: 'Để ký ức ta hòa tan vào trong nước'
            },
            {
                line: 'Em sẽ luôn vui'
            },
            {
                line: 'Đi với ai kia'
            },
            {
                line: 'Baby now your smile, anh thấy em vui hơn thường ngày'
            },
            {
                line: 'Someone by your side, làm em xinh nhiều đấy'
            },
            {
                line: 'Swiping to the right, and pick a guy cho em bờ vai'
            },
            {
                line: 'Stay by every night, love you everyday'
            },
            {
                line: 'Melatonin cùng giấc ngủ yên lành'
            },
            {
                line: 'Cho niềm tin, từng ấp ủ riêng rằng'
            },
            {
                line: '1 ai tốt sẽ đến bên em'
            },
            {
                line: 'Mãi sẽ chẳng thay lòng'
            },
            {
                line: 'Mỗi nắng sớm mây hồng'
            },
            {
                line: 'Em vẫn sẽ lay động'
            },
            {
                line: 'Người cho em 1 cánh tay vòng'
            },
            {
                line: 'Tình yêu em từ trước hay mong'
            },
            {
                line: 'Nhắm mắt bước đi để ta không phải nhìn về'
            },
            {
                line: 'Take it slowly then we will be okay'
            },
            {
                line: 'Won’t see you again, I will disappear'
            },
            {
                line: 'Ta sẽ không còn nhau, khi ở bên người kia'
            },
            {
                line: 'Ta sẽ không còn nhau, kể từ nay về sau'
            },
            {
                line: 'Em sẽ không còn đau, anh sẽ không còn sầu'
            },
            {
                line: 'Trả giấc ngủ ngon hằng đêm, chút melatonin'
            },
            {
                line: 'Nhiều năm tháng xa nhau thật ra sẽ giúp tim ta lặng im'
            },
            {
                line: 'Lặng yên everynight'
            },
            {
                line: 'Nằm yên bình say giấc'
            },
            {
                line: 'Tình yêu đã kết thúc'
            },
            {
                line: 'Và muộn phiền giờ cũng đã yên giấc'
            },
            {
                line: 'Không có những tin nhắn'
            },
            {
                line: 'Không có lời cay đắng'
            },
            {
                line: 'Đôi tim giờ trống vắng'
            },
            {
                line: 'Tất cả'
            },
            {
                line: 'Chìm trong melatonin'
            },
            {
                line: 'Trút hết Serotonin'
            },
            {
                line: 'Trút hết Oxytocin'
            },
            {
                line: 'Tan vào trong giấc mơ lửa tình'
            },
            {
                line: 'Nước mắt đã rơi đầy bình'
            },
            {
                line: 'Em cũng đã quen một mình'
            },
            {
                line: 'No tear no more crying'
            },
            {
                line: 'Everything will be alright'
            },
            {
                line: 'Sẽ không có nữa những bữa tối say đắm trong hennessy'
            },
            {
                line: 'Không có những đêm thức trắng tâm sự với trăng ngoài balcony'
            },
            {
                line: 'Và cũng không cần đến nữa những sự giúp đỡ của hơi Sati'
            },
            {
                line: 'Vì em cuối cùng đã được đắm chìm mình trong Melatonin'
            },
            {
                line: 'Baby girl em hãy sống tốt lên'
            },
            {
                line: 'Sống để được là chính em'
            },
            {
                line: 'Không còn những khi em thức suốt đêm'
            },
            {
                line: 'Say mê trong nỗi cô đơn'
            },
            {
                line: 'Không còn ai đến đưa đi lúc giữa đêm'
            },
            {
                line: 'Không còn âu lo đến phát điên'
            },
            {
                line: 'Melatonin sẽ giúp em'
            },
            {
                line: 'Cơn ác mộng và phiền muộn sẽ tan biến nhanh'
            },
            {
                line: 'Mỗi ngày sẽ là một ngày mới'
            },
            {
                line: 'Em không cần cho mình lớp mặt nạ mới'
            },
            {
                line: 'Dù cho ngày mai sẽ có nhiều điều tới'
            },
            {
                line: 'Cố gắng chiến đấu tiếp với cuộc đời'
            },
            {
                line: 'Hạnh phúc sẽ không xa vời'
            },
        ],
    },

    //mhere
    {
        img: 'images/mhere.jpg',
        name: 'MHERE',
        artist: 'Custhekid, HurryKNG',
        music: 'musics/mhere_custhekid_kng.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'HurryKNG',
                imgsrc:'images/hurrykng.jpg'
            }
        ],
        description: [
            {
                line: 'Song: MHERE'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: Origami'
            },
            {
                line: 'Mix & Master: HIEUTHUHAI '
            },
            {
                line: 'Artwork & Banner: Custhekid'
            },
            {
                line: 'Recording. VOK Records and GRD Studio'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2019'
            },
            {
                line: 'Cho những ai thắc mắc, MHERE là 1 câu hỏi và cũng là 1 câu trả lời ( Where? - Im here). '
            },
            {
                line: '1 sản phẩm nhỏ từ CUSTHEKID đến từ VOK Records và HURRY"KNG" từ GERDNANG.'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line: 'Em muốn tới nơi nào'
            },
            {
                line: 'Chẳng cần tìm đuờng vào tim anh, thôi cứ thế rơi vào'
            },
            {
                line: 'đưa đôi tay anh nắm, chắc chắn sẽ không sao đâu'
            },
            {
                line: 'đôi môi e tuơi thắm, còn để trống trong bao lâu ya ya'
            },
            {
                line: 'Vì em là bông hoa đặc biệt trong trái tim anh xơ xác'
            },
            {
                line: 'Lời tỏ tình em nên mau nhận, còn về thăm bà con cô bác'
            },
            {
                line: 'Không phải lời nói điêu, anh không phải là kẻ lừa gạt'
            },
            {
                line: 'Không bao giờ buông lời nói yêu, rồi mang trao đi nơi khác'
            },
            {
                line: 'Tất cả thứ em đang nhìn thấy, chỉ là bề ngoài'
            },
            {
                line: 'Cầm kì thi họa a đều có đủ, nói chuyện tinh thông tất cả đề tài'
            },
            {
                line: 'Tình yêu về dài là điều tất yếu, thứ mà em rất thiếu'
            },
            {
                line: 'thời buổi nay là phải phủi tay những thằng con trai đang cố níu kéo em xuống'
            },
            {
                line: 'puprle lean không uống'
            },
            {
                line: 'bỏ nicotine trong thuốc'
            },
            {
                line: 'là 1 thằng si tình giải cứu em như trong 1 bô phim công chúa'
            },
            {
                line: 'Không phải là loài ong bướm, mà để tâm tới lời dụ đường mật'
            },
            {
                line: 'Đợi em xuống khi trời đúng nửa đêm, Lướt trên phố lúc em ngồi nửa bên'
            },
            {
                line: 'Em có mong ước được đi đâu, muốn đi dc show yah yah yah'
            },
            {
                line: 'Trên tay cầm mic và em hát,'
            },
            {
                line: 'Trong khi anh rap và đi flow yah yah'
            },
            {
                line: 'Đi tới những nơi mà em muốn, gặp những người đỉnh từ VO-K'
            },
            {
                line: 'Để cho mai này em biết, k ai tốt bằng Uy đâu ayy'
            },
            {
                line: 'Em muốn tới nơi nào'
            },
            {
                line: 'Chẳng cần tìm đuờng vào tim anh, thôi cứ thế rơi vào'
            },
            {
                line: 'đưa đôi tay anh nắm, chắc chắn sẽ không sao đâu'
            },
            {
                line: 'đôi môi e tuơi thắm, còn để trống trong bao lâu ya ya'
            },
            {
                line: 'Ngọt ngào màu sắc, như là Fanta'
            },
            {
                line: 'Luớt luớt trên nuớc nuớc bằng wave alpha'
            },
            {
                line: 'Voice call qua tai phone lam anh tan ra'
            },
            {
                line: 'Nhưng chẳng thể nào kể hết, vì còn có Khang mà'
            },
            {
                line: 'Nếu em không phiền, cho anh một buổi tối hoặc là gọi anh ngay'
            },
            {
                line: 'Hủy tất cả những cuộc hẹn mấy nay, '
            },
            {
                line: 'messenger "vẫy tay" rồi lên đồ phi đến em như máy bay'
            },
            {
                line: 'Em tăng lực energy trên cả đỉnh cao, làm anh tỉnh táo'
            },
            {
                line: 'Bonus em là cà phê làm anh mê đắm, '
            },
            {
                line: 'hay bị thức trắng đêm vắng như wake up 247'
            },
            {
                line: 'Nở nụ cười và say cheese mỗi khi chụp hình selfie'
            },
            {
                line: 'Chỉ muốn thấy em khóc ngay cái phút chốc em hạnh phúc ở trên con Bentley'
            },
            {
                line: 'Facetime ngay cho mama, nói con đang ở phương xa'
            },
            {
                line: 'Kể mẹ nghe về chàng rể mà cũng chỉ để khoe luôn cái tính tình như phiên bản hồi xưa của papa'
            },
            {
                line: 'yah yah'
            },
            {
                line: 'Anh là con trai kinh tế nhưng đâu khô khan'
            },
            {
                line: 'Bao nhiêu cũng phải cố, để mà tương lai cho mấy thằng trai'
            },
            {
                line: 'Hít cả 1 line từ ống bô Lambo như là cocain'
            },
            {
                line: 'Anh có thể gầy nhưng cái ví anh phải đầy hay là béo phì'
            },
            {
                line: 'Để chăm em cho khéo, dũa luôn bộ nail, kính là phải đeo, lên đồ quấn cái belt ngang eo hiệu là Gucci'
            },
            {
                line: 'Chủ đề anh viết mãi là em, không kết thúc như là game'
            },
            {
                line: 'Click option mode chế độ 2P, song kiếm hợp bích ai chả bem'
            },
            {
                line: 'Có được em như là trúng vé số, 4:30 còn CHẢ DÒ/GIÒ'
            },
            {
                line: 'Họ gọi anh gã khờ, '
            },
            {
                line: 'đã quen tóc bổ luống và thích ăn BÁNH CUỐN là vì trong đầu anh thì em luôn có NAME/NEM'
            },
        ]
    },
    
    //Miss
    {
        img: 'images/miss.jpg',
        name: 'Miss',
        artist: 'Custhekid',
        music: 'musics/miss_custhekid.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            }
        ],
        description: [
            {line: 'Song: Miss'},
            {line: '———————————'},
            {line: 'Produce: Harmonie'},
            {line: 'Mix & Master: KLG'},
            {line: 'Artwork & Banner: Weiasec'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Đưa phone vô trong túi, để cùng em trong tay'},
            {line: 'Ngày hôm nay em không vui thì lại gần anh đêm nay'},
            {line: '24/7, 24/7 với em em '},
            {line: 'Nhìn vào ngôi sao sáng, hào nhoáng giữa đêm oh oh oh'},
            {line: 'Đôi mắt em thì chíu chíu như sao trên trời cao'},
            {line: 'Làm con tim anh yếu yếu, rơi ở nơi nào'},
            {line: 'Hình như anh còn thiếu thiếu, chắc là thiếu em rồi'},
            {line: 'Chắc là miss em rồi, chắc là miss em'},
            {line: 'Gửi trái tim anh cho em là owner'},
            {line: 'Wish we can be together'},
            {line: 'I can be your coffee, so be my sugar'},
            {line: 'Help my soul to recover '},
            {line: 'Để tình ta thành 1 câu chuyện that will never stop'},
            {line: 'Mang bản nhạc này from bottom to the top '},
            {line: 'không cần sợ em bị từ bỏ, em không cần phải lo '},
            {line: 'Đừng sợ tim giăng mạng nhện, anh đâu là peter park'},
            {line: 'Whoa whoa'},
            {line: 'Không được hấp tấp (stop)'},
            {line: 'Custhekid được đời đề cao, nhưng so với em còn thấp cấp'},
            {line: 'Lo lắng đủ từ này về sau yeah, you never know '},
            {line: 'Nên hãy nhấc điện thoại cho anh khi cần 1 người trong lúc khóc'},
            {line: 'Vì anh chỉ mong ở bên mình có em'},
            {line: 'Dù ngày hôm qua, hôm nay, hay ngày mai'},
            {line: 'Cùng mang theo nhiều câu chuyện khó quên'},
            {line: 'Rồi lại cùng đi đi đi hết ngày dài '},
            {line: 'Đưa phone vô trong túi, để cùng em trong tay'},
            {line: 'Ngày hôm nay em không vui thì lại gần anh đêm nay'},
            {line: '24/7, 24/7 với em em '},
            {line: 'Nhìn vào ngôi sao sáng, hào nhoáng giữa đêm oh oh oh'},
            {line: 'Đôi mắt em thì chíu chíu như sao trên trời cao'},
            {line: 'Làm con tim anh yếu yếu, rơi ở nơi nào'},
            {line: 'Hình như anh còn thiếu thiếu, chắc là thiếu em rồi'},
            {line: 'Chắc là miss em rồi, chắc là miss em'},
            {line: 'Baby để tối nay anh đón, rồi đưa em 1 vòng'},
            {line: 'Dù nhạc vẫn còn chưa viết, lời còn chưa thuộc xong'},
            {line: 'Công việc vẫn còn nằm y đó, giờ xếp cao 1 chồng'},
            {line: 'Nhưng mà anh cần em giúp qua cơn phiền lòng '},
            {line: 'Nah nah nah nah nah'},
            {line: 'Feel like missing you ou ou ou ou'},
            {line: 'Cause Im already falling to your eyes'},
            {line: 'Wherever you want to go, for me, its cool'},
            {line: 'Vì tình yêu biến anh thành lính rơi vào hành tinh khác'},
            {line: 'Tìm bắt tim em như thằng trinh sát'},
            {line: 'Để cả hai cùng collab trong 1 bài nhạc'},
            {line: 'Hear the queen sings, hear the king rap '},
            {line: 'Anh lại muốn có em trong vòng tay này'},
            {line: 'Cùng quấn chung chăn trong 1 nhà'},
        ]
    },

    //Moi
    {
        img: 'images/moi.jpg',
        name: 'Môi',
        artist: 'Chillingo, xa娇',
        music: 'musics/moi_chillingo_bayxa.mp3',
        artist_list: [
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },
            {
                artist_name:'xa娇',
                imgsrc:'images/bayxa.jpg'
            }
        ],
        description: [
            {line: 'Song: Môi'},
            {line: '———————————'},
            {line: 'Produce: Greafer'},
            {line: 'Mix & Master: VOK Records'},
            {line: 'Artwork & Banner: Chillingo'},
            {line: '———————————'},
            {line: 'Released: 2017'},
            {line: 'Đôi môi của em làm lành những vết xước'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Từng ngày ta mơ về những lời dối gian'},
            {line:'Vệt son che lấp những câu hát miên man'},
            {line:'Mượn từng câu ca, từng câu nói kiêu sa'},
            {line:'Luv u till the end, và hơi ấm môi em'},
            {line:'Always love the rose on your lips'},
            {line:'That you overcomplicate things'},
            {line:'Để lòng mình chia đôi một bờ môi một hình bóng tinh khôi'},
            {line:'Giờ ta đã xa cách nhau rồi, xa mãi nhau rồi...'},
            {line:'Môi, là thứ đã khiến anh yêu em nhất'},
            {line:'Kể từ lần gặp đầu tiên nó đã không để cho anh yên giấc'},
            {line:'Và môi, yêu nó hơn cả mái tóc bồng bềnh'},
            {line:'Không gặp chỉ một giây thôi cũng đủ để cho anh phải trở bệnh'},
            {line:'Và cuối cùng hai ta cũng đến được với nhau'},
            {line:'Như là định mệnh đã sắp đặt từ trước'},
            {line:'Không hề quan tâm anh là người đến sau'},
            {line:'Đôi môi của em làm lành những vết xước'},
            {line:'Xuân Diệu cũng đã từng, ví môi em như là tháng Giêng'},
            {line:'Nụ cười của em, sẽ không khiến anh phải muộn phiền'},
            {line:'Ngắm nhìn em thôi cũng đủ để cho anh thấy bình yên'},
            {line:'Khiến anh đẫ chắc rằng tình yêu ta có thể tiến'},
            {line:'Tình yêu đâu phải lúc nào cũng đẹp đâu em ơi'},
            {line:'Tình mình đâu phải sẽ luôn bền không chia đôi'},
            {line:'Tình cảm trao nhau phai mờ nhanh như đưa thoi'},
            {line:'Môi em! (Có lẽ nào em đã trao cho người mới)'},
            {line:'Với những nụ hôn em từng trao'},
            {line:'Để lại cho anh những vệt son trên áo'},
            {line:'Đôi môi của em thì táo bạo'},
            {line:'Để lại trong tim hàng ngàn vết dao'},
            {line:'Vệt son in trên áo ngày nào cũng không còn'},
            {line:'Em với ngày trước đã thay đổi như chong chóng'},
            {line:'Ngày em bỏ đi anh vẫn nhớ mãi trong lòng'},
            {line:'Vì đêm hôm trước hai ta đã phải nổi nóng'},
            {line:'Em nói môi em bây giờ môi em trở nên ít cười'},
            {line:'Và cũng không còn đỏ và đẹp như lúc trước'},
            {line:'Em nói bây giờ cũng đã đến lúc thay người'},
            {line:'Và anh đã để cho em đi mà không hề chùn một bước'},
            {line:'Tình yêu đâu phải lúc nào cũng đẹp đâu em ơi'},
            {line:'Tình mình đâu phải sẽ luôn bền không chia đôi'},
            {line:'Tình cảm trao nhau phai mờ nhanh như đưa thoi'},
            {line:'Môi em! (Chắc bây giờ em đang ở bên người mới)'},
        ]
    },

    //mongchodieugi
    {
        img: 'images/mongchodieugi.jpg',
        name: 'Mong chờ điều gì',
        artist: 'Chillingo, Chehi',
        music: 'musics/mongchodieugi_chillingo_chehi.mp3',
        artist_list: [
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },
            {
                artist_name:'Chehi',
                imgsrc:'images/chehi.jpg'
            },
        ],
        description: [
            {
                line: 'Song: Mong chờ điều gì'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: Crane Beatz'
            },
            {
                line: 'Mix & Master: VOK Records'
            },
            {
                line: 'Composer: Chehi'
            },
            {
                line: 'Artwork & Banner: Chillingo'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2019'
            },
            {
                line: '"Em làm sao để quên được hình bóng ấy...'
            },
            {
                line: '...Có những thứ thật khó để ta bước qua"'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line:'Có câu chuyện vào đông mình từng nắm tay đi hết đoạn đường'
            },
            {
                line:'Ánh mắt trìu mến nhìn nhau khẽ nói bên nhau dài lâu'
            },
            {
                line:'Hoàng hôn buông xuống nơi ta nhìn về... hướng mặt trời'
            },
            {
                line:'Vài lời yêu thương nay sao anh muốn buông lơi...'
            },
            {
                line:'Em làm sao để quên được hình bóng ấy'
            },
            {
                line:'Có những thứ thật khó để ta bước qua'
            },
            {
                line:'Em vẫn mong chờ'
            },
            {
                line:'Những câu chuyện anh nói'
            },
            {
                line:'Mưa lại rơi tíc tắc ngoài hiên anh có thấy'
            },
            {
                line:'Vẫn 14/2 nhưng giờ đây em đã vui'
            },
            {
                line:'Em đã không còn'
            },
            {
                line:'Mong chờ điều gì nữa...'
            },
            {
                line:'Không còn mong chờ điều gì'
            },
            {
                line:'Vết thương nơi tim khâu lại giờ đã dịu đi'
            },
            {
                line:'Lang thang góc phố thấy vài cặp trong cơn say tình'
            },
            {
                line:'Chụp vài pô ảnh lấy làm màn hình máy tính'
            },
            {
                line:'Đừng làm vậy trước mặt anh'
            },
            {
                line:'Những câu chuyện tình yêu giờ quá nát xin đừng đặt cạnh'
            },
            {
                line:'Vì giờ nhạt lạnh là tâm trạng duy nhất của tim anh'
            },
            {
                line:'Cupid xuất hiện anh cũng tìm đánh'
            },
            {
                line:'Câu chuyện tình mình mùa đông giờ kết thúc rồi đó Vẫn ngày 14/2 chuyện cũ rích hồi đó'
            },
            {
                line:'Quăng hết tất cả kỷ niệm không còn nỗi lo'
            },
            {
                line:'Mặc kệ bến bờ hạnh phúc anh chỉ muốn ngồi đò'
            },
            {
                line:'Không còn những ánh mắt'
            },
            {
                line:'Không còn buổi hoàng hôn'
            },
            {
                line:'Chỉ còn những mảnh cắt'
            },
            {
                line:'Cùng một dòng nước mắt xanh ngắt hoà trộn, trong tim'
            },
            {
                line:'Chuyện của mình cũng xong phim'
            },
            {
                line:'Không còn chút hy vọng tìm'
            },
            {
                line:'Em làm sao để quên được hình bóng ấy'
            },
            {
                line:'Có những thứ thật khó để ta bước qua'
            },
            {
                line:'Em vẫn mong chờ'
            },
            {
                line:'Những câu chuyện anh nói'
            },
            {
                line:'Mưa lại rơi tíc tắc ngoài hiên anh có thấy'
            },
            {
                line:'Vẫn 14/2 nhưng giờ đây em đã vui'
            },
            {
                line:'Em đã không còn'
            },
            {
                line:'Mong chờ điều gì nữa...'
            }
        ]
    },

    //Muse
    {
        img: 'images/muse.jpg',
        name: 'Muse',
        artist: 'Louies, KLG',
        music: 'musics/muse_louies_klg.mp3',
        artist_list: [
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
        ],
        description: [
            {line: 'Song: Muse'},
            {line: '———————————'},
            {line: 'Produce: Jayden'},
            {line: 'Mix & Master: KLG'},
            {line: 'Artwork & Banner: WEIASEC'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: '"Ngẩn ngơ thức cả đêm dài."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Can I be with you, babi em so yêu kiều.'},
            {line:'Không cần son và phấn, nhưng mà em vẫn so cute.'},
            {line:'Nàng thơ hằng đêm a ngóng, trông về em hoài.'},
            {line:'Ngẩn ngơ thức cả đêm dài.'},
            {line:'Khiến cho anh ngất ngây.'},

            {line:'Như hiện hữu trong tà váy trắng.'},
            {line:'Ánh trăng khiến em mê hoặc lòng người.'},
            {line:'Hương hoa từ đâu đến đây vây quanh.'},
            {line:'Vẻ đẹp phi thực của nàng, tuổi đôi mươi.'},
            
            {line:'Như trong chương truyện cổ tích.'},
            {line:'Nét đẹp của tự nhiên tồn tại mặc mọi logic.'},
            {line:'Em đội chiếc vương miện, đôi ta chấp mối lương duyên.'},
            {line:'Khắc họa nơi đôi mắt đã khiến tim anh đắm chìm.'},
            
            {line:'Và em,'},
            {line:'Nét đẹp này là vĩnh cửu, nỗi nhớ cứ kéo đến, dần lộ ra hình thù.'},
            {line:'Anh,'},
            {line:'Chẳng mong mình tỉnh ngủ, như một niềm vinh dự tìm thấy em khi sang thu.'},
            
            {line:'Trái tim đập rộn rã, níu kéo sợi tơ duyên.'},
            {line:'Lần gặp mặt vội vã làm anh bao đêm kiếm tìm.'},
            {line:'Đôi ba lời cẩu thả đã làm nên bài thơ riêng.'},
            {line:'Nàng thơ, anh mong, cuối cùng cũng lộ diện.'},
            
            {line:'Người tựa như là mơ và người tựa như là thơ.'},
            {line:'Tell me babi girl, you want to stay with me forever ?'},
            {line:'Em nói trong tình yêu gặp được anh là lần đầu.'},
            {line:'Cảm xúc hòa làm một khi mà đôi ta gặp nhau.'},
            {line:'Phòng vệ làm gì vì sẽ không cần đâuu.'},

            {line:'Can I be with you, babi em so yêu kiều.'},
            {line:'Không cần son và phấn, nhưng mà em vẫn so cute.'},
            {line:'Nàng thơ hằng đêm a ngóng, trông về em hoài.'},
            {line:'Ngẩn ngơ thức cả đêm dài.'},
            {line:'Khiến cho anh ngất ngây.'},

            {line:'Khiến cho tâm trí anh ngày đêm tương tư.'},
            {line:'Em mang mùi hương như của ngàn loài hoa.'},
            {line:'Bài nhạc này như một bức tâm thư.'},
            {line:'Anh gửi tâm tư hòa cùng lời ca.'},
            
            {line:'Là chàng si tình bởi vẻ hào nhoáng.'},
            {line:'Một bước tiến tới chẳng kẻ nào dám.'},
            {line:'Em chỉ đơn thuần cần người ủi an.'},
            {line:'Tình cảm thật lòng cũng đủ viên mãn.'},
            
            {line:'Vẻ đẹp dịu hiền anh mong níu giữ.'},
            {line:'Mãi mãi khoảnh khắc này nàng thiếu nữ.'},
            {line:'Đem trao tất cả cảm xúc, yêu là không quản thúc.'},
            {line:'Tự do như khi phiêu lưu.'},
            
            {line:'Đôi ta slow dance dưới ánh đèn đường.'},
            {line:'Môi chạm con tim rung lên.'},
            {line:'Bên em, anh luôn tránh phiền muộn.'},
            {line:'Dọn đường cho Cupid gửi ta cung tên.'},

            {line:'Người tựa như là mơ và người tựa như là thơ.'},
            {line:'Tell me babi girl, you want to stay with me forever ?'},
            {line:'Em nói trong tình yêu gặp được anh là lần đầu.'},
            {line:'Cảm xúc hòa làm một khi mà đôi ta gặp nhau.'},
            {line:'Phòng vệ làm gì vì sẽ không cần đâuu.'},

            {line:'Can I be with you, babi em so yêu kiều.'},
            {line:'Không cần son và phấn, nhưng mà em vẫn so cute.'},
            {line:'Nàng thơ hằng đêm a ngóng, trông về em hoài.'},
            {line:'Ngẩn ngơ thức cả đêm dài.'},
            {line:'Khiến cho anh ngất ngây.'},
        ],
    },

    //naughtyboys
    {
        img: 'images/naughtyboys.jpg',
        name: 'Naughty Boys',
        artist: 'Chillingo, Wansentai, Gavin G',
        music: 'musics/naughtyboys_chillingo_wansentai_gaving.mp3',
        artist_list: [
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Gavin G',
                imgsrc:'images/gaving.jpg'
            },
        ],
        description: [
            {
                line: 'Song: Bỏ nhau phía sau'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: Tú'
            },
            {
                line: 'Mix & Master: Chillingo'
            },
            {
                line: 'Banner & Artwork: Wansentai'
            },
            {
                line: 'Recording: VOK Records'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2021'
            },
            {
                line: 'Sau NICE TRY, chillingo và Wansentai quyết tâm đổi mới hình ảnh thành NAUGHTY BOYS.'
            },
            {
                line: 'Sản phẩm này có sự hợp tác cùng với Gavin G đến từ GoAllDay - JustGo, đánh dấu bước phát tiển mới cho cả hai tổ đội.'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line:'Not Available.'
            }
        ]
    },

    //nghe noi em da co nguoi moi
    {
        img: 'images/nghenoiemdaconguoimoi.jpg',
        name: '"nnedcnm"',
        artist: 'Wansentai, Jayden',
        music: 'musics/nghenoiemdaconguoimoi.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Jayden',
                imgsrc:'images/jayden.jpg'
            },
        ],
        description: [
            {line: 'Song: Nghe nói em đã có người mới'},
            {line: '———————————'},
            {line: 'Produce: Jayden '},
            {line: 'Mix & Master: Jayden'},
            {line: 'Recording: VOK Records '},
            {line: '———————————'},
            {line: 'Released: 2021'},
            {line: '"Nghe nói em đã có người mới" là sản phẩm được đầu tiên trong album "SENSE OF MINDS". Đây cũng là album đầu tay của Wansentai kết hợp cùng producer kiêm artist góp giọng trong album lần này. Album gồm 5 tracks và sẽ được release theo từng track vào khung giờ 8pm chủ nhật hàng tuần, SO STAY TUNED!!!!!!'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Nghe nói em đã có người mới'},
            {line: 'Một người ko hề như anh chỉ biết nói mà không giữ lời'},
            {line: 'Một người khiến em tự hào và up đầy trên story'},
            {line: 'Nhưng tại sau đã lâu như vậy em vẫn còn trong tâm trí'},
            
            {line: 'Anh chỉ muốn được thấy em cười'},
            {line: 'Dù cho em có bước cùng ai'},
            {line: 'Anh chỉ mong họ làm em vui'},
            {line: 'Ko phạm phãi lỗi anh từng sai'},
            {line: 'Vì anh không muốn em buồn '},
            {line: 'Lệ lại tuông trên bờ mi'},
            {line: 'Anh không muốn tay em lại buông'},
            {line: 'Và thêm một nữa lại đi'},
            
            {line: 'Và nếu như em quay về thì xin em biết là anh vẫn còn đợi'},
            {line: 'Vẫn còn viết ra nhiều lời thiêt tha dù cho ko có em một đời'},
            {line: 'Anh vẫn như in nụ cười hôm đó khi lần đầu ta gặp mặt'},
            {line: 'Và anh vẫn như in hôm đó khi lệ em lăn trên mi mắt'},
            
            {line: 'Damn'},
            {line: 'Anh xin lỗi vì những gì anh lm'},
            {line: 'Đã lm tim em tan vỡ mà ko thể ở lại để mà chữa lành'},
            {line: 'Đã làm em mang màu buồn vây xung quanh toàn điều u ám'},
            {line: 'Và một điều cuối anh mong mỏi là họ sẽ làm em cười thay anh '},
            
            {line: 'Chỉ cần thấy em cười'},
            {line: 'Là lòng anh đã yên'},
            {line: 'Anh như là một gã điên'},
            {line: 'Dù có ra sao vẫn yêu ngã nghiêng'},
            
            {line: 'Và nhắc cho em lần cuối là ở nơi đây vẫn có anh chờ'},
            {line: 'Luôn cho em bở vai và luôn sau  em nên chớ có lo'},
            {line: 'Dù cho anh có muốn có muốn thấy em cười nhưng sao lòng quặn đau khi anh nhìn em'},
            {line: 'Dù cho anh có muốn có muốn khiên em vui nhưng lại càng làm cho lòng anh đau thêm'},
            {line: 'Dù cho em đã có ai bước đi bên em kia rồi mà sao mình anh day dứt không thôi'},
            {line: 'Chỉ nốt hôm nay thôi chỉ nốt đêm nay rồi'},
            {line: 'Anh biết là em sẽ mãi không quay trở lại '},
            {line: 'Anh nhớ như in buổi chiều hôm đó'},
            {line: 'Bầu trời không mưa không nắng nhưng đổi lại là thật nhiều cơn gió'},
            {line: 'Cuốn trôi đi bao kỷ niệm và rồi cũng cuốn cả em đi xa'},
            {line: 'Hốc mắt anh thì cũng đã khô sau bao lần khóc vì chuyện 2 ta'},
            
            {line: 'Khoảng cách địa lý trăm ngàn dặm để rồi anh phải ngậm nhắm cô đơn'},
            {line: 'Hình ảnh em trong tim như xăm, anh không thể xoá vì càng đau hơn'},
            {line: 'Nước mắt kia vị mặn nhưng sao anh nuốt lại ra vị cay'},
            {line: 'Sâu bên trong lại có vị đắng vì tiếc một chút vị ngọt từ em babe'},
            {line: 'Giữ lấy nỗi buồn của anh đổi lại em yên vui nơi ấy'},
            {line: 'Liệu rằng  em có biết được là'},
            {line: 'Anh trái tim đã nát tan'},
            {line: 'Vì em'},
            {line: 'Vì ai đó không quay trở về nơi này'},
            {line: 'Chỉ có riêng anh với anh'},
            {line: 'Căn phòng lạnh vắng'},
            
            {line: 'Dù cho anh có muốn có muốn thấy em cười nhưng sao lòng quặn đau khi anh nhìn em'},
            {line: 'Dù cho anh có muốn có muốn khiên em vui nhưng lại càng làm cho lòng anh đau thêm'},
            {line: 'Dù cho em đã có ai bước đi bên em kia rồi mà sao mình anh day dứt không thôi'},
            {line: 'Chỉ nốt hôm nay thôi chỉ nốt đêm nay rồi'},
            {line: 'Anh biết là em sẽ mãi không quay trở lại'},
        ],
    },

    //nguoitinhtrongmo
    {
        img: 'images/nguoitinhtrongmo.jpg',
        name: 'Người tình trong mơ',
        artist: 'xa娇, dwalker, Wildde',
        music: 'musics/nguoitinhtrongmo_bayxa_dwalker_wildde.mp3',
        artist_list: [
            {
                artist_name:'xa娇',
                imgsrc:'images/bayxa.jpg'
            },
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            },
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            },
        ],
        description: [
            {line: 'Song: Người tình trong mơ'},
            {line: '———————————'},
            {line: 'Produce: zeekybeats'},
            {line: 'Rec/Mix/Master: VOK Records'},
            {line: 'Banner: xa娇'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: '"người tình trong mơ được hình thành không trùng lối..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'thư tay ngày cuối: "anh chưa thôi nhớ em"'},
            {line:'chỉ là giấc mơ, cô đơn đêm 1 mình, trong lòng anh vắng em'},
            {line:'rồi ta cũng sẽ lại gặp nhau, '},
            {line:'thành phố vừa dừng chân, là lúc anh tỉnh thức'},
            {line:'và Sài Gòn anh còn là vết cắt trong tim'},
            {line:'là lúc vết nứt này vẫn khắc không yên'},
            {line:'nhắc tên em, anh chắc không quên'},
            {line:'vậy mắt môi em, gửi yêu thương'},
            {line:'lâu ngày trong tim anh vẫn giấu, '},
            {line:'người tình trong mơ anh biết tìm nơi đâu?'},
            {line:'cho những lần đầu tiên, ngày đầu ta hò hẹn'},
            {line:'em nở nụ cười duyên, trong những lần trò chuyện'},
            {line:'những lúc ta hàn huyên, là khi ta cầu nguyện'},
            {line:'câu chuyện sẽ thật dài, 100 năm hơn 100 trang'},
            {line:'nhưng ảo mộng, đâm nát thấu tâm can'},
            {line:'là không thật nên em vội từ chối'},
            {line:'vội bỏ anh đi, chia đường ra mười lối'},
            {line:'đời trôi vậy thôi anh lại tìm đến hơi men'},
            {line:'chỉ mong một lần, khi say được gặp em'},
            {line:'trốn khỏi cô đơn'},
            {line:'thành phố này đơn phương'},
            {line:'dòng người vẫn tấp nập, tự hỏi rằng ai mình nên thương?'},

            {line:'dựa vào anh nơi mình say, loay hoay qua bao khó nhằn'},
            {line:'khi đời đi quá nhanh'},
            {line:'ngay trước mắt, lòng anh thắt,'},
            {line:'mặc cơn mơ nào đắng cay'},
            {line:'mặc đau đớn nào ngất ngây'},
            {line:'thì anh sẽ chẳng buông đâu, dù mình thật khác nhau'},
            {line:'dù tình chưa tới đâu, dù lòng có dối nhau'},
            {line:'người tình trong mơ, nụ cười ngây thơ,'},
            {line:'dù cứ sống với bao muộn phiền'},
            {line:'đi cùng nhau sẽ thấy an nhiên'},
            {line:'hình bóng anh chờ'},
            {line:'giữa sương mờ'},
            {line:'có ai ngờ rằng trong giấc mơ'},
            {line:'anh cứ gọi tên em theo thói quen'},
            {line:'đôi khi cần nhau lúc giữa đêm'},
            {line:'giờ thì chẳng còn buồn nhung nhớ'},
            {line:'khi tình đã lỡ, đi ngược thời gian'},
            {line:'tận đáy miên man những cơn say'},
            {line:'là đôi tay, anh chẳng còn được thấy nụ cười ngày ấy, nơi phố hoa ta từng đi qua'},

            {line:'người tình trong mơ được hình thành không trùng lối'},
            {line:'đi trước người buông tay nơi địa ngục đã từng tới'},
            {line:'là do anh tạo ra vì không quen với chuỗi ngày bận rộn'},
            {line:'rồi lang thang chui vào góc phòng nghe tin thoại lại lan man'},
            {line:'là hồi ức được vẽ ra dưới hình dạng trong giấc mơ'},
            {line:'chỉ xuất hiện rồi biến mất tạo cảm giác không nặng lòng'},
            {line:'cho tiểu thuyết này kết thúc khi vừa hết một sấp vở'},
            {line:'cho anh không vấn vương thêm một. lần. nào. nữa'},
            {line:'lời nói cuối cùng không thật cần bào chữa'},
            {line:'ừ thì có sao đâu! Nơi trò chuyện ở trong não'},
            {line:'khoảng thời gian bị giới hạn trong vòng là 8 giờ'},
            {line:'trước khi anh bị đánh thức trở về lại buổi sáng mờ'},
            {line:'tận đáy miên man là cả những cơn say'},
            {line:'tình đi ngược vào dòng thời gian, tìm em và những vòng tay người ôm lấy'},
            {line:'buồn là buồn nhưng đâu buông'},
            {line:'và chờ thì chờ nhưng ai trong giấc mơ'},
            {line:'lãng, quên là cách em bỏ đi nhưng ở trong mơ vốn không phải là như vậy'},
            {line:'mơ là mơ thôi chứ đâu phải thực tại chỉ biết thức dậy mà ghi lại câu chuyện'},
            {line:'nối tiếp đằng sau những thứ ấy là những dòng chữ (em để quên dành cho anh)'},
        ],
    },

    //Nice Try
    {
        img: 'images/nicetry.jpg',
        name: 'Nice Try',
        artist: 'VOK',
        music: 'musics/nicetry_vok.mp3',
        artist_list: [
            {
                artist_name:'Jayden',
                imgsrc:'images/jayden.jpg'
            },
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            }
        ],
        description: [
            {line: 'Song: Nice Try'},
            {line: '———————————'},
            {line: 'Produce: Tú'},
            {line: 'Mix & Master: Jayden'},
            {line: 'Artwork & Banner: WEIASEC'},
            {line: 'Editor: Jayden'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: 'Nice Try/Trai đánh dấu cột mốc 4 năm hoạt động của VOK Records. Đây là một dự án mà VOK đã bỏ rất nhiều công sức và thời gian để hoàn thiện.'},
            {line: 'Tụi mình hy vọng sẽ mang đến cho các bạn một điều gì đó mới mẻ cho ngày Giáng sinh này.'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {
                line:'Bóng dáng ai đó nhẹ cất bước lướt qua nơi đây'
            },
            {
                line:'Làm bao chàng trai nhìn theo đường cong em rồi ngất ngây'
            },
            {
                line:'Duyên cớ gì đây mà sao em xích qua bên này'
            },
            {
                line:'Đôi mắt em liếc qua loé lên phát anh chợt biết ngay babe'
            },
            {
                line:'Đừng ghé vào sát như thế anh đã biết là em muốn gì... muốn gì đây...'
            },
            {
                line:'Vậy nên là bớt xích xích vô đi em nghe anh nói này... nói này... babe'
            },
            {
                line:'Anh đẹp trai nhà lành học chăm ko biết yêu'
            },
            {
                line:'Ba mẹ anh dặn dò vậy thật anh nói điêu làm chi'
            },
            {
                line:'Em tà lưa vây thì im sorry ill say no way no way no way'
            },
            {
                line:'Yeam imma nice trai, baby im nice trai đừng như vậy'
            },
            {
                line:'No way, i say theres no way oh baby'
            },
            {
                line:'Nice try, baby im nice trai đừng như vậy'
            },
            {
                line:'No way, i say theres no way oh baby'
            },
            {
                line:'Cứ đến lúc chiều tà là ‘ em đang cô đơn lắm đây’'
            },
            {
                line:'Pick me up right now vì em đang muốn nắm tay'
            },
            {
                line:'Anh còn bao việc nhà, mẹ anh ko cho đắm say'
            },
            {
                line:'Nên đành thôi em à cuz im nice trai, nice try'
            },
            {
                line:'Đừng cuốn anh vào cuộc chơi của em nữa'
            },
            {
                line:'Quần áo chưa phơi, tivi phải đem sửa'
            },
            {
                line:'Còn bao công việc còn chất đống phải làm xong vì anh muốn mình phải kiếm thêm nữa'
            },
            {
                line:'Boheme ko vào, rủ đi anh chửi, anh chỉ lên chùa cầu duyên'
            },
            {
                line:'Ko mấy em đào, to hơn cả bưởi, a phải về nhà với nỗi sầu riêng'
            },
            {
                line:'Hey baby girl, e có cố gắng gọi a cùng party all night'
            },
            {
                line:'Sorry a phải đành ko đi, sáng bận ngồi học online'
            },
            {
                line:'Xong thì cầm mic rồi viết rap, làm nhạc chill trên nền beat trap'
            },
            {
                line:'Biến tụi hater này thành fan, biến fan thành người mình tín thác'
            },
            {
                line:'Thôi thì nice try, nếu chỉ là chơi thì thôi mình say bye'
            },
            {
                line:'Anh không hẹn 1 đêm, thứ tồn tại được nay mai, vì chơi thì không thể quay lại, babe anh còn ngây dại'
            },
            {
                line:'Cả đời sống như là nai, nên là em đừng gây hại'
            },
            {
                line:'Cupid/ cú bắn cung tên là trúng, nếu yêu em là đúng thì thôi anh thà làm người sai'
            },
            {
                line:'Anh đẹp trai nhà lành học chăm ko biết yêu'
            },
            {
                line:'Ba mẹ anh dặn dò vậy thật anh nói điêu làm chi'
            },
            {
                line:'Em tà lưa vây thì im sorry ill say no way no way no way'
            },
            {
                line:'Yeam imma nice trai, baby im nice trai đừng như vậy'
            },
            {
                line:'No way, i say theres no way oh baby'
            },
            {
                line:'Nice try, baby im nice trai đừng như vậy'
            },
            {
                line:'No way, i say theres no way oh baby'
            },
            {
                line:'Ya anh là trai tốt, try hard all day, ko cho một ai hốt flirting no way'
            },
            {
                line:'I am a good boi, baby no lies aint know a fucking shit, baby dont come close,'
            },
            {
                line:'2 ta sẽ ko hợp đâu, bên nhau sẽ ko bền lâu'
            },
            {
                line:'Mẹ anh chỉ cần nàng dâu, ba anh bảo rằng đừng yêu'
            },
            {
                line:'Chừng nào con còn chưa yêu thì trái tim con sẽ bớt nhiều buồn đau'
            },
            {
                line:'Trai tốt là ko đi vào bar, trai tốt làm thêm để phụ mẹ ở west edmonton mall'
            },
            {
                line:'Trai tốt việc nhà cứ phải lo, trai tốt tặng ba đôi nike và cái áo michael kors'
            },
            {
                line:'Trai tốt là ko đi vào club'
            },
            {
                line:'Trai tốt cũng đi vào pub'
            },
            {
                line:'Trai tốt thức khuya học hành chăm chỉ dậy sớm cũng chỉ để phóng thẳng đến lớp'
            },
            {
                line:'Ya ya cho anh xin phép đc về trc nà, công việc ở nhà còn đầy ra'
            },
            {
                line:'Khi mà tiền trong túi chưa đến sáu số không'
            },
            {
                line:'Nếu ko làm lại bị sếp rầy la'
            },
            {
                line:'A chỉ đưa e về trc cổng nhà, còn lên phòng thì thôi a ko ham'
            },
            {
                line:'Đi chơi a chỉ mang tấm lòng này, còn áo mưa thì anh đây ko mang'
            },
            {
                line:'Anh thì chưa từng biết yêu là gì, nên thôi anh xin ko chơi đâu'
            },
            {
                line:'Imma goodboi sài thành, nên chưa một lần anh đi chơi thâu đêm'
            },
            {
                line:'Đừng bảo anh là đi một đêm thôi, vì anh thấy đc những gì sau mắt em'
            },
            {
                line:'Một đêm say but i cannot stay'
            },
            {
                line:'Cuz imma gud boi its time to say goodbye'
            },
            {
                line:'Phải nói cho e biết bao lần đây'
            },
            {
                line:'Để em có thể hiểu đc ý anh... hiểu đc ý anh'
            },
            {
                line:'Listen to me babe'
            },
            {
                line:'Cuz i dont wanna make this awkward anymore'
            },
            {
                line:'Anh đẹp trai nhà lành học chăm ko biết yêu'
            },
            {
                line:'Ba mẹ anh dặn dò vậy thật anh nói điêu làm chi'
            },
            {
                line:'Em tà lưa vây thì im sorry ill say no way no way no way'
            },
            {
                line:'Yeam imma nice trai, baby im nice trai đừng như vậy'
            },
            {
                line:'No way, i say theres no way oh baby'
            },
            {
                line:'Nice try, baby im nice trai đừng như vậy'
            },
            {
                line:'No way, i say theres no way oh baby'
            },
        ]
    },

    //Night Fall
    {
        img: 'images/nightfall.jpg',
        name: 'Night Fall',
        artist: 'dwalker',
        music: 'musics/nightfall_dwalker.mp3',
        artist_list: [
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            }
        ],
        description: [
            {line: 'Song: "Night Fall"'},
            {line: '———————————'},
            {line: 'Mix & Master: VOK Records'},
            {line: 'Artwork: Google'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: 'Tell me where you go...'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Not Available.'},
        ]
    },

    //Nikotine
    {
        img: 'images/chemical.jpg',
        name: '"Nikotine"',
        artist: 'Custhekid',
        music: 'musics/nikotine_custhekid.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            }
        ],
        description: [
            {line: 'Song: "Nikotine"'},
            {line: '———————————'},
            {line: 'Produce: VUX ON THE MOON'},
            {line: 'Mix & Master: HIEUTHUHAI'},
            {line: 'Photograph: Enache Georgiana'},
            {line: 'Artwork & Banner: Custhekid'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: '"CHEMICAL EP"'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: '1 giờ trời tối màu'},
            {line: 'Trên tay cầm gói thuốc'},
            {line: 'Chao đão vì nhói đầu'},
            {line: 'Cả ngày qua đã ói suốt'},
            {line: 'Thằng bạn đã nói trước'},
            {line: 'Cho dù mày có sầu'},
            {line: 'Cho dù là khó lòng'},
            {line: 'Trói buộc linh hồn nhói buốt'},
            {line: 'Nicotine này từng đắng'},
            {line: 'Đọng lại vị khó nuốt'},
            {line: 'Mồi lửa hong khô'},
            {line: 'Trên đôi mi đó ướt, ừ'},
            {line: 'Siết rồi uống, lý do gì để khướt từ'},
            {line: 'Lý do gì để khướt từ'},
            {line: 'Tâm lại tái hiện khái niệm cái thiện'},
            {line: 'Ý nguyện mình là giữ được phần trách nhiệm'},
            {line: 'Em thì thí nghiệm tình thuốc, bao thằng chuốc rồi dying'},
            {line: 'miệng toàn lời lừa dối, đến bây giờ còn ai tin'},
            {line: 'I shouldnt try things I couldnt have'},
            {line: 'Tình yêu thật kì lạ, qua góc nhìn khác'},
            {line: 'Tâm trí bị xé tan từng mảnh rời rạc'},
            {line: 'Dù đau buồn thế nào, vẫn thế mình hát'},
            {line: 'Nicotine. Nicotine'},
            {line: 'Không còn tin. Không còn tin'},
            {line: 'Knock knock ai, còn ở đó'},
            {line: 'Nhận lại chỉ là sự lặng thinh'},
            {line: 'Rớt 1 trip từ nóc'},
            {line: 'Mệt thiếp 1 lúc vào góc'},
            {line: 'Tin lời nói của em'},
            {line: 'Không khác gì như 1 thằng ngốc'},
            {line: 'Không lời nói ủi an'},
            {line: 'Rồi lại tìm đến beat của Khang!!!'},
            {line: 'Viết rồi chết tiếp'},
            {line: 'Tao giờ không quên nỗi nữa man'},
            {line: 'Cảm giác như có thể nhảy khỏi tòa nhà cao ốc'},
            {line: 'như ở trên bầu trời'},
            {line: 'Có 1 vì sao khóc'},
            {line: 'Cảm giác như hóc mắt'},
            {line: 'Giờ không còn đủ nước để tuôn'},
            {line: 'Hay là chân thắng để buông'},
            {line: 'Mặc kệ mạng mình lao dốc'},
            {line: 'Yah hình nào in bóng'},
            {line: 'đọng lại tin nhắn'},
            {line: 'Từng dòng inbox'},
            {line: 'Anh biết em giờ yêu hắn'},
            {line: 'không phải Bill Gate, có tiền làm em luôn vui'},
            {line: 'Nhưng vì là Juliet, mà romeo phải buông xuôi'},
            {line: 'Marlboro ở trên môi ye ah'},
            {line: 'Nicotine chảy trong tim ye ah'},
            {line: 'Không hợp nữa nên thôi ye ah'},
            {line: 'Đièu mà mãi mãi không tin ye ah'},
        ]
    },

    //oxytocin
    {
        img: 'images/oxytocin.jpg',
        name: '"Oxytocin"',
        artist: 'Custhekid, Yang E',
        music: 'musics/oxytocin_custhekid_yange.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Yang E',
                imgsrc:'images/yange.jpg'
            }
        ],
        description: [
            {
                line: 'Song: "Oxytocin"'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: Jody'
            },
            {
                line: 'Mix & Master: HIEUTHUHAI & Yang E'
            },
            {
                line: 'Artwork & Banner: Custhekid'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2020'
            },
            {
                line: '"CHEMICAL EP"'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line: 'Đưa em đi thật xa khỏi thế giới này yah'
            },
            {
                line: 'Lên xe anh khi em vừa mới dậy ah'
            },
            {
                line: 'Everyday anh luôn có bên'
            },
            {
                line: 'Oxytoxin làm ta khó quên'
            },
            {
                line: 'Không còn xa như trăng và sao'
            },
            {
                line: 'Đưa em đi về nơi, hai ta mãi sẽ có đuợc nhau ah'
            },
            {
                line: 'Sẽ không phải buồn đâu mà'
            },
            {
                line: 'Vì anh sẽ ở bên em cho tới tận mai sau này'
            },
            {
                line: 'Trên chiếc xe SH vuợt qua vuờn sao băng'
            },
            {
                line: 'chạy trốn hiện tại nên trên đuờng lao nhanh'
            },
            {
                line: 'Có nhau bên cạnh trong những lần gian khó'
            },
            {
                line: 'Giữ gìn nụ hôn đó mà mỗi sáng em thuờng trao anh ah'
            },
            {
                line: 'Bỏ ưu phiền vào hennessy'
            },
            {
                line: 'Để rồi mang dẹp đi'
            },
            {
                line: 'những nguời làm em lem hàng mi'
            },
            {
                line: 'anh là don quixote, nhưng không ảo về cối xây gió'
            },
            {
                line: 'nhưng thật chất là tói nay đó, cùng kị mã tới mang nàng đi ah'
            },
            {
                line: 'truyền oxytoxin lên thần kinh giao cảm'
            },
            {
                line: 'chEMical sẽ làm em mê khi con tim sao lãng'
            },
            {
                line: 'bỏ những người yêu cũ, em từng kể tên'
            },
            {
                line: 'vì Cus giúp em có thể quên, lời anh ta thao giảng'
            },
            {
                line: 'post ảnh mình lên trên Insta'
            },
            {
                line: 'thằng ngố coi em là vịt, bên anh giờ đẹp tựa như thiên nga'
            },
            {
                line: 'Không cần lên bar, không cần hơi thuốc'
            },
            {
                line: 'vì anh là chuyên gia, biến gai nhọn đâm tim em vơi mất'
            },
            {
                line: 'khi em không hề hay biết, như là ninja'
            },
            {
                line: 'Đưa em đi thật xa khỏi thế giới này yah'
            },
            {
                line: 'Lên xe anh khi em vừa mới dậy ah'
            },
            {
                line: 'Everyday anh luôn có bên'
            },
            {
                line: 'Oxytoxin làm ta khó quên'
            },
            {
                line: 'Không còn xa như trăng và sao'
            },
            {
                line: 'Đưa em đi về nơi, hai ta mãi sẽ có đuợc nhau ah'
            },
            {
                line: 'Sẽ không phải buồn đâu mà'
            },
            {
                line: 'Vì anh sẽ ở bên em cho tới tận mai sau này'
            },
            {
                line: 'Ở bên em cho tới tận mãi sau này yeah'
            },
            {
                line: 'Đốt điếu thuốc kia lên'
            },
            {
                line: 'Ung thư tận mãi sau này'
            },
            {
                line: 'Nhìn phía trước mà xem, đường còn dài tới đâu'
            },
            {
                line: 'Chỉ quan trọng người phía trước là em, mình đi cùng với nhau'
            },
            {
                line: 'I don’t know, I don’t know, I don’t know why'
            },
            {
                line: 'Mẹ anh nói yêu em khổ thì cũng đâu sai'
            },
            {
                line: 'Yea I know, yea I know, yea I know it, girl'
            },
            {
                line: 'But sometimes I don’t give a fuck about it, girl'
            },
            {
                line: 'Baby tình yêu này là dành cho em'
            },
            {
                line: 'Và nó là real, em chẳng cần phải đắn đo thêm'
            },
            {
                line: 'Real love, real bag, Gucci, tất cả là real hết'
            },
            {
                line: 'Tình cảm rẻ tiền kia của người cũ chắc em không cần đâu'
            },
            {
                line: 'Đêm nay cùng với K, anh và em được gần nhau'
            },
            {
                line: 'Quyết định này sẽ đúng em chẳng phải cược lần sau'
            },
            {
                line: 'Em không phải buồn đâu mà'
            },
            {
                line: 'Anh sẽ lo cho em tất cả, và tương lai em sau này'
            },
            {
                line: 'Mình gần bên nhau trong đêm tối'
            },
            {
                line: 'Cùng bay cao như em nói'
            },
            {
                line: 'Bên ngôi sao kia babe'
            },
            {
                line: 'Cứ bước tiếp đi bên anh lần này'
            },
            {
                line: 'Ở cạnh bên em'
            },
            {
                line: 'Chỉ thế thôi'
            },
            {
                line: 'Thì từ nay sẽ không còn buồn nữa đâu'
            },
        ]
    },

    //phonecall
    {
        img: 'images/phonecall.jpg',
        name: 'Phone call',
        artist: 'Wildde, Custhekid, dwalker',
        music: 'musics/phonecall_wildde_custhekid_dwalker.mp3',
        artist_list: [
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            },
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            },
        ],
        description: [
            {line: 'Song: Phone call'},
            {line: '———————————'},
            {line: 'Produce: omgsora'},
            {line: 'Rec/Mix/Master: HIEUTHUHAI'},
            {line: 'Artwork & Banner: WEIASEC'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: '"Dạo quanh vòng phố Chicago..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'},
        ],
    },

    //phuongtan
    {
        img: 'images/phuongtan.jpg',
        name: 'Phượng tàn',
        artist: 'xa娇, Chillingo',
        music: 'musics/dolamotcauchuyenbuon_bayxa_chillingo.mp3',
        artist_list: [
            {
                artist_name:'xa娇',
                imgsrc:'images/bayxa.jpg'
            },
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },
        ],
        description: [
            {line: 'Song: Phượng tàn'},
            {line: '———————————'},
            {line: 'Produce: primabeats'},
            {line: 'Rec/Mix/Master: VOK Records'},
            {line: 'Banner: xa娇'},
            {line: '———————————'},
            {line: 'Released: 2018'},
            {line: '"bước về nhà, chậm từng chút..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'màu nắng'},
            {line:'lúc ta gặp nhau trên con phố dài'},
            {line:'làm ấm áp bầu trời bát ngát'},
            {line:'có tiếng hát ai vội bay'},
            {line:'tìm đi nơi xa'},
            {line:'chẳng còn thấy đâu con đường về nhà'},
            {line:'thôi đừng mơ'},
            {line:'thôi làm thơ vì tôi có biết yêu đâu mà'},
            {line:'nắng dường như không biết'},
            {line:'tôi đang yêu nàng, hay sao'},
            {line:'mà cứ đi trước để tôi cứ bước một mình vậy thôi'},
            {line:'tình như nắng'},
            {line:'chẳng hề biết tôi có bao giờ đơn côi'},
            {line:'đợi mãi'},
            {line:'(...)'},
            {line:'màu hoàng hôn xuề xòa'},
            {line:'bước về nhà, chậm từng chút'},
            {line:'giữa đường phố nề hà'},
            {line:'gặp được em, chiều tháng bảy'},
            {line:'giữa đồng cỏ, và từng hứa thề là em rồi không xa,'},
            {line:'rồi sẽ tước hết'},
            {line:'"những cái câu ca"'},
            {line:'làm em nhức chết'},
            {line:'dù có phong ba, ta sẽ bước tiếp'},
            {line:'mặc kệ giông bão, ta vẫn bước tiếp'},
            {line:'màu nắng vẫn xuề xòa,'},
            {line:'sao ánh vàng chỉ lác đác'},
            {line:'sao đường phố vẫn nề hà'},
            {line:'sao cánh đồng không bát ngát'},
            {line:'thì ra em'},
            {line:'chỉ là màu nắng'},
            {line:'hơi ấm không là em'},
            {line:'anh chỉ là ngọn cỏ'},
            {line:'sương lấp sau màn đêm'},
            {line:'không tồn tại duyên số'},
            {line:'chỉ biết viết thơ,'},
            {line:'tặng em'},
        ],
    },

    //pick you up
    {
        img: 'images/pickyouup.jpg',
        name: 'Pick You Up',
        artist: 'Jayden, Wansentai, Gen Ji',
        music: 'musics/pickyouup_wansentai_jayden_genji.mp3',
        artist_list: [
            {
                artist_name:'Jayden',
                imgsrc:'images/jayden.jpg'
            },
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Gen Ji',
                imgsrc:'images/genji.jpg'
            },
        ],
        description: [
            {line: 'Song: Pick You Up'},
            {line: '———————————'},
            {line: 'Produce: Jayden'},
            {line: 'Recording: VOK Records & RBA Records'},
            {line: 'Mix & Master: Jayden'},
            {line: 'Artwork & Banner: Wansentai'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: '"Dạo quanh vòng phố Chicago..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records x RBA Club'}
        ],
        song_lyrics:[
            {line:'Not Available.'},
        ],
    },

    //pure
    {
        img: 'images/pure.jpg',
        name: 'Pure',
        artist: 'Wildde, dwalker',
        music: 'musics/pure_wildde_dwalker.mp3',
        artist_list: [
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            },
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            },
        ],
        description: [
            {line: 'Song: Pure'},
            {line: '———————————'},
            {line: 'Produce: Roko Tensei'},
            {line: 'Rec/Mix/Master: VOK Records'},
            {line: 'Artwork & Banner: WEIASEC'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: '"Cám ơn anh Yang E from RBA Club đã hỗ trợ backup vocal."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Thấy em yêu khát nước bên đường'},
            {line:'Vội lấy cho em ly nước thêm đường'},
            {line:'Ngày xưa anh không để ý tên trường'},
            {line:'Vì chỉ để ý tên em, chỉ để ý tên em'},

            {line:'Thấy em yêu khát nước'},
            {line:'Anh lấy em ly nước'},
            {line:'Chuyện tình em không như trước'},
            {line:'Không được như ngày xưa từng ước'},
            {line:'Bên nhau suốt kiếp không rời xa đâu'},
            {line:'Đem trao ký ức cho người ta sau'},
            {line:'Anh ngồi ngay hàng ghế đá, ngắm nhìn cặp đôi yêu'},
            {line:'I still miss ya,'},
            {line:'Anh luôn cần em, cùng anh vượt qua màn đêm'},
            {line:'Không có ai khác tốt hơn, để được nói lời yêu sai'},
            {line:'Con tim anh chốt valve, 70 nước, 100% là em.'},

            {line:'Thấy em yêu khát nước bên đường'},
            {line:'Vội lấy cho em ly nước thêm đường'},
            {line:'Ngày xưa anh không để ý tên trường'},
            {line:'Vì chỉ để ý tên em, chỉ để ý tên em'},

            {line:'Vội vàng bước tới kéo ghế ngồi'},
            {line:'Lấy ly nước chanh ghé kế vào'},
            {line:'Đưa tay anh nắm và thế rồi'},
            {line:'Tình yêu của anh vào tế bào'},
            {line:'Wont make you cry, cry, cry, đưa em đến nơi bình yên nhất'},
            {line:'Không có một ai, ai, ai, khiến em quên mình là duy nhất'},
            {line:'I really want you know, dont want to let you go'},
            {line:'Vì anh chỉ muốn mình bên cạnh nhau'},
            {line:'Không muốn thêm nữa lại nếm vị đau'},
            {line:'Dắt em đi hết bầu trời xanh màu'},
            {line:'Mất em hay chết có khác gì đâu'},
            {line:'Và really, really, really dont want to let you go'},
            {line:'Và kill me, kill me, kill me, if I gotta let you go'},
            {line:'Ví em như mây trên bầu trời, xua tan hết cả màu sầu đời'},
            {line:'Còn anh là gió đang bay, ở đâu là có anh đây'},
            {line:'Ngắm nhìn nhau và đan tay'},
            {line:'Viết, viết cho em bao nhiêu lời ca'},
            {line:'Bỏ qua hết những phiền đời ta'},
            {line:'Lấy ly nước mình chill và nói những thứ mình yêu mà'},
            {line:'Get it all the feelings là "em sẽ luôn luôn ở bên mình"'},
            {line:'Get it all the feelings là "em sẽ mãi luôn luôn ở bên mình"'},

            {line:'Wait up, đưa đôi tay anh nắm, đôi môi em vẫn ngọt đường'},
            {line:'Nụ cười của em tỏa nắng như ánh sáng của ông mặt trời'},
            {line:'Đôi mắt em như bồ câu, nhìn lâu sẽ ra thiên thần'},
            {line:'Phải nói lời khen em hơn bất cứ ai trên đời'},

            {line:'Thấy em yêu khát nước bên đường'},
            {line:'Vội lấy cho em ly nước thêm đường'},
            {line:'Ngày xưa anh không để ý tên trường'},
            {line:'Vì chỉ để ý tên em, chỉ để ý tên em'},
        ],
    },
    //putmeonyourwishlist
    {
        img: 'images/putmeonyourwishlist.jpg',
        name: 'Put me on your wishlist',
        artist: 'VOK',
        music: 'musics/putmeonyourwishlist_vok.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            },
            {
                artist_name:'Jayden',
                imgsrc:'images/jayden.jpg'
            },
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },

        ],
        description: [
            {
                line: 'Song: Put me on your wishlist'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: Jayden'
            },
            {
                line: 'Mix & Master: Jayden'
            },
            {
                line: 'Recording. VOK Records'
            },
            {
                line: 'Percusion. TÚ'
            },
            {
                line: 'Artwork & Banner: WEIASEC'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2021'
            },
            {
                line: 'Merry Chirstmas mọi người nhé, tiếp nối Nice Try thì tụi mình xin gửi tới các bạn bài nhạc này.'
            },
            {
                line: 'Mong rằng niềm vui sẽ luôn tới với các bạn và những nỗi buồn thì đi mau mau nhé.'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            },
        ],
        song_lyrics:[
            {
                line:'Not Available.'
            }
        ]
    },

    //rapgame
    {
        img: 'images/rapgame.jpg',
        name: 'Rap Game',
        artist: 'Louies (Explicit)',
        music: 'musics/rapgame_louies.mp3',
        artist_list: [
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
        ],
        description: [
            {line: 'Song: Rap Game'},
            {line: '———————————'},
            {line: 'Written: Louies'},
            {line: 'Shout Out to Custhekid.'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: '"On the stage, whole crew..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'},
        ],
    },

    //sao anh co the thau
    {
        img: 'images/saoanhcothethau.jpg',
        name: 'Sao anh có thể thấu?',
        artist: 'KLG, Tranc',
        music: 'musics/saoanhcothethau_klg_tranc.mp3',
        artist_list: [
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
            {
                artist_name:'Tranc',
                imgsrc:'images/tranc.jpg'
            },
        ],
        description: [
            {line: 'Song: Sao anh có thể thấu?'},
            {line: '———————————'},
            {line: 'Produce: Last Dude'},
            {line: 'Mix & Master: KLG'},
            {line: 'Artwork & Banner: iamterencetrn'},
            {line: '———————————'},
            {line: 'Released: 2021'},
            {line: 'EP: "You Treat Me Bad"'},
            {line: '"Sao anh có thể thấu bao nỗi đau?"'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {
                line:'Not Available.'
            },
        ]
    },

    //suchut
    {
        img: 'images/suchut.jpg',
        name: 'Sức hút',
        artist: 'Louies, KLG (Explicit)',
        music: 'musics/suchut_louies_klg.mp3',
        artist_list: [
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
        ],
        description: [
            {line: 'Song: Sức hút'},
            {line: '———————————'},
            {line: 'Produce: fewtile'},
            {line: 'Mix & Master: KLG'},
            {line: 'Artwork & Banner: pikisuperstar'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: '"Em biết điều em mong muốn ở ngay trước mặt mà."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'},
        ],
    },

    //serotonin
    {
        img: 'images/serotonin.jpg',
        name: '"Serotonin"',
        artist: 'Custhekid, Jayden',
        music: 'musics/serotonin_custhekid_jayden.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Jayden',
                imgsrc:'images/jayden.jpg'
            }
        ],
        description: [
            {
                line: 'Song: "Serotonin"'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: Jayden'
            },
            {
                line: 'Mix & Master: Jayen'
            },
            {
                line: 'Artwork & Banner: Custhekid'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2020'
            },
            {
                line: '"CHEMICAL EP"'
            },
            {
                line: 'Bài số 3 trong EP "CHEMICAL" lần đầu hợp tác với anh lớn Jayden cùng trong VOK!'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line: 'Can I be your serotonin?'
            },
            {
                line: 'Call me up at night, in every moment.'
            },
            {
                line: 'Can I be your serotonin?'
            },
            {
                line: 'Never let you cry, in the conversation.'
            },
            {
                line: 'Và những lời nói xấu chê bai, em hãy để ngoài tai'
            },
            {
                line: 'Gọi cho anh nếu muốn bên anh, sau một ngày dài'
            },
            {
                line: 'Baby let me make you smile, hát đôi ba vài câu'
            },
            {
                line: 'Buồn phiền thì mình cũng có sao đâu, đưa em vào giấc ngủ sâu'
            },
            {
                line: 'Panadol em cần 1 viên'
            },
            {
                line: 'Để cảm nhận được sự bình yên'
            },
            {
                line: 'Để là anh serotonin'
            },
            {
                line: 'Xoa dịu lo âu em đầu tiên'
            },
            {
                line: 'Cả đời em thiếu sự hạnh phúc'
            },
            {
                line: 'Em cần thêm oxytocin'
            },
            {
                line: 'Nếu cả hai ta đều cô độc'
            },
            {
                line: 'Hãy làm tình yêu mang màu riêng'
            },
            {
                line: 'Có những nỗi buồn chỉ người buồn hiểu'
            },
            {
                line: 'Cuộc sống là thế mình đành thôi'
            },
            {
                line: 'Một mình coi show thường mỗi tuần chiếu'
            },
            {
                line: 'Không biết em có muốn một thành đôi'
            },
            {
                line: 'Ấm áp trong chăn cùng bàn tay ôm trọn'
            },
            {
                line: 'Tự nhủ bản thân Custhekid come on'
            },
            {
                line: 'Gắng làm cho đôi môi em phai son'
            },
            {
                line: 'Cảm nhận yên ắng dù còn trong Sài Gòn.'
            },
            {
                line: 'Can I be your serotonin?'
            },
            {
                line: 'Call me up at night, in every moment.'
            },
            {
                line: 'Can I be your serotonin?'
            },
            {
                line: 'Never let you cry, in the conversation.'
            },
            {
                line: 'Và những lời nói xấu chê bai, em hãy để ngoài tai'
            },
            {
                line: 'Gọi cho anh nếu muốn bên anh, sau một ngày dài'
            },
            {
                line: 'Baby let me make you smile, hát đôi ba vài câu'
            },
            {
                line: 'Buồn phiền thì mình cũng có sao đâu, đưa em vào giấc ngủ sâu'
            },
            {
                line: 'Conversation, you give me concentration'
            },
            {
                line: 'Ở bên cạnh em như là oxygen, làm anh thở không ngừng'
            },
            {
                line: 'My motivation, my only reason'
            },
            {
                line: 'Chẳng cần một ai khác ngoài em, baby em thử nghĩ mà xem'
            },
            {
                line: 'Anh luôn ở nơi đây bên em, không cần đi đâu xa thêm'
            },
            {
                line: 'từ sáng sớm tới giữa đêm yeah yeah'
            },
            {
                line: 'Anh như là vitamin C, đơn giản nhưng sẽ khiến em phải thích mê yeah yeah'
            },
            {
                line: 'Let me stop your tears, những khi trời khuya'
            },
            {
                line: 'You dont have to fear, buồn đau ngoài kia'
            },
            {
                line: 'Không cần diamond, không cần golden'
            },
            {
                line: 'Cần gì tìm đâu xa'
            },
            {
                line: 'Không cần jewelry, không cần gucci'
            },
            {
                line: 'Cần gì phải xa hoa'
            },
            {
                line: 'Chỉ cần là mỗi khi đêm về,'
            },
            {
                line: 'Ở cạnh anh đều có em'
            },
            {
                line: 'Can I be your serotonin?'
            },
            {
                line: 'Call me up at night, in every moment.'
            },
            {
                line: 'Can I be your serotonin?'
            },
            {
                line: 'Never let you cry, in the conversation.'
            },
        ]
    },

    //sekhongconhauvaongaymai
    {
        img: 'images/sekhongconhauvaongaymai.jpg',
        name: '"skcnvnm"',
        artist: 'Wildde, dwalker',
        music: 'musics/sekhongconhauvaongaymai_wildde_dwalker.mp3',
        artist_list: [
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            },
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            },
        ],
        description: [
            {line: 'Song: Sẽ không có nhau vào ngày mai'},
            {line: '———————————'},
            {line: 'Produce: Smyang Piano'},
            {line: 'Rec/Mix/Master: VOK Records'},
            {line: 'Banner: dwalker'},
            {line: '———————————'},
            {line: 'Released: 2018'},
            {line: '"Anh biết nhiều người, họ thích bàn chuyện ngày mai..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Anh lại mở mắt lúc 4 giờ sáng sau từng ấy năm ngủ vùi'},
            {line:'Mẫu chuyện tiểu thuyết từ 3 năm trước chắc cũng đã dần cũ mùi'},
            {line:'Em nói mình sẽ mãi trọn vẹn, '},
            {line:'"anh ơi mình đừng xa nhau"'},
            {line:'Chắc chỉ là nói nhưng rồi khoảng cách, lại làm ta đau'},
            {line:'Rồi 6 giờ sáng, xách xe chạy ngoài dọc đường vạn kiếp'},
            {line:'Con tim anh mỏi dừng chân nơi em từng thề bên nhau vạn kiếp'},
            {line:'Thân xác lơ lửng lần nữa giữa không trung, '},
            {line:'hóa ra là vì em bấy lâu mà con tim anh vẫn mãi không rung'},
            {line:'Anh biết nhiều người, họ thích bàn chuyện ngày mai'},
            {line:'Cứ u hoài, rồi nuôi mộng, về sau lại chất đầy vai'},
            {line:'Là nỗi buồn qua những con đường'},
            {line:'Nắng gắt ban trưa,'},
            {line:'Là nhịp lỗi thường, em rời bỏ ngày trời đang mưa'},
            {line:'Ngồi xuống đây, biết là tới ngày chia đôi'},
            {line:'Ngồi Hàng giờ lại cùng anh, để nghe tiếng hót kia thôi'},
            {line:'Những đắng cay, người nào lại gửi cho anh'},
            {line:'Gã thất tình, người sầu đau, mong đêm lần nữa qua nhanh'},
            {line:'Ngọn lửa trong anh, liệu có còn em mà thắp sáng'},
            {line:'Ngày em xa, vì chuyện ta, xảy ra trong chớp nhoáng'},
            {line:'Rồi chốc lát, ta qua mốc cán, '},
            {line:'mà sao em lại mau chóng chán, bước qua nhau, '},
            {line:'với thắc mắc ngày trời hạ từng thương đâu?'},
        ],
    },

    //stay
    {
        img: 'images/stay.jpg',
        name: 'Stay',
        artist: 'Custhekid, Mous, Chillingo',
        music: 'musics/stay_mous_custhekid_chillingo.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Mous',
                imgsrc:'images/mous.jpg'
            },
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            }
        ],
        description: [
            {line: 'Song: Stay'},
            {line: '———————————'},
            {line: 'Produce: 8rokeboy'},
            {line: 'Mix & Master: VOK Records'},
            {line: '———————————'},
            {line: 'Released: 2019'},
            {line: 'Khó khăn nhất trong cuộc đời, cô đơn là bài hát không thể thuộc lời...'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: 'Như mọi lần rồi cũng chia xa'},
            {line: 'tự biến câu chuyện mình vào sử sách thi ca'},
            {line: 'đi qua từng nẻo đường còn đong đầy ký ức'},
            {line: 'em từng là lẽ thường, giờ tồn lại ý thức'},
            {line: 'chỉ làm tổ phí sức để thức về khuya'},
            {line: 'để mình biến mất, lạc giữa bầu trời kia'},
            {line: 'để lại vì sao còn cô độc tan vỡ'},
            {line: 'tình đẹp nhất là khi vẫn còn dang dỡ'},
            {line: 'dù cho bao nhiêu ngang trở thì anh vẫn thế'},
            {line: 'vẫn sẽ quay về bên em lau mắt đẫm lệ'},
            {line: 'giữ tình mình mãi thanh khiết, là điều mà anh biết'},
            {line: 'dù ngày mai mình tàn phai khỏi nơi trần thế'},
            {line: 'khi mà ta gần kế, ah'},
            {line: 'có thật sự kể ra'},
            {line: 'hay vẫn thế, nah'},
            {line: 'do là mình dễ xa'},
            {line: 'hạnh phúc để sau, rồi rời đi trước'},
            {line: 'bỏ lại những câu chuyện làm hàng mi ướt, vì em'},
            {line: 'cách xa cây số'},
            {line: 'ước lại được một lần gây gổ'},
            {line: 'giữ đau buồn từ thuở mới quen'},
            {line: 'để tất cả yên bình sẽ lại với em'},
            {line: 'tình mình từng đã hứa bền lâu'},
            {line: 'vậy mà giờ hai đứa về đâu'},
            {line: 'hỡi em, mình từng hứa cùng nhau, cùng nhau đến ngày sau'},
            {line: 'thế nhưng em lại, nói câu chia biệt từ đây'},
            {line: 'chuyện trò cùng nhau đến thật lâu'},
            {line: 'mình ngồi cùng ăn tối kề nhau'},
            {line: 'nhớ không, còn đâu những ngày xưa'},
            {line: 'có thương thật thì, xin em hãy quay lại với anh'},
            {line: 'Cô đơn ,anh ghét nhất điều này'},
            {line: 'Sao anh đau vì ai mà lại thức nhiều ngày'},
            {line: 'Tình nhạt phai mở đầu cho những trở ngại'},
            {line: 'Còn lúc kết thúc đi theo tiếng thở dài'},
            {line: 'Anh không muốn mình phải đau linh hồn lẫn thể xác'},
            {line: 'Vì chuyện hôm đó thì đâu có thể khác'},
            {line: 'Em là ánh dương, còn anh trong bóng tối'},
            {line: 'Nên anh tránh đường, để tim mình bể nát'},
            {line: 'Hãy là em lúc trước đừng như thế mà'},
            {line: 'Bản nhạc hay có khúc xước là như thế à'},
            {line: 'Bên cạnh em giờ có ai , bên anh giờ thì gió bay'},
            {line: 'Em thì nói anh thay đổi? Anh vẫn thế mà'},
            {line: 'Vẫn yêu em như lúc xưa'},
            {line: 'Nỗi nhớ diễn ra và bầu trời trút mưa'},
            {line: 'Anh muốn gần em gần em thêm chút nữa'},
            {line: 'Sao mình chẳng giống nhau?'},
            {line: 'Không thể rời đi vì tim bị đóng dấu'},
            {line: 'Khó khăn nhất trong cuộc đời, cô đơn là bài hát không thể thuộc lời'},
            {line: 'Em đi trước còn anh sẽ mãi bước theo sau , khi mình lướt qua nhau'},
            {line: 'Nhưng mọi thứ đã bắt buộc rồi'},
        ]
    },

    //thangngayroixa
    {
        img: 'images/thangngayroixa.jpg',
        name: 'Tháng ngày rời xa',
        artist: 'xa娇, Wildde, Custhekid, dwalker',
        music: 'musics/thangngayroixa_bayxa_wildde_custhekid_dwalker.mp3',
        artist_list: [
            {
                artist_name:'xa娇',
                imgsrc:'images/bayxa.jpg'
            },
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            },
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            },
        ],
        description: [
            {line: 'Song: Tháng ngày rời xa'},
            {line: '———————————'},
            {line: 'Produce: riddiman'},
            {line: 'Rec/Mix/Master: VOK Records'},
            {line: 'Banner: Custhekid'},
            {line: '———————————'},
            {line: 'Released: 2019'},
            {line: '"Kỉ niệm là thứ em sẽ muốn cất khi buồn cứ lấy ra xem..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'và khi màn đêm vây khắp một vùng trời từng là của ta'},
            {line:'đành buông vì sao đem áng mây, thôi không có ai đêm nay'},
            {line:'từng ngày nắng chẳng còn chung đường'},
            {line:'từng đêm trắng có hay nhớ thương'},
            {line:'Nằm mơ một giấc mơ dài, cho những ngày tháng mình rời xa nhau'},

            {line:'Chỉ còn vài tiếng nữa thôi, phi trường với em không 1 bóng người'},
            {line:'buồn vương trên mi mắt nhưng đôi môi sẽ mau chóng cười'},
            {line:'Dù là nỗi sợ đang chiếm lấy em'},
            {line:'để mớ cảm xúc lại dồn ra kề cửa'},
            {line:'Vì thật là tệ anh chẳng thể gánh thay em,'},
            {line:'Phóng thích cô đơn kia về nữa'},
            {line:'Kỉ niệm là thứ em sẽ muốn cất khi buồn cứ lấy ra xem'},
            {line:'Muộn phiền sẽ bị cuốn mất'},
            {line:'thì lòng em được an yên'},
            {line:'Vì sẽ không bên ngày nắng, ngày gió'},
            {line:'Không thể kề em ngày vắng ngày khó.'},
            {line:'Nên em cứ giữ bình yên này đi'},
            {line:'Khi nó là thứ duy nhất anh còn có thể trao'},
            {line:'Yêu xa là đại hải trình không được bên nhau hang vạn hải lí'},
            {line:'Là 1 tuyệt tác khi về sau cuối, vẫn 2 con tim hòa chung nhịp đập mà vẽ nhau'},

            {line:'dù muốn con tim thôi xuyến xao, mà thôi có sao'},
            {line:'nàng có biết không trời cao với những giấc mơ chiêm bao'},
            {line:'đừng lo lắng dưới màu nắng mai'},
            {line:'đừng thức trắng dẫu tình có phai'},
            {line:'nằm mơ một giấc mơ dài, cho những ngày tháng mình rời xa nhau'},
            
            {line:'Vì em còn lo thứ to bự khác'},
            {line:'Phiền muộn hay những chuyện buồn,'},
            {line:'xin em cũng đừng do dự hát'},
            {line:'Rời xa gia đình, về nơi phương xa xứ người'},
            {line:'Dù chưa thể nào trao ta tình, nhưng khi gian khó em hãy cứ cười'},
            {line:'Sẽ có lúc lười, làm em trống rỗng'},
            {line:'Chống cằm những lúc cô đơn'},
            {line:'Miệng tô son dù tim đóng cổng'},
            {line:'Chọn sống trầm thay thế phô trương'},
            {line:'Và chọn mưa sương thay cho nóng ẩm'},
            {line:'Chờ ngày lại quay về, sống trong khoảng trời cỏ xanh'},
            {line:'Miệng cười nhưng mắt hoen nước, vì tháng ngày mình rời bỏ nhau'},

            {line:'liệu em có chịu đợi anh, vì vốn dĩ anh chẳng cạnh bên'},
            {line:'Kể cả lúc thức giấc, về tối sẽ lạnh hơn'},
            {line:'Roi, sẽ thay cô đơn, khi bắt gặp đôi lứa đan tay, '},
            {line:'khien em chỉ muốn, một lần được như các cặp'},
            {line:'Chứ không phải chuyến bay nửa vòng trái đất, '},
            {line:'để lại chuyện tình, mà phải Xa em với tròng mi ướt'},
            {line:'Dối lòng khi bước quay lưng Không như anh'},
            {line:'Ngày hạ của trước đây nhưng sao đôi mắt này lại hoe đỏ'},
            {line:'Có phải sẽ chẳng cùng em, minh ngoi ngắm những ngày hoa nở'},
            {line:'Hay chỉ gửi gắm, qua vở là đôi văn thoại'},
            {line:'Những dòng chữ như liều thuốc ngủ để thôi anh lại khỏi về thực tại'},
            {line:'Mà anh còn phải vực dậy ở nơi đất xa xứ người'},
            {line:'Vì nếu đúng là thật vậy thì anh đã xong tình ca thứ mười'},
        ],
    },

    //The Comedown
    {
        img: 'images/thecomedown.jpg',
        name: '"The Comedown"',
        artist: 'Louies, KLG, Yang E',
        music: 'musics/thecomedown.mp3',
        artist_list: [
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
            {
                artist_name:'Yang E',
                imgsrc:'images/yange.jpg'
            },
        ],
        description: [
            {line: 'Song: "The Comedown"'},
            {line: '———————————'},
            {line: 'Mix & Master: Yang E'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: 'Anh cần một không gian riêng,'},
            {line: 'Cần một sự an yên.'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records x Yang Espresso'}
        ],
        song_lyrics:[
            {line:'Not Available.'}
        ],
    },

    //the mummy
    {
        img: 'images/themummy.jpg',
        name: 'The Mummy',
        artist: 'Louies, KLG (Explicit)',
        music: 'musics/themummy_louies_klg.mp3',
        artist_list: [
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
        ],
        description: [
            {line: 'Song: The Mummy'},
            {line: '———————————'},
            {line: 'Produce: klimonglue'},
            {line: 'Mix & Master: Yang E'},
            {line: 'Artwork & Banner: KLG'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: 'The Mummy là bộ phim đã gắn liền với tuổi thơ của biết bao thế hệ và riêng Louies thì cũng không ngoại lệ.'},
            {line: 'Phim đã tạo nên cho mình 1 nguồn cảm hứng mới mẻ để giờ đây bài nhạc này đã có thể ra đời.'},
            {line: 'Rất vui khi có KLG cùng tham gia vào dự án này, nhờ đó mà đem lại một gam màu mới mẻ cho bài nhạc của Louies.'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Ngàn dặm để tới được thành phố cõi chết.'},
            {line:'Cưỡi lưng lạc đà cũng đã dần mỏi mệt.'},
            {line:'Bão cát khắp nơi gió không ngừng thổi lệch.'},
            {line:'Khi mặt trời lặn xuống, thì cũng đã đến.'},
            {line:'Chiến đấu với xác ướp như trong movie.'},
            {line:'Phiêu lưu thám hiểu cùng với Louies.'},
            {line:'KLG kế bên mãi không ngừng nghỉ.'},
            {line:'Rap như là vũ khí diệt the Mummy.'},
            {line:'Người dân ngăn cản vì, thế lực của chúng không thể đùa đâu.'},
            {line:'Đông hơn cả băng đảng, săn mồi nhanh nhẹn như là diều hâu.'},
            {line:'Nhưng chỉ là cơ bản, sát thương của tao nhân nghìn lần.'},
            {line:'Tìm cuốn sách vàng không giờ nghỉ chân.'},
            {line:'Kim tự tháp vẫn còn vạn điều bí ẩn.'},
            {line:'Hạ gục The Mummy không cho tụi nó có đường lui.'},
            {line:'KLG và LOUIES săn bọn xác ướp lấy làm niềm vui.'},
            {line:'Vàng bạc châu báu một đời, Penthouse tao ở một ngày không xa.'},
            {line:'Cùng anh em vượt qua phong ba.'},
            {line:'Level up đối đầu trùm cuối.'},
            {line:'Mang theo ý chí và gươm đao tao hạ bệ người chúng gọi là bệ hạ, không được vươn xa.'},
            {line:'Suy tàn cho cả một đế chế.'},
            {line:'Trói linh hồn, không lối thoát ra khỏi Hamunaptra cho đến khi hoang phế.'},
            {line:'Dẫu biết đối đầu là chẳng thể.'},
            {line:'Ra trận không một sự bảo kê.'},
            {line:'Người thường đặt dấu chấm hết cho lũ ô uế.'},
            {line:'Bò cạp ở ngay sau lưng, lũ.'},
            {line:'Tay sai bám theo đâu ngừng.'},
            {line:'Quyển sách cầm chắc trên tay, không thì đêm nay.'},
            {line:'Chúng cho người đốt cháy cả nguyên khu rừng.'},
            {line:'Không cho lũ tư tế có cơ hội để đô hộ.'},
            {line:'Một bước cũng chẳng thể khi mà tụi tao đóng đô.'},
            {line:'Lời nguyền tao phong ấn.'},
            {line:'Diệt sạch ở trong trận.'},
            {line:'Như là người nông dân, thả mày vào trong lăng mộ.'},
            {line:'Chuẩn bị tâm thế sẵn sàng, đi đứng thẳng hàng, tao đấm bay đầu m luôn.'},
            {line:'VOK, bọn anh đang làm loạn, thả flow như là đạn, bay màu m luôn.'},
            {line:'Không lãng phí thời gian, không đến đây để làm màu.'},
            {line:'LOUIES V - KLG DANG'},
            {line:'Đặt mục tiêu lên hàng đầu.'},
            {line:'Gạt tụi mày về N, rồi tao mang theo sau lưng là cả kho tiền'},
            {line:'Dù có bao thứ phải lo, nhưng vẫn thật cool trên đôi Jordan.'},
            {line:'Phát sáng trên đường đi, LOUIES KLG baby.'},
            {line:'Ahihi, look at me kiki.'},
        ]
    },

    //thinking about you
    {
        img: 'images/thinkingaboutyou.jpg',
        name: 'Thinking about you',
        artist: 'Wansentai, KLG, Jayden',
        music: 'musics/thinkingaboutyou_klg_wansentai_jayden.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
            {
                artist_name:'Jayden',
                imgsrc:'images/jayden.jpg'
            },
        ],
        description: [
            {line: 'Song: Thinking about you'},
            {line: '———————————'},
            {line: 'Produce: Jayden'},
            {line: 'Mix & Master: KLG'},
            {line: 'Artwork & Banner: Wansentai'},
            {line: '———————————'},
            {line: 'Released: 2021'},
            {line: 'EP: "my world"'},
            {line: '"Đừng hỏi tại sao anh hoài không ngủ'},
            {line: 'Đầu cứ mãi suy nghĩ về Min"'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {
                line:'Not Available.'
            },
        ]
    },

    //thoigiannhekhauvetthuong
    {
        img: 'images/thoigiannhekhauvetthuong.jpg',
        name: '"tgnkvta"',
        artist: 'Chillingo',
        music: 'musics/thoigiannhekhauvetthuong_chillingo.mp3',
        artist_list: [
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            }
        ],
        description: [
            {line: 'Song: Thời gian nhẹ khâu vết thương anh'},
            {line: '———————————'},
            {line: 'Produce: Chjuljnh'},
            {line: 'Beat Remake: Tống Đăng'},
            {line: 'Original: Mơ - Vũ Cát Tường'},
            {line: 'Mix & Master: VOK Records'},
            {line: 'Artwork & Banner: Chillingo'},
            {line: '———————————'},
            {line: 'Released: 2018'},
            {line: '"Hình dung em ôm anh là cách duy nhất để anh tiếp tục tồn tại sau vô số cuộc cãi vã"'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line: ''},
            {line:'Hình dung em ôm anh, là cách duy nhất để anh tiếp tục tồn tại sau vô số cuộc cãi vã'},
            {line:'Em không còn hôn anh lên môi, bắt đầu của kết thúc và khoảng cách hai ta buộc phải xa'},
            {line:'Những bức ảnh vẫn còn hai màu'},
            {line:'Đốm lửa vẫn còn chưa phai đâu'},
            {line:'Vậy mà tim giờ đã thay đổi'},
            {line:'Em, hướng dương anh từng yêu đã quay ngược lại sau'},
            {line:'Đêm chưa bao giờ là bạn'},
            {line:'Có em là hoa vực nở'},
            {line:'Hướng dương sẽ gọi mặt trời đến'},
            {line:'Tìm đến em không cần dùng la bàn'},
            {line:'Sắc vàng chỉ cần rực rỡ'},
            {line:'Thủy triều cũng phải bỏ rơi đêm'},
            {line:'Bỗng một ngày mặt trăng đến làm hoa này vội'},
            {line:'Bỏ mặc luôn ánh vàng'},
            {line:'Để lại mặt trời che khuất bởi mây trôi'},
            {line:'Mù quáng tự nhủ: “em không ai sáng bằng!”'},
            {line:'Giờ không còn nữa'},
            {line:'Ánh dương ngày xưa'},
            {line:'Cả bầu trời Đông Bắc bị che lấp bởi làn mưa'},
            {line:'Ngọn thác kỷ niệm hùng vĩ tuôn bao hồi ức'},
            {line:'Tự hỏi “quên em đủ để vết thương lành chưa?”'},
            {line:'Bông thiên quỳ tử luôn luôn hướng về mặt trời'},
            {line:'Sao em không còn hướng về phía anh?'},
            {line:'Thanh xuân vàng rực anh đã bỏ cả một thời'},
            {line:'Chỉ để cuối cùng em quay về phía trăng!'},
            {line:'Babe!'},
            {line:'Chỉ để cuối cùng em quay về phía trăng'},
            {line:'Để đôi ta không còn một đích đến'},
            {line:'Để cuối cùng tim anh dần hoá xanh'},
            {line:'Để cho cả tâm hồn anh chòng chành'},
            {line:'Vết sẹo tim cần được đắp thuốc lên'},
            {line:'Sẽ quên em như dập tan ngọn nến'},
            {line:'Thời gian nhẹ khâu vết thương anh!'},
        ]
    },

    //tinh phoi phai
    {
        img: 'images/tinhphoiphai.jpg',
        name: 'Tình phôi phai',
        artist: 'Wansentai, Kymm',
        music: 'musics/tinhphoiphai_wansentai_kymm.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Kymm',
                imgsrc:'images/kymm.jpg'
            },
        ],
        description: [
            {line: 'Song: Tình phôi phai'},
            {line: '———————————'},
            {line: 'Produce: Jayden'},
            {line: 'Rec/Mix/Master: RBA Records'},
            {line: 'Banner: Wansentai'},
            {line: '———————————'},
            {line: 'Released: 2020'},
            {line: '"xin..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'},
        ],
    },

    //trenconsonglon
    {
        img: 'images/trenconsonglon.jpg',
        name: 'Trên con sóng lớn',
        artist: 'Wansentai, Malit (Explicit)',
        music: 'musics/trenconsonglon_wansentai_malit.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Malit',
                imgsrc:'images/malit.jpg'
            },
        ],
        description: [
            {line: 'Song: Trên con sóng lớn'},
            {line: '———————————'},
            {line: 'Produce: Jayden'},
            {line: 'Rec/Mix/Master: Yang E & Jayden'},
            {line: 'Artwork & Banner: Wansentai'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: '"Sống lớn trên con sóng lớn..."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'},
        ],
    },

    //troimuanhungemkhongcoo
    {
        img: 'images/tmnekco.jpg',
        name: '"tmnekco"',
        artist: 'xa娇',
        music: 'musics/tmnekco_bayxa.mp3',
        artist_list: [
            {
                artist_name:'xa娇',
                imgsrc:'images/bayxa.jpg'
            },
        ],
        description: [
            {line: 'Song: trời mưa nhưng em không có ô (7974 0139)'},
            {line: '———————————'},
            {line: 'Produce: sieben'},
            {line: 'Rec/Mix/Master: VOK Records'},
            {line: 'Banner: xa娇'},
            {line: 'beat was sampled from "Happy Day" by Jung Hwan Ho'},
            {line: '———————————'},
            {line: 'Released: 2019'},
            {line: '"dưới hiên nhà, hàng cây đang khẽ đưa"'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'có cô nàng, trời mưa không có ô'},
            {line:'đứng bên đường, nhìn dòng người lướt qua'},
            {line:'chắc cô nàng tìm kiếm một ai đó vu vơ gọi tên'},
            
            {line:'dưới hiên nhà, hàng cây đang khẽ đưa'},
            {line:'có cô nàng, chờ anh đến nắng trưa'},
            {line:'trách sao được, vì anh vội vàng quá nên đành lướt qua'},
            
            {line:'nhớ hôm nào, cùng ngồi dưới ánh trăng'},
            {line:'với câu chuyện, và tình lại cắt ngang'},
            {line:'chắc cô nàng, chẳng biết vì sao có hay đâu lời em'},
            
            {line:'mấy năm rồi, dù là bao gió giông'},
            {line:'đến khi nào, mà em cứ mãi trông'},
            {line:'có cô nàng, nhìn anh lặng lẽ đi thật xa'},
        ],
    },

    //uhm
    {
        img: 'images/uhm.jpg',
        name: 'Uhm',
        artist: 'Custhekid, xa娇',
        music: 'musics/uhm_custhekid_bayxa.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'xa娇',
                imgsrc:'images/bayxa.jpg'
            }
        ],
        description: [
            {
                line: 'Song: Uhm'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: hentaidesuka'
            },
            {
                line: 'Mix & Master: VOK Records'
            },
            {
                line: 'Artwork: Google'
            },
            {
                line: 'Banner: Custhekid'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2019'
            },
            {
                line: '"Để em đi khi lòng còn tình cảm, là lòng bình thản khi thấy em cười..."'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line:'Not Available.'
            }
        ]
    },

    //what you say
    {
        img: 'images/whatllyousay.jpg',
        name: 'What’ll you say?',
        artist: 'Chillingo ft. Custhekid',
        music: 'musics/whatllyousay_chillingo_custhekid.mp3',
        artist_list: [
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },
        ],
        description: [
            {
                line: 'Song: What’ll you say?'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: Eem Triplin'
            },
            {
                line: 'Mix & Master: HIEUTHUHAI'
            },
            {
                line: 'Banner & Artwork: WEIASEC'
            },
            {
                line: 'Editor: Đức'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2020'
            },
            {
                line: '"Cảm xúc em không đổi thay'
            },
            {
                line: 'Chỉ từ người này thay sang người khác"'
            },
            {
                line: 'Môt điệu buồn tình ái, một lời nhạc tràn ngập xúc cảm mang lời tâm sự của chàng trai bị phản bội trong tình yêu'
            },
            {
                line: 'WHAT’LL YOU SAY được ra mắt là một bản nhạc RnB Hiphop được thể hiện bởi CUSTHEKID và CHILLINGO'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line:'Anh đã chờ em nói'
            },
            {
                line:'Thú nhận những lời gian dối'
            },
            {
                line:'Mà em giấu trong màn đêm'
            },
            {
                line:'Đem tới toàn điều đau đớn'
            },
            {
                line:'Nhưng có lẽ rằng sự thật'
            },
            {
                line:'Ừm anh biết'
            },
            {
                line:'Cũng không giúp tim chữa lành thêm'
            },
            {
                line:'Lần đầu tiên anh cố tìm ra lý do'
            },
            {
                line:'Chứ không phải cách'
            },
            {
                line:'Thời gian đối với em là cây thước đo'
            },
            {
                line:'Để khi anh phải trách có thể châm chước cho'
            },
            {
                line:'Làm điều đó để, cho em có thể bỏ'
            },
            {
                line:'Vì anh không thể bỏ...'
            },
            {
                line:'So what’ll you say?'
            },
            {
                line:'Can’t hold you back'
            },
            {
                line:'I can’t make you stay'
            },
            {
                line:'Mọi chuyện có lẽ đã khác (ừm)'
            },
            {
                line:'Ta có thể đã khác'
            },
            {
                line:'Nếu tâm tư không chỉ là 1 người vác'
            },
            {
                line:'Cảm xúc em không đổi thay'
            },
            {
                line:'Chỉ từ người này thay sang người khác'
            },
            {
                line:'Damn'
            },
            {
                line:'Anh phải làm gì'
            },
            {
                line:'Anh phải anh phải ah'
            },
            {
                line:'Anh phải làm gì'
            },
            {
                line:'Anh phải, anh phải '
            },
            {
                line:'Nếu em có thể quay lại'
            },
            {
                line:'Thì anh phải làm gì ?'
            },
            {
                line:'Anh phải làm gì?'
            },
            {
                line:'Phải nghe con tim hay là lý trí'
            },
            {
                line:'Khơi lại cảm xúc để viết bài này, là cũng bởi vì Uy'
            },
            {
                line:'Lời hát tuôn ra gợi lại ký ức, anh cũng không kịp ghi'
            },
            {
                line:'Thôi thì để cho lòng này vơi bớt, tâm trạng tan dần đi'
            },
            {
                line:'Tay cầm ly whisky, trên bàn henessy, nhưng lòng không thị phi'
            },
            {
                line:'Dù em không nhận lỗi, no apologies'
            },
            {
                line:'Cho mình làm công chúa, như là phim disney'
            },
            {
                line:'Em mang trò chơi tình ái cuốn sâu cảm xúc anh vào trong đó'
            },
            {
                line:'để rồi mang dẹp đi.'
            },
            {
                line:'Bently bently'
            },
            {
                line:'Đưa em vào cuộc chơi'
            },
            {
                line:'Friendly friendly'
            },
            {
                line:'Những bữa tiệc bể bơi'
            },
            {
                line:'What’s you say?'
            },
            {
                line:'What’s you say?'
            },
            {
                line:'Em nói em vào trong club chỉ để mở rộng quan hệ mà thôi'
            },
            {
                line:'Stop ngay những câu nói mĩ miều'
            },
            {
                line:'Anh không muốn nghĩ nhiều'
            },
            {
                line:'Sự phản bội có từ trong máu thì không thể nào thay đổi một sớm một chiều'
            },
            {
                line:'No, anh không muốn tiếp tục'
            },
            {
                line:'Anh không muốn dừng lại'
            },
            {
                line:'Em là nụ gai độc chỉ cần tiếp xúc'
            },
            {
                line:'Là con tim sẽ ngừng lại'
            },
            {
                line:'Anh đã yêu đã đau quá nhiều nên đừng'
            },
            {
                line:'Khiến cho tâm trí anh chao đảo mà không thể nào đứng vững'
            },
            {
                line:'Anh không biết nếu muốn kết thúc thì làm thế nào để ngừng'
            },
            {
                line:'Nên tiếp tục yêu trong đau khổ hay xem nhau là người dưng?'
            },
        ]
    },

    //xin
    {
        img: 'images/xin.jpg',
        name: 'Xin',
        artist: 'Kymm, Chillingo',
        music: 'musics/xin_kymm_chillingo.mp3',
        artist_list: [
            {
                artist_name:'Kymm',
                imgsrc:'images/kymm.jpg'
            },
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },
        ],
        description: [
            {
                line: 'Song: Xin'
            },
            {
                line: '———————————'
            },
            {
                line: 'Produce: karrot'
            },
            {
                line: 'Mix & Master: VOK Records'
            },
            {
                line: 'Composer: Kym'
            },
            {
                line: 'Artwork & Banner: Chillingo'
            },
            {
                line: '———————————'
            },
            {
                line: 'Released: 2019'
            },
            {
                line: '"Phản chiếu lại hình ảnh của ngày còn đôi bàn tay đan chặt..."'
            },
            {
                line: '———————————'
            },
            {
                line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'
            },
            {
                line: '© VOK Records'
            }
        ],
        song_lyrics:[
            {
                line:'Gieo nhau nỗi niềm'
            },
            {
                line:'Lối về đơn côi bóng ai'
            },
            {
                line:'Có tình nào chẳng xót xa?'
            },
            {
                line:'Có tình nào chẳng phai nhòa'
            },
            {
                line:'Gửi vào gió giấc mơ buồn'
            },
            {
                line:'Vệt nắng sau mưa'
            },
            {
                line:'Đêm về nghe lòng như muốn vỡ tan rồi'
            },
            {
                line:'Bao ký ức khi xưa nay đã nhạt phôi'
            },
            {
                line:'Người ơi, sầu ơi, tình ơi cũng đã thôi rồi'
            },
            {
                line:'Giờ đây còn lại mình em chỉ là vấn vương'
            },
            {
                line:'Chạy về đâu khi chuyện mình chẳng lối ra'
            },
            {
                line:'Người từng hứa sẽ mãi ở bên nhau mà'
            },
            {
                line:'Đừng mang tinh khôi về nơi khuất xa'
            },
            {
                line:'Một lần cuối quay về nơi bắt đầu'
            },
            {
                line:'Xin người...'
            },
            {
                line:'Xin người đừng làm vệt nắng khuất sau mưa'
            },
            {
                line:'Xin người đừng để mi đỏ màu cau hương'
            },
            {
                line:'Xin người đừng làm con đò tình mau đưa'
            },
            {
                line:'Đừng để nỗi nhớ hóa thành đau thương'
            },
            {
                line:'Xin người đừng như những cánh chim sắt'
            },
            {
                line:'Bay qua bầu trời kẻ ngang hai đường mây'
            },
            {
                line:'Đi qua cuộc đời chỉ toàn im ắng'
            },
            {
                line:'Để lại vệt buồn mà anh không thường thấy'
            },
            {
                line:'Xin người đừng níu'
            },
            {
                line:'Đừng làm phiền nhau'
            },
            {
                line:'Anh như ngất xỉu khi chết ngạt dưới biển sâu'
            },
            {
                line:'Bỏ hạnh phúc, bỏ nụ cười của mình nên đôi khi'
            },
            {
                line:'Xin cho dòng lệ em sẽ không tuôn trào trên đôi mi'
            },
            {
                line:'Khuôn mặt em còn vương giọt sương ngang mắt'
            },
            {
                line:'Phản chiếu lại hình ảnh của ngày còn đôi bàn tay đan chặt'
            },
            {
                line:'Xin đừng khiến, lồng ngực này chai lỳ hoá thành than sắt'
            },
            {
                line:'Mà hãy để cho hai trái tim chúng ta hoá thành vàng đặc'
            },
            {
                line:'Dưới túp lều tranh nơi anh hay thường trú chân'
            },
            {
                line:'Xin trở về tim anh, nơi em là thường trú nhân'
            },
            {
                line:'Những ký ức tuyệt đẹp, em ơi xin đừng phủ nhận'
            },
            {
                line:'Dù cho nỗi buồn, trỗi dậy hành hạ chủ nhân'
            },
            {
                line:'Liệu có đủ thân để cái ánh nhìn đăm đăm?'
            },
            {
                line:'Vẫn sẽ mãi là cách mà em nhìn anh dù chuyện mình có kéo dài đến trăm năm'
            },
            {
                line:'Tình còn đẹp là tình dang dở, tình chỉ nồng khi mình đang thở'
            },
            {
                line:'Thế thì tình mình phải kết thúc vì nó chan chứa nỗi buồn muôn thuở'
            },
            {
                line:'Của cả hai ta'
            },
            {
                line:'Cách duy nhất để thấy cầu vồng là để mưa bay qua'
            },
            {
                line:'Xin người hãy xa'
            },
            {
                line:'Để em có thể quên đi được nỗi buồn ta gây ra'
            },
            {
                line:'Quên đi xin em'
            },
            {
                line:'Cũng đã đến lúc'
            },
            {
                line:'Của một thời anh không quên'
            },
            {
                line:'Cũng là kết thúc'
            },
            {
                line:'Của một chuyện tình không tên'
            },
            {
                line:'Những lời mến chúc'
            },
            {
                line:'Ta từng trao mãi sống bền'
            },
            {
                line:'Chỉ trong ký ức'
            },
            {
                line:'Nhớ lại là việc không nên'
            },
            {
                line:'Nhưng mà tri thức'
            },
            {
                line:'Vực dậy lại cho giông đến'
            },
            {
                line:'Cảm xúc chông chênh'
            },
            {
                line:'Nước măt công lên'
            },
            {
                line:'Buồn mãi sống bền'
            },
            {
                line:'Em ra biển lớn, bỏ lại phía sau là sông bến'
            },
            {
                line:'(Xin đừng chạy đi)'
            },
            {
                line:'Chạy về đâu khi chuyện mình chẳng lối ra'
            },
            {
                line:'(Xin đừng hứa nữa)'
            },
            {
                line:'Người từng hứa sẽ mãi ở bên nhau mà'
            },
            {
                line:'(Xin đừng mang đi)'
            },
            {
                line:'Đừng mang tinh khôi về nơi khuất xa'
            },
            {
                line:'(Xin hãy quay về)'
            },
            {
                line:'Một lần cuối quay về nơi bắt đầu'
            },
            {
                line:'Xin người đừng làm vệt nắng khuất sau mưa'
            },
            {
                line:'Xin người đừng để mi đỏ màu cau hương'
            },
            {
                line:'Xin người đừng làm con đò tình mau đưa'
            },
            {
                line:'Đừng để nỗi nhớ hóa thành đau thương'
            },
        ]
    },

    //yeu doi vo
    {
        img: 'images/yeudoivo.jpg',
        name: 'Yêu Đợi Vỡ',
        artist: 'Wansentai, Manh',
        music: 'musics/yeudoivo_wansentai_manh.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Manh',
                imgsrc:'images/manh.jpg'
            },
        ],
        description: [
            {line: 'Song: Yêu Đợi Vỡ'},
            {line: '———————————'},
            {line: 'Recording: VOK Records'},
            {line: 'Mix & Master: VOK Records'},
            {line: '———————————'},
            {line: 'Released: 2017'},
            {line: '"Em nên biết anh là 1"'},
            {line: '———————————'
            },
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'}
        ]
    },

    //yeu doi vo 2
    {
        img: 'images/yeudoivo2.jpg',
        name: 'Yêu Đợi Vỡ 2',
        artist: 'Wansentai, Custhekid, xa娇',
        music: 'musics/yeudoivo2_wansentai_custhekid_xa.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'xa娇',
                imgsrc:'images/bayxa.jpg'
            }
        ],
        description: [
            {line: 'Song: Yêu Đợi Vỡ 2'},
            {line: '———————————'},
            {line: 'Produce: Micky Lr'},
            {line: 'Mix & Master: VOK Records'},
            {line: 'Artwork: Google'},
            {line: 'Banner: VOK Records'},
            {line: '———————————'},
            {line: 'Released: 2018'
            },
            {line: '"Và ta cứ đếm, cứ đếm, cứ đếm..."'},
            {line: '———————————'
            },
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'}
        ]
    },

    //yeu doi vo 3
    {
        img: 'images/yeudoivo3.jpg',
        name: 'Yêu Đợi Vỡ 3',
        artist: 'Wansentai, Kymm, Custhekid',
        music: 'musics/yeudoivo3_wansentai.mp3',
        artist_list: [
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Kymm',
                imgsrc:'images/kymm.jpg'
            },
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
        ],
        description: [
            {line: 'Song: Yêu Đợi Vỡ 3'},
            {line: '———————————'},
            {line: 'Written: Wansentai, Sean, Kymm, Custhekid'},
            {line: 'Mix & Master: VOK Records'},
            {line: 'Recording: VOK Records'},
            {line: '———————————'},
            {line: 'Released: 2020'
            },
            {line: '"Yêu rồi đợi rồi vỡ..."'},
            {line: '———————————'
            },
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Mưa chảy vào da, lấy từng tế nào này'},
            {line:'Ta từng cạnh nhau, giờ lại thế nào vậy'},
            {line:'Thấy nhau đằng xa em chẳng thể nào chào'},
            {line:'Vì tim em đã có ng khác, đóng cổng không thể nào vào'},
            
            {line:'Tan vỡ vì nhau sau hàng tá lần cãi vã'},
            {line:'Lỡ buông lời đau rồi lạnh giá mặc thời giờ'},
            {line:'Ko ai chịu mở lời trước dù chẳng là gì của nhau'},
            {line:'Vết thương đó ko băng bó rát cháy ko thể tả nỗi'},
            
            {line:'Yêu thế rồi đợi nào ngờ vỡ đến nay đã đc 3 năm vẫn là ng phải đợi chờ'},
            {line:'Cũng nào ngờ sau 3 năm ấy em lại trong tay ai khác'},
            {line:'Những bài hát khi ấy anh viết giờ cũng đã tan theo mây cát'},
            
            {line:'Nên'},
            {line:'Ko gặp nhau như xưa'},
            {line:'Và'},
            {line:'Ko cafe khi mưa'},
            {line:'Thêm'},
            {line:'Ko thấy em mỗi sáng'},
            {line:'Vì'},
            {line:'em đã có ai đưa'},
            
            {line:'Hứa hàng tá lời hứa làm gì để rồi anh cũng ko thể thực hiện'},
            {line:'Vì anh luôn bỏ lỡ cơ hội còn anh ta thì tấn công trức diện'},
            
            {line:'Trách vì đó là cách duy nhất để anh có thể quên đi người'},
            {line:'Cách xa đc bao lâu anh vẫn yêu em vì vốn tim anh chay lười'},
            {line:'Dù kiếm tận cùng trái đất dù tận đáy biển ko ai thể thay ng'},
            {line:'Nếu như yêu anh là 1 thì cho anh xin đc vay 10'},
            
            {line:'Yêu rồi đợi rồi vỡ'},
            {line:'Hiểu là mình đã lỡ'},
            {line:'Trở thành nhân vật phụ'},
            {line:'Của cả một câu truyện'},
            {line:'Tình duyên'},
            
            {line:'Bình yên ko đến với ta dù đã chấp nhận đến sau'},
            {line:'Cuộc đời dạy ta nhiều thứ và học phí là đớn đau'},

            {line:'sau bao nhiêu lâu ngày mình có nhau'},
            {line:'em cất bước bỏ lại phía sau'},
            {line:'những kí ức giờ là nỗi em vẫn không thể chôn giấu'},
            {line:'mang yêu thương ngày mình có nhau'},
            {line:'giờ như cánh chim bay cuối trời'},
            {line:'vì người đã trôi về nơi rất xa'},

            {line:'Đem lòng thuơng nhớ, vuơng vấn'},
            {line:'Nụ cười là cái cớ, khi tim cấn dư chấn'},
            {line:'Thân vẫn dấn vào ngã rẽ, vì 1 mộng uớc duy nhất'},
            {line:'kết cục như đã vẽ, nguời vẫn mong muốn ai khác'},
            {line:'bỏ nhiều năm để đợi chờ'},
            {line:'Bào mòn tâm trí, làm quên cả thời giờ'},
            {line:'Biết cuối chặng đuờng là yêu rồi đơi vỡ'},
            {line:'Có bông hoa nào vội nở,'},
            {line:'để lai một ai phải trả hết cả vài ngàn năm của đời chờ'},
            {line:'Và tình không thành cũng không sao'},
            {line:'Vì anh đã chôn giấu hết cảm xúc từng mong trao'},
            {line:'Mà đơn đau nào chôn sau như những lần khác'},
            {line:'E lại rời xa như lời hát, làm lòng xôn xao'},
            {line:'Làm bồi hồi nôn nao ah'},
            {line:'Khi mình đi nguợc lối'},
            {line:'VÌ có nhiều điều'},
            {line:'Ta còn ch kịp nói'},
            {line:'Nhưng e bỏ ai lại để níu giữ hạnh phúc của riêng'},
            {line:'Khi biết tình yêu là tai hại vẫn giữ hình bóng của em'},

            {line:'sau bao nhiêu lâu ngày mình có nhau'},
            {line:'em cất bước bỏ lại phía sau'},
            {line:'những kí ức giờ là nỗi em vẫn không thể chôn giấu'},
            {line:'mang yêu thương ngày mình có nhau'},
            {line:'giờ như cánh chim bay cuối trời'},
            {line:'vì người đã trôi về nơi rất xa'},

            {line:'Giấu nỗi buồn vào trong'},
            {line:'nước mắt càng hy vọng'},
            {line:'yêu làm chi để rồi đợi vỡ'},
            {line:'Giấu nỗi buồn vào trong'},
            {line:'nước mắt càng hy vọng'},
            {line:'yêu làm chi để rồi vỡ tan'},
            {line:'sau bao nhiêu lâu ngày mình có nhau'},
            {line:'em cất bước bỏ lại phía sau'},
            {line:'những kí ức giờ là nỗi em vẫn không thể chôn giấu'},
            {line:'mang yêu thương ngày mình có nhau'},
            {line:'giờ như cánh chim bay cuối trời'},
            {line:'vì người đã trôi về nơi rất xa'},
            
            {line:'Yêu'},
            {line:'Mong'},
            {line:'Thôi đợi chờ'},
            {line:'Chỉ là chút vỡ tan người làm sao hiểu thấu'},
            {line:'Thôi'},
            {line:'Xin'},
            {line:'Nát lòng'},
            {line:'Chỉ là chút thoáng qua trong lòng anh'},
        ]
    },

    //0004
    {
        img: 'images/0004.jpg',
        name: '00:04',
        artist: 'Louies',
        music: 'musics/0004_louies.mp3',
        artist_list: [
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
        ],
        description: [
            {line: 'Song: 00:04'},
            {line: '———————————'},
            {line: 'Produce: BuiVanNgan'},
            {line: 'Mix & Master: CUSTHEKID'},
            {line: 'Artwork & Banner: Louies'},
            {line: '———————————'},
            {line: 'Released: 2020'
            },
            {line: '"Anh biết rằng anh đã sai..."'},
            {line: '———————————'
            },
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Anh cần một bài nhạc thật buồn để giúp cảm xúc này khá hơn.'},
            {line:'Không cần ai cản anh lại khi cảm xúc này đi quá trớn.'},
            {line:'Để nó trôi như dòng nước mà không một ai có thể cản ngăn, con tim như tảng băng thật lạ nhưng mà trong lòng ước.'},
            {line:'Mở cửa phòng bước ra là em với son môi tô thật nguệch ngoạc.'},
            {line:'Anh không muốn em ở bên một thằng đầu óc tư duy lệch lạc.'},
            {line:'Baby how you feel tonight wanna come to my place ?'},
            {line:'Hẹn gặp em vào một ngày khác ta bớt đau đớn hơn hôm nay.'},
            {line:'Vì đã từng muốn có em trong tay nhưng lại vụt mất vào phút chót.'},
            {line:'Đôi bàn tay ta nắm chặt nhau buộc mình như là những nút thắt.'},
            {line:'Có thể trò chuyện lại vs nàng, riêng anh đã là một bước ngoặt.'},
            {line:'Liệu ánh mắt ngày đó của em có còn nhìn anh khi trước mặt, không?'},
            {line:'Anh biết rằng anh đã sai.'},
            {line:'Anh biết rằng anh đã sai.'},
            {line:'Nhưng hiện tại đó là điều tốt nhất mà có thể cho cả hai.'},
            {line:'Bảo đổ lỗi cho phận tình duyên uhm điều đó cũng chả phải.'},
            {line:'Đêm hôm qua em chưa thể ngủ, nước mắt chảy dài trên mi.'},
            {line:'Nỗi lòng này khó để kể đủ, đau đớn nặng trĩu trên.'},
            {line:'Dặn lòng mình rằng hãy quên đi, lau nước mắt mỗi khi khóc.'},
            {line:'Đặt cho nỗi bùn này tên gì ? ảo tưởng tình yêu viễn vong'},
            {line:'Vì em luôn muốn anh đc vui nên toàn nhận lỗi sai về phần mình.'},
            {line:'Những lần cãi nhau lúc em khóc đến tận 4h vẫn lặng thinh.'},
            {line:'Haiz, sao cứ phải làm khổ bản thân.'},
            {line:'Tù ngục tối đen nơi con tim em giam cầm .'},
            {line:'Còn vài dự án vẫn đang dang dở, bài nhạc vui em mong anh viết.'},
            {line:'Nỗi bùn em giấu những đêm than thở, viết đầy trang vở nhưng không anh biết.'},
            {line:'Tình em giờ đây lãng phí như Văn Mai Hương'},
            {line:'Em ngăn ai thương để cứu vãn đi những cảm xúc vô thường.'},
            {line:'Những nỗi đau giờ chỉ mình hiểu.'},
            {line:'Gương mặt em đang lấp đầy màn hình chiếu.'},
            {line:'Những thứ đó giờ em làm vì tình yêu.'},
            {line:'Vui thì ít nhưng phiền muộn trong lòng này nhiều.'},
        ]
    },

    //3 nam trong con game
    {
        img: 'images/3namtrongcongame.jpg',
        name: '3 năm trong con game',
        artist: 'Louies, KLG (Explicit)',
        music: 'musics/3namtrongcongame_louies_klg.mp3',
        artist_list: [
            {
                artist_name:'Louies',
                imgsrc:'images/louies.jpg'
            },
            {
                artist_name:'KLG',
                imgsrc:'images/klg.jpg'
            },
        ],
        description: [
            {line: 'Song: 3 năm trong con game'},
            {line: '———————————'},
            {line: 'Recording: VOK Records'},
            {line: 'Mix & Master: KLG'},
            {line: '———————————'},
            {line: 'Released: 2022'},
            {line: '"Mượt mà như sunsilk."'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Records'}
        ],
        song_lyrics:[
            {line:'Not Available.'},
        ],
    },

    //81 kiep nan
    {
        img: 'images/81kiepnan.jpg',
        name: '81 kiếp nạn',
        artist: 'VOK (Explicit)',
        music: 'musics/81kiepnan_vok.mp3',
        artist_list: [
            {
                artist_name:'Chillingo',
                imgsrc:'images/chillingo.jpg'
            },
            {
                artist_name:'Wansentai',
                imgsrc:'images/wansentai.jpg'
            },
            {
                artist_name:'Wildde',
                imgsrc:'images/wildde.jpg'
            },
            {
                artist_name:'Custhekid',
                imgsrc:'images/custhekid.jpg'
            },
            {
                artist_name:'dwalker',
                imgsrc:'images/dwalker.jpg'
            },
        ],
        description: [
            {line: 'Song: 81 kiếp nạn'},
            {line: '———————————'},
            {line: 'Produce: Xxoff.G'},
            {line: 'Mix & Master: VOK Records'},
            {line: 'Original Track: Cảm vấn lộ tại hà phương (Tây Du Ký 1986 OST)'},
            {line: 'Artwork & Banner: Chillingo'},
            {line: '———————————'},
            {line: 'Released: 2019'},
            {line: '———————————'},
            {line: 'Follow us on Youtube, Instagram, Facebook for more songs upcoming!!!'},
            {line: '© VOK Record'}
        ],
        song_lyrics:[
            { line:'2 năm qua lời đồn đại, tụi tao tiếng tăm'},
            { line:'VOK mãi tồn tại, không cần viếng thăm'},
            { line:'Ngày bọn tao lấy được kinh là ngày chiến thắng'},
            { line:'Xô đổ cổng chắn vào dinh gọi tao là Đường Tăng'},
            { line:'Tiến xa đằng trước, mày không thấy đâu'},
            { line:'Có được mấy câu?!'},
            { line:'Tài năng thực lực, được có mấy cháu'},
            { line:'Đừng đòi lấy máu!'},
            { line:'Xung quanh đồ đệ!'},
            { line:'Bọn nó thổi flow, yêu ma cũng phải bể đầu'},
            { line:'81 kiếp nạn thì có đáng gì đâu'},
            { line:'Những thứ mày muốn tụi tao có từ đầu'},
            { line:'Anh em tao bận rộn tìm đường lên Tây Trúc'},
            { line:'Không rảnh như bọn mày chửi đổng trên Facebook'},
            { line:'Tây Thiên thỉnh kinh, mệnh lệnh của bồ tát'},
            { line:'Yêu quái ẩn mình tụi tao vẫn đồ sát'},
            { line:'Nạn nhân chưa lên tiếng'},
            { line:'Bọn mày vẫn không biết'},
            { line:'Bị Ma Vương cắt tiết'},
            { line:'Nghe tiếng la thảm thiết'},
            { line:'Máu chảy không kể xiết'},
            
            { line:'Tôn Ngộ Không, Trư Ngộ Năng, Sa Ngộ Tịnh yah'},
            { line:'Thấy tụi tao đi cũng phải giữ bình tĩnh yah'},
            { line:'Người đời thờ tao phong tao bậc cao tăng'},
            { line:'Người đời nhìn mày với con mắt trông ngộ nghĩnh no'},
            { line:'Không cần lo, không cần lo, không cần lo yah'},
            { line:'Bốn đồ đệ đưa tao đi kiếm tiền to yah'},
            { line:'Dù cho mỗi người có một điểm yếu'},
            { line:'Nhưng khi cùng làm việc bọn tao kiếm đến tỉ views'},
            
            { line:'Tôn Ngộ Không đã bước đến, mày mau bước ra'},
            { line:'Biết bao xác của dã thú, tao đây bước qua'},
            { line:'Biết điều không nên hỗn xược, đi nhích thêm một bước'},
            { line:'Cho mày một cước, nguyên cả đám tụi mày Lão Tôn xử luôn một lượt'},
            { line:'Huýt sáo vung tay gọi Cân Đẩu Vân.'},
            { line:'Quậy phá nhưng ngầu lòi như con cháu thần'},
            { line:'Dưới biển trên trời ai cũng biết tiếng'},
            { line:'Quyền hạn kinh khủng khuyên mày phải nên cẩn thận'},
            { line:'81 kiếp nạn tụi tao vượt qua'},
            { line:'Tính mạng hay thời gian tụi tao cược cả'},
            { line:'Vượt sông, vượt núi rồi đi đánh quái'},
            { line:'Khó khăn không thể làm tao đây bẻ bánh lái'},
            { line:'Tung hoàng ngang dọc trên đường thỉnh kinh'},

            { line:'Dù cho ai có nói gì, hãy là chính mình'},
            { line:'Không cần đính chính, hay cứ đinh ninh'},
            { line:'Và cứ bình tĩnh, thành công là cả 1 quá trình'},
            { line:'Tây Thiên thẳng tiến không được luyên thuyên'},
            { line:'Chuyên tâm luyện tập flow được uyển chuyển'},
            { line:'Bay màu đi những thử thách khó khan'},
            { line:'Còn những kẻ cản đường cẩn thận cho mày bay đầu'},
            { line:'Thay trời hành đạo, diệt quái thành thạo cho mày banh não, mặt sợ xanh xao'},
            { line:'Vung gậy thanh tao, không có cảnh cáo'},
            { line:'Bầu trời xoay đảo, tụi mày không có tuổi đứng sát bên cạnh tao.'},

            { line:'Tôn Ngộ Không, Trư Ngộ Năng, Sa Ngộ Tịnh yah'},
            { line:'Thấy tụi tao đi cũng phải giữ bình tĩnh yah'},
            { line:'Người đời thờ tao phong tao bậc cao tăng'},
            { line:'Người đời nhìn mày với con mắt trông ngộ nghĩnh no'},
            { line:'Không cần lo, không cần lo, không cần lo yah'},
            { line:'Bốn đồ đệ đưa tao đi kiếm tiền to yah'},
            { line:'Dù cho mỗi người có một điểm yếu'},
            { line:'Nhưng khi cùng làm việc bọn tao kiếm đến tỉ views'},

            { line:'Dừng lại chặng này chút, tới phiên lượt tao'},
            { line:'Trong tay bồ cào giáng lên đầu mày nhức'},
            { line:'Muốn ăn được sao?'},
            { line:'Diệt trừ yêu ma tụi mày vẫn ngang ngược sao'},
            { line:'Cho mày lối thoát, không chịu đi mà đứng đó ngáng đường tao'},
            { line:'Sao mà sánh được nhau, tao hộ tống Đường Tăng'},
            { line:'Mày không đánh được đâu, vì xung quanh có đệ tử thường chắn'},
            { line:'Lấy sách kinh, tu tỉnh tịnh tâm tích tụ lên đức thánh'},
            { line:'Thiên Bồng Nguyên Soái tao tung ra sức đánh hóa “Lục Giáp Kì Môn”'},
            { line:'Thì xong rồi, còn lại tao nhường cho Ngộ Tịnh đánh tiếp'},
            { line:'Sư phụ để đó, con lo cho'},
            { line:'Giết yêu quái hater khoái so đo canh me và công kích'},
            { line:'Làm những điều mà phật tổ không thích'},
            { line:'81 gian nan, khó khan và thử thách, phải vượt qua'},
            { line:'Rồi rèn luyện pháp thuật đến xác thực mà phát bực lũ yêu ma cứ khiêu khích'},
            { line:'Dùng lyric vần chi chít mỗi khi diss như cửu xỉ'},
            { line:'Cơ mà đừng thủ thỉ như lũ khỉ đâm sau lưng Ngộ Không'},
            { line:'Đường lên lấy kinh đã tới,'},
            { line:'Như VOK 2 năm qua vẫn vững chắc, '},
            { line:'cân nhắc battle dẹp loạn mấy cái thằng ảo tưởng đưa tụi mày về mồ chôn.'},

            { line:'Bảo vệ Đường Tăng lên Tây Thiên'},
            { line:'Anh em thay phiên nhau trừ gian diệt ác'},
            { line:'Không cần biết là thần, quỷ hay tiên'},
            { line:'VOK chuyên sâu lập ra kiệt tác'},
            { line:'Mà còn bao việc khác chờ tao giải quyết'},
            { line:'Đại khai Việt Rap làm dễ cho bọn nhãi biết'},

            { line:'Đường đi thỉnh kinh, vượt qua 81 ải'},
            { line:'Yêu ma quỷ quái quỳ trước tao mà hối cải'},
            { line:'Yeah yeah.'},
            { line:'Đeo vòng đầu lâu, tay cầm Bảo Trượng'},
            { line:'18 phép thần thông mạnh như thảo dược'},
            { line:'Tam đệ Sa Ngộ Tĩnh khi so về độ đỉnh thì ăn tươi nuốt sống mấy thằng ảo tưởng'},
            { line:'Sao mày có thể đụng vào được Huyền Trang'},
            { line:'Khi thất bại là thứ duy nhất mày được quyền mang'},
            { line:'Anh em tụi tao tứ phương hội tụ cho bọn mày biết'},
            { line:'Overdose Kids đến từ Việt Nam.'},

            { line:'Dẫn đưa thầy trò đi thỉnh kinh'},
            { line:'Đưa lên đỉnh cao tịnh tâm để chỉnh ình'},
            { line:'Lĩnh xin đặc ân đánh thức sự bứt rứt'},
            { line:'Khi xưa con thất đức, ngọc hoàng xin thứ cho'},
            { line:'Mười vạn tám ngàn dặm phò giá Đường Tăng về nơi Tây Trúc Kinh'},
            { line:'Yêu tinh ngay trước bao lần định thịt thầy'},
            { line:'Chưa đến lúc ra tay, trước mắt làm thịt mày'},
            { line:'Thần thông 9 phép ít khi nào tao tham chiến'},
            { line:'Ngộ Không đánh trước, khơi mào xong cắt tiết'},
            { line:'Huynh đệ như anh em, dù nhiều lần cãi nhau'},
            { line:'Để thầy phải răn đe, diss một trận cũng phải đau'},
            { line:'Rải rác vài câu, thầy dặn chớ đá sau lưng'},
            { line:'Nói thẳng ra mặt nói lời,'},
            { line:'Mày bưng bối cảnh với mỗi mảnh đời'},
            { line:'Cảnh giới mày cần đạt được là thanh tâm tịnh ý 1 lòng với trời.'},

            { line:'Tôn Ngộ Không, Trư Ngộ Năng, Sa Ngộ Tịnh yah'},
            { line:'Thấy tụi tao đi cũng phải giữ bình tĩnh yah'},
            { line:'Người đời thờ tao phong tao bậc cao tăng'},
            { line:'Người đời nhìn mày với con mắt trông ngộ nghĩnh no'},
            { line:'Không cần lo, không cần lo, không cần lo yah'},
            { line:'Bốn đồ đệ đưa tao đi kiếm tiền to yah'},
            { line:'Dù cho mỗi người có một điểm yếu'},
            { line:'Nhưng khi cùng làm việc bọn tao kiếm đến tỉ views'},
        ]
    },

];

loadSong(song_index);
populatePlaylist();

function loadSong(song_index){
    clearInterval(updateTimer);
    reset();

    current_song.src = music_list[song_index].music;
    current_song.load();
    
    song_banner.style.backgroundImage = "url(" + music_list[song_index].img +")";
    song_name.textContent = music_list[song_index].name;
    song_artist.textContent = music_list[song_index].artist;
    now_playing.textContent = "Playing";

    //update song_description
    let song_description = document.getElementById("song-description");
    
    while(song_description.firstChild){
        song_description.removeChild(song_description.firstChild);
    }
    
    for(let i = 0; i < music_list[song_index].description.length; i++){
        var song_description_p = document.createElement("p");
        song_description_p.appendChild(document.createTextNode(music_list[song_index].description[i].line));
        song_description.appendChild(song_description_p);
    }

    //update lyrics
    let lyrics_container = document.getElementById("lyrics");
    while(lyrics_container.firstChild){
        lyrics_container.removeChild(lyrics_container.firstChild);
    }
    for(let i = 0; i < music_list[song_index].song_lyrics.length; i++){
        var song_lyrics_p = document.createElement("p");
        song_lyrics_p.appendChild(document.createTextNode(music_list[song_index].song_lyrics[i].line));
        lyrics_container.appendChild(song_lyrics_p);
    }

    //update artist list
    let currartistlist = document.getElementById("artist-info-wrapper");
    while(currartistlist.firstChild){
        currartistlist.removeChild(currartistlist.firstChild);
    }

    for(let i = 0; i < music_list[song_index].artist_list.length; i++){
        var artist_info = document.createElement("div");
        artist_info.setAttribute("class", "artist-info");
    
        var artist_ava = document.createElement("div");
        artist_ava.setAttribute("class", "artist-ava");
        artist_ava.setAttribute("id", "artist-ava"+i);
    
        var artist_name = document.createElement("div");
        artist_name.setAttribute("class", "artist-name");

        artist_name.appendChild(document.createTextNode(music_list[song_index].artist_list[i].artist_name));
        artist_info.appendChild(artist_ava);
        artist_info.appendChild(artist_name);
        artis_info_wrapper.appendChild(artist_info);

        var artist_ava_banner = document.getElementById("artist-ava"+i);
        artist_ava_banner.style.backgroundImage = "url(" + music_list[song_index].artist_list[i].imgsrc +")";
    }

    updateTimer = setInterval(setUpdate, 1000);

    current_song.addEventListener('ended', nextSong);
}

function reset(){
    current_time.textContent = "00:00";
    total_time.textContent = "00:00";
    time_change_slider.value = 0;
}

function randomSong(){
    isRandom ? pauseRandom(): playRandom();
}

function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}

function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}

function repeatSong(){
    isRepeat ? pauseRepeat() : playRepeat();
}

function playRepeat(){
    isRepeat = true;
    repeatIcon.classList.add('repeatActive');
}

function pauseRepeat(){
    isRepeat = false;
    repeatIcon.classList.remove('repeatActive');
}

function playpauseSong(){
    isPlaying ? pauseSong() : playSong();
}

function playSong(){
    current_song.play();
    isPlaying = true;
    now_playing.textContent = "Playing";
    play_pause_button.innerHTML = '<i class="fas fa-pause-circle fa-5x"></i>';
}

function pauseSong(){
    current_song.pause();
    isPlaying = false;
    now_playing.textContent = "Pausing";
    play_pause_button.innerHTML = '<i class="fas fa-play-circle fa-5x"></i>';
}

function nextSong(){
    prev_song_index = song_index;
    if(isRepeat === true){
        song_index = song_index;
    }
    else if(song_index < music_list.length - 1 && isRandom === false){
        song_index += 1;
    }
    else if(song_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        if(random_index === song_index){
            random_index = Number.parseInt(Math.random() * music_list.length);
        }
        song_index = random_index;
    }
    else{
        song_index = 0;
    }
    loadSong(song_index);
    playSong();
}

function prevSong(){
    if(isRepeat === true){
        song_index = song_index;
    }
    else if(song_index > 0){
        song_index-=1;
    }
    else{
        song_index = music_list.length - 1;
    }
    loadSong(song_index);
    playSong();
}

function changeTime(){
    let change_Time = current_song.duration * (time_change_slider.value / 100);
    current_song.currentTime = change_Time;
}

function setVolume(){
    current_song.volume = volume_slider.value/100;
}

function setUpdate(){
    let change_time_position = 0;
    if(!isNaN(current_song.duration)){
        change_time_position = current_song.currentTime * (100 / current_song.duration);
        time_change_slider.value = change_time_position;

        let currentMinutes = Math.floor(current_song.currentTime / 60);
        let currentSeconds = Math.floor(current_song.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(current_song.duration / 60);
        let durationSeconds = Math.floor(current_song.duration - durationMinutes * 60);

        if(currentSeconds < 10){
            currentSeconds = "0" + currentSeconds
        };
        if(durationSeconds < 10){
            durationSeconds = "0" + durationSeconds;
        }
        if(currentMinutes < 10){
            currentMinutes = "0" + currentMinutes;
        }
        if(durationMinutes < 10){
            durationMinutes = "0" + durationMinutes;
        }

        current_time.textContent = currentMinutes + ":" + currentSeconds;
        total_time.textContent = durationMinutes + ":" + durationSeconds;
    }
}

function populatePlaylist(){
    for(let i = 0; i < music_list.length; i++){
        var playlist_song = document.createElement("div");
        playlist_song.setAttribute("class", "playlist-song");
        playlist_song.setAttribute("id", i);
        playlist_song.setAttribute("onClick", "playPlaylistSong(this.id)");
        
        var playlist_song_banner = document.createElement("div");
        playlist_song_banner.setAttribute("class", "playlist-song-banner");
        playlist_song_banner.setAttribute("id", "playlist-song-"+i);


        var playlist_song_info = document.createElement("div");
        playlist_song_info.setAttribute("id", "playlist-song-info-" + i);
        playlist_song_info.setAttribute("class", "playlist-song-info");
        playlist_song_info.appendChild(document.createTextNode(music_list[i].name + " - " + music_list[i].artist));
        playlist_song_info.style.color = "whitesmoke";

        playlist_song.appendChild(playlist_song_banner);
        playlist_song.appendChild(playlist_song_info);
        playlist.appendChild(playlist_song);
        var playlist_banner = document.getElementById("playlist-song-"+i);
        playlist_song.style.cursor = "pointer";
        playlist_banner.style.backgroundImage = "url(" + music_list[i].img +")";
    }
}

function playPlaylistSong(song_id){
    song_index = song_id;
    loadSong(song_index);
    playSong();
}
