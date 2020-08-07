<template>
  <div>
    <div v-if="winner !== null" :class='"screen "+winner'>
      <span v-if="winner !== 'tie'">The winner is</span>
      <span v-else>It's a Tie</span>
      <div class="button-container">
        <button class="new-game" @click="restart">
          new game
        </button>
      </div>
    </div>
    <div v-if="winner===null" class="main-screen">
      <div class="head">
        <div :class='current === "x" ? "x" : "x inactive"'></div>
        <h1>Tic Tac Toe</h1>
        <div :class='current === "o" ? "o" : "o inactive"'></div>
      </div>
      <div class="board">
        <div @click="click(index, 0)" v-for="(i, index) in board[0]" v-bind:key="i" :class='getClass(index, 0)'></div>
        <div @click="click(index, 1)" v-for="(i, index) in board[1]" v-bind:key="i + '2'" :class='getClass(index, 1)'></div>
        <div @click="click(index, 2)" v-for="(i, index) in board[2]" v-bind:key="i + '3'" :class='getClass(index, 2)'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameBoard',
  data () {
    return {
      winner: null,
      current: 'x',
      board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    }
  },
  methods: {
    getClass (i, j) {
      let cls = 'field'
      if (this.board[j][i] === 0) {
        cls = cls + ' hover' + this.current.toUpperCase()
      } else if (this.board[j][i] === 'x') {
        cls = cls + ' x'
      } else if (this.board[j][i] === 'o') {
        cls = cls + ' o'
      }
      return cls
    },
    click (i, j) {
      if (this.board[j][i] === 0) {
        this.board[j][i] = this.current
        this.current = this.current === 'x' ? 'o' : 'x'
      }
      this.checkWinner()
    },
    checkWinner () {
      for (let i = 0; i < 3; i++) {
        if (this.board[i][0] !== 0 && this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]) {
          this.winner = this.board[i][0]
          return
        }
        if (this.board[0][i] !== 0 && this.board[1][i] === this.board[0][i] && this.board[0][i] === this.board[2][i]) {
          this.winner = this.board[0][i]
          return
        }
        if (this.board[0][0] !== 0 && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
          this.winner = this.board[0][0]
          return
        }
        if (this.board[0][2] !== 0 && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
          this.winner = this.board[0][2]
          return
        }
        let tie = true
        for (const row of this.board) {
          for (const i of row) {
            if (i === 0) tie = false
          }
        }
        if (tie) {
          this.winner = 'tie'
        }
      }
    },
    restart () {
      this.winner = null
      this.current = 'x'
      this.board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    }
  }
}
</script>

<style scoped>
.screen {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: center;
  color: white;
  font-size: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.screen span {
  margin-top: 3rem;
}
.button-container {
  height: 10%;
  margin-bottom: 3rem;
}
.new-game {
  width: max-content;
  padding: 0 2rem;
  background: transparent;
  color: white;
  border: solid 2px white;
  border-radius: 1rem;
  font-size: 2rem;
  height: 80%;
}
.tie {
  background: #956BD6;
}
.new-game:hover {
  background: white;
  color: black;
}
.head {
  display: flex;
  max-width: 900px;
  margin: auto;
}
.head .x, .head .o {
  height: 150px;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100px;
  transition: 0.5s ease;
  border-radius: 5px;
}
.head h1 {
  font-size: 70px;
  height: 150px;
  width: min-content;
  line-height: 49px;
  text-align: left;
  margin-top: 0;
  padding: 0 50px;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-gap: 15px;
  margin: auto;
  width: max-content;
}
.field {
  width: 150px;
  height: 150px;
  background-color: #efefef;
  border-radius: 5px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100px;
  transition: 0.5s ease;
  cursor: pointer;
}
.inactive {
  background-color: #efefef !important;
}
.x {
  background-image: url("../assets/x.svg");
  background-color: #FF4500;
}
.hoverX:hover {
  background-image: url("../assets/x.svg");
}
.hoverO:hover {
  background-image: url("../assets/o.svg");
}
.o {
  background-image: url("../assets/o.svg");
  background-color: #00B060;
  /*background-color: #065C4B;*/
}

@media (max-width: 600px) {
  .field {
    width: 100px;
    height: 100px;
    background-size: 75px;
  }
  .head h1 {
    padding: 0 10px;
  }
  .head .x, .head .o {
    background-size: 75px;
  }
}
</style>
