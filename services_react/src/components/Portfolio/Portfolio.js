import React from 'react'

const Portfolio = () => {
  return (
    <div className='wrapper'>
      <div className='card'>
        <h3>Portfolio</h3>
        <h5>This single portfolio page</h5>
        <p>
          This page is hand coded using VScode in HTML, CSS, and some
          Javascript. This section that is displaying this information and the
          navigation to the left, or directly above, is built in React.{' '}
        </p>
        <p>
          I had run through several different design concepts before landing
          upon this one. One day while surfing dribble I happened upon this{' '}
          <a
            className='p-link'
            href='https://dribbble.com/shots/10724776-Carlos-Personal-Portfolio-Website?utm_source=Clipboard_Shot&utm_campaign=muhsalmon&utm_content=Carlos%20-%20Personal%20Portfolio%20Website&utm_medium=Social_Share'
            target='_blank'
            rel='noopener noreferrer'
          >
            mock up
          </a>{' '}
          for Carlos and feel in love. It was the upper hero section that had
          me. I wanted a little more clutter though, so I used it as a template
          to build the page you see here. I did not have a pic of myself like
          the one in the mock up. What I ended up doing was cutting a thoughtful
          pose out of a slightly older picture. Applied a mask to shape it, then
          cut and set translucent layers on top of each other to create that
          effect on the leading edge. It is most notable on the hand.
        </p>
        <p>
          I have been coding with the alias Developer3027 for awhile and it felt
          natural to make that my brand. I love the feel of the color
          emphasising the Dev. The gears felt like, "mechanic of the web", and
          seeing as I was a auto tech for a decade, it also felt right.
        </p>
        <p>
          This portfolio will represent the work I can do, direct potential
          clients to my UpWork profile, and grow into a social / school
          community where I can share what I have learned and how I learned it
          with those who would be interested. As of the start of September 2020,
          although the site is not complete, I believe it does represent the
          breath of the work I can do. There are many sites still in progress,
          but all demonstrate my frontend strengths. I invite you to join me as
          progress continues.
        </p>
      </div>
    </div>
  )
}

export default Portfolio
