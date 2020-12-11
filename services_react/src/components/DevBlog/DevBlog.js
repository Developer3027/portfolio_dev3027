import React from 'react'

const DevBlog = () => {
  return (
    <div className='wrapper'>
      <div className='card'>
        <h3>Dev Blog</h3>
        <h5>My Simple Blog Site</h5>
        <p>
          The blog site is a WordPress site created using Elementor Pro. It is a
          quick site with a few testing articles to provide an example of a blog
          site. I loved the layout of this site, with the main header and nav
          below. Then the site having the side bar for quick information and
          access to various categories.
        </p>
        <p>
          While searching through UpWork I found that many people were looking
          for, either someone who knew WordPress, or someone who knew Elementor.
          So I got Elementor Pro and decided to start making some sample sites.
          In researching to learn more I ran across the{' '}
          <a
            className='p-link'
            href='https://youtu.be/F9UBPbsZ2Rs'
            rel='noopener noreferrer'
            target='_blank'
          >
            "Living with Pixels"
          </a>{' '}
          channel and loved his style. This blog is a mock of one of his
          tutorials. It was here that I learned what specs WordPress looked for
          when laying out certain templates allowing me to further customize the
          site for potential clients.
        </p>
        <p>
          I had used a google doc template in the past that used a color
          combination of red and black with the Oswald font. I loved the feel,
          so I tried to provide something similar here. Overall I am pleased
          with how it came out, but it is still, very much, a work in progress.
          You can get to it with the blog link of the top nav.
        </p>
      </div>
    </div>
  )
}

export default DevBlog
