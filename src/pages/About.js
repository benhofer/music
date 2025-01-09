import React, { useEffect } from "react";

function About(props) {
  const location = document.location.href;

  useEffect(() => {
    if (location.endsWith("about")) {
      props.setColor("blue");
      props.setBgOpacity(0.1);
    }
  }, [props, location]);

  return (
    <div className='content'>
      <h1>Soundscape of Praise</h1>
      <p>
        Earth, the planet on which we dwell, was created to embody a wondrous
        soundscape of praise. All the trees of the field will clap their hands!
        The mountains will sing for joy! I want to participate in these fields
        of praise in the fullest and richest ways that I am able. I'd like to
        invite you to join me on this journey of songwriting, singing and
        praising the Great Creator of the Earth and the stars and everything
        that is: El Elyon! The Lord God in the Highest!{" "}
      </p>
      <p>
        For more specifics, please visit{" "}
        <a
          href='https://www.patreon.com/posts/called-to-new-115946372'
          target='_blank'
          rel='noreferrer'
        >
          this blog post on Patreon
        </a>
        .
      </p>
    </div>
  );
}

export default About;
