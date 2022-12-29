//Because of the songs and artworks copyright, I am not allowed to upload all songs files and images

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
