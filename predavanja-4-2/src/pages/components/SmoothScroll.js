import React, { useRef, useState } from "react";

export default function SmoothScroll() {
  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <>
      <button onClick={handleScroll}>Scroll</button>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <section ref={sectionRef}>This is the section text</section>


    </>
  );
}
