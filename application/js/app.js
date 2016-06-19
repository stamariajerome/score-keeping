(function() {


  var scoreKeeper = {
    /** init values **/
    //winner
    winner: document.querySelector('#winner'),
    // hide
    display: document.querySelector('#displayWinner'),

    isGameOver: false,
    // 0 string
    maxPlay: document.querySelector('#upTo'),
    // 0 string
    p1Score: document.querySelector('#p1score'),
    // 0 string
    p2Score: document.querySelector('#p2score'),
    // 0 string
    play: document.querySelector('#play'),

    p1Button: document.querySelector('#player-1'),
    p2Button: document.querySelector('#player-2'),
    resetButton: document.querySelector('#reset'),

    //init function
    init: function() {
      this.p1Button.addEventListener('click', this.addScore.bind(this));
      this.p2Button.addEventListener('click', this.addScore.bind(this));
      this.maxPlay.addEventListener('change', this.max.bind(this));
      this.resetButton.addEventListener('click', this.reset.bind(this));
    },

    //add scores to players 1 or 2
    addScore: function(e) {
      //this refers to the parent object
      var el = e.target;
      var filter =  el.getAttribute('id').replace(/-/g, ' ');
      var capitalized = filter.charAt(0).toUpperCase() + filter.slice(1);
      if(this.isGameOver === false && (Number(this.p1Score.textContent) !== Number(this.maxPlay.value)) && Number(this.p2Score.textContent) !== Number(this.maxPlay.value)) {

        if(el.getAttribute('id') === 'player-1') {
          // logic to add score to player 1
          this.p1Score.textContent = Number(this.p1Score.textContent) + 1;
          if(Number(this.p1Score.textContent) === (Number(this.maxPlay.value))) {
            filter =  el.getAttribute('id').replace(/-/g, ' ');
            capitalized = filter.charAt(0).toUpperCase() + filter.slice(1);
            this.winner.textContent = capitalized;
            this.display.classList.toggle('toggleWinner');
            this.isGameOver = true;
          }
        } else {
          //logic to add score to player 2
          console.log('added score to player 2');
          this.p2Score.textContent = Number(this.p2Score.textContent) + 1;
          if(Number(this.p2Score.textContent) === (Number(this.maxPlay.value))) {
            filter =  el.getAttribute('id').replace(/-/g, ' ');
            capitalized = filter.charAt(0).toUpperCase() + filter.slice(1);
            this.winner.textContent = capitalized;
            this.display.classList.toggle('toggleWinner');
            this.isGameOver = true;
          }
        }
      } else {
        if((Number(this.maxPlay.value) !== 0) && (Number(this.p1Score.textContent) === Number(this.maxPlay.value)) || (Number(this.p2Score.textContent) === Number(this.maxPlay.value))) {
          if((Number(this.maxPlay.value) === 0)) {
            console.log('Raise Max Plays!');
          } else {
            this.isGameOver = true;
          }
        }
      }
    },

    max: function() {
      // check first if maxPlay >= 0
      if(Number(this.maxPlay.value) > 0) {
        //maxplay to the maxscoreplay
        this.play.textContent = this.maxPlay.value;
      } else {
        alert('maxplay is less than 0');
      }
    },

    reset: function() {
      //resets the maxplay to 0 and throws it to play
      var reset = this.maxPlay.value = (Number(this.maxPlay.value) - Number(this.maxPlay.value)).toString();
      this.play.textContent = reset;
      //resets the player 2 score to 0
      this.p1Score.textContent = Number(this.p1Score.textContent) - Number(this.p1Score.textContent);
      //resets the player 2 score to 0
      this.p2Score.textContent = Number(this.p2Score.textContent) - Number(this.p2Score.textContent);
      //reset the value to false
      if(this.isGameOver === true) {
        this.isGameOver = false;
        this.display.classList.toggle('toggleWinner');
      }

    }

  };

  scoreKeeper.init();
})();
