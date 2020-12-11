import React from 'react'

const Landing = () => {
  return (
    <div className='wrapper'>
      <div className='card'>
        <h3>Landing Page</h3>
        <h5>Created WordPress / Elementor</h5>
        <h6>UpWork package $800.00</h6>
        <p>
          A landing page is a specifically designed advertisement page. It is a
          single, scrolling page made of several sections and a single Call To
          Action, (CTA). A typical page would consist of a hero section that
          includes a unique selling proposition or CTA, the benefits of your
          product or service, and social proof, aka testimonial. You may wish to
          include a form to collect emails.
        </p>
        <a
          className='p-link'
          href='https://kathrynroberts.now.sh'
          target='_blank'
          rel='noopener noreferrer'
        >
          Example Landing Page
        </a>
        <br />
        <a
          className='p-link'
          href='https://www.upwork.com/fl/masonroberts4?s=1044578476142100494'
          target='_blank'
          rel='noopener noreferrer'
        >
          UpWork Profile
        </a>
        <p>
          At A Glance;
          <ul>
            <li>WordPress with Elementor</li>
            <li>SEO Meta Footing</li>
            <li>Up to 5 sections</li>
          </ul>
          Section examples;
          <br /> Hero, Call To Action, Testimonial, Information Cards
        </p>
      </div>
    </div>
  )
}

export default Landing
