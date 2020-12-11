import React from 'react'

const Bounce = () => {
  return (
    <div className='wrapper'>
      <div className='card'>
        <h3>Keyboard Sounds</h3>
        <h5>Playing with HTML Canvas</h5>
        <p>
          I have been wanting to create a game for sometime but all good things
          to those who a patient. I did do some playing around with Canvas
          though, toward the start of this coding journey. I found a tutorial on
          how object interact, or more rather, the point at which two objects
          intersect.
        </p>
        <p>
          After figuring out how to create the balls and how to get them to
          bounce off each other, the walls and the floor, I found a guitar sound
          package and connected it to the keyboard. When certain keys are
          pressed, a guitar chord is strung and both a create and destroy event
          is created. I found that to many balls on the screen created to much
          lag, so some clean up was needed while playing around.
        </p>
        <p>
          Then there was the mass effect. I wanted balls of different sizes to
          bounce as though they had different mass. Press the "O" key to get a
          deep bass tone and a large heavy ball. "P" will give you a different
          bass tone and a small group of large balls of different weights. If
          you find things starting to lag or just to much clutter, you can clear
          the screen by clicking the left mouse button on the screen.
        </p>
        <p>
          This was a lot of fun and is still a work in progress, but at the end
          of the day, it is just something to play and enjoy, as I hope you do.
          Please Enjoy.
        </p>
        <a
          className='p-link'
          href='https://keyboard-sound.now.sh'
          rel='noopener noreferrer'
          target='_blank'
        >
          Keyboard Sound
        </a>
      </div>
    </div>
  )
}

export default Bounce
