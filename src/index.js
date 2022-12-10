const ctx = document.getElementById('canvas').getContext('2d')

const game = new Game(ctx)

game.start()


    // TODO : set Listeners
document.addEventListener('keydown', e => {
  game.onKeyEvent(e)
})
    
    document.addEventListener('keyup', e => {
      game.onKeyEvent(e)
    })

   