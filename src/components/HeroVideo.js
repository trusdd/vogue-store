import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroVideo.css';

gsap.registerPlugin(ScrollTrigger);

function HeroVideo() {
  const containerRef = useRef();
  const textRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: 1,
        onUpdate: (self) => {
          const videoScale = 1 + self.progress * 0.3;
          const videoBlur = self.progress * 5;
          const textY = self.progress * 120;
          const textOpacity = Math.max(0, 1 - self.progress * 1.2);

          if (videoRef.current) {
            videoRef.current.style.transform = `scale(${videoScale})`;
            videoRef.current.style.filter = `blur(${videoBlur}px)`;
          }

          if (textRef.current) {
            textRef.current.style.transform = `translateY(${textY}px)`;
            textRef.current.style.opacity = textOpacity;
          }
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openFilmModal = () => {
    alert('Yours YouTube video');
  };

  return (
    <div ref={containerRef} className='hero-premium'>
      <div className='hero-video-wrapper'>
        <video
          ref={videoRef}
          className='hero-video'
          autoPlay
          loop
          muted
          playsInline>
          <source src='/video/runway.mp4' type='video/mp4' />
        </video>
        <div className='hero-video-overlay'></div>
      </div>

      <div className='hero-premium-content' ref={textRef}>
        <div className='hero-premium-badge'>FW 2026</div>
        <h1>
          VOGUE
          <br />
          STUDIO
        </h1>
        <p>
          WHERE MINIMALISM
          <br />
          MEETS PERFECTION
        </p>
        <div className='hero-premium-buttons'>
          <button className='btn-primary-hero' onClick={scrollToProducts}>
            EXPLORE
          </button>
          <button className='btn-outline-hero' onClick={openFilmModal}>
            FILM
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroVideo;
