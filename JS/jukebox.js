document.getElementById('playbtn').addEventListener("click", function () {
  Jukebox.play();
});

document.getElementById('pausebtn').addEventListener("click", function () {
  Jukebox.pause();
});

document.getElementById('nextbtn').addEventListener("click", function () {
  Jukebox.next();
});

document.getElementById('previousbtn').addEventListener("click", function () {
  Jukebox.previous();
});

document.getElementById('stopbtn').addEventListener("click", function () {
  Jukebox.stop();
});

class Song {
  constructor(filePath){
    this.audio = new Audio(filePath);
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}

const Jukebox = {
  Playing: false,

  songList: [],

  addSong(song) {
    this.songList.push(song)
  },

  init() {
    this.currentSongIndex = 0;
  },

  play() {
    this.songList[this.currentSongIndex].play();
    this.Playing = true;
  },

  pause() {
    this.songList[this.currentSongIndex].pause();
    this.Playing = false;
  },

  stop() {
    this.songList[this.currentSongIndex].stop();
    this.Playing = false;
  },

  next() {
    if (this.Playing) {
      this.stop()
    }
    /*if (this.currentSongIndex === this.songList.length -1) {
      this.currentSongIndex = 0;
    } else {
      this.currentSongIndex++
    }*/
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songList.length;
    // 0 % 4 === 0
    // 1 % 4 === 1
    // 2 % 4 === 2
    // 3 % 4 === 3
    // 4 % 4 === 0
    this.play();
  },

  previous() {
    if (this.Playing) {
      this.stop();
    }
    if (this.currentSongIndex === 0) {
      this.currentSongIndex = this.songList.length -1;
    } else {
     this.currentSongIndex--
    }

    this.play()
  },

  highlightSong() {
    for (let liElement = document.getElementById("allSongs").firstChildElement; liElement !== null; liElement = liElement.nextElementSibling) {
        const songLiElements = document.querySelectorAll("ul#allSongs > li"); 
      }
    for (const liElement of songLiElements) {
      liElement.classList.remove("playing");
     }
     songLiElements[currentSongIndex].classList.add("playing");
  }
};

Jukebox.addSong(new Song("songs/Nightcall.mp3"));
Jukebox.addSong(new Song("songs/AroundTheWorld.mp3"));
Jukebox.addSong(new Song("songs/I_dontWannaWasteMyTime.mp3"));
Jukebox.addSong(new Song("songs/StreetWalkin.mp3"));

Jukebox.init();
//Jukebox.highlightSong();



