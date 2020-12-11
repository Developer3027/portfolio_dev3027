import React from 'react'

const NutraSite = () => {
  return (
    <div className='wrapper'>
      <div className='card'>
        <h3>NutraSite</h3>
        <h5>Concept for a web presence for a local store</h5>
        <p>
          The idea of this site came through research of an concept. With the
          new climate of covid 19, I was thinking of the new way of shopping. I
          was looking into packaging the concept of creating a system that local
          shops could put products online for local members to shop, pick or
          have delivered.
        </p>
        <p>
          I ran across a local sports health shop, located in a small shopping
          center beside a well known gym with no web presence. The shop had
          placed some photos of the interior and the street view for google.
          Here I got an idea of the major products they sold. From this
          information I created a frontend for this concept.
        </p>
        <p>
          Looking through the photos I was able to find products the store
          seemed to favor, located those brands online, and reworked images of
          those targeted products to have a clear alpha channel at various
          sizes. The site layout is an older one but has a modern feel.
        </p>
        <p>
          Hand coded in VScode and set up on an AWS bucket. This showed the
          potential for the site. With AWS it would be very scalable. I was very
          pleased with how the mouse over state of the product examples turned
          out. The site was built for desktop only and is currently only
          suitable on desktop. Tablet is ok, but mobile is very disordered.
          Fixing this is on my todo list.
        </p>
        <p>
          The concept is still a work in progress and is why this project has
          been set aside for the moment. I have designed a more modern feel to
          the site and am working to set it up in WordPress with Elementor Pro.{' '}
        </p>
        <a
          className='p-link'
          href='https://nutrasite.s3.us-east-2.amazonaws.com/index.html'
          rel='noopener noreferrer'
          target='_blank'
        >
          NutraSite on AWS
        </a>
        <br />
        <a
          className='p-link'
          href='https://www.figma.com/file/YPd9Eef7Vd9VEoQAK32ulO/NutraSite?node-id=0%3A1'
          target='_blank'
          rel='noopener noreferrer'
        >
          The Figma Design
        </a>
      </div>
    </div>
  )
}

export default NutraSite
