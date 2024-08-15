gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

let sectionOne = gsap.timeline({
  scrollTrigger:{
    trigger:'.section1',
    scrub:true,
    // markers:true,
    pin:true,
    start:'top',
    end:'bottom',
  }
})


sectionOne.from('.section1 span:first-child',{
  x:'-100vw',duration:1
})
.from('.section1 span:last-child',{
  x:'100vw',duration:1
},'<')
.from('.section1 p',{
  rotation:90, opacity:0, transformOrigin: "left center"
})
.from('.section1 img',{
  y:'100vh'
})

let sectionTwo = gsap.timeline({
  scrollTrigger:{
    trigger:'.section2',
    scrub:true,
    // markers:true,
    pin:true,
    start:'top',
    end:'bottom',
  }
})

sectionTwo.from('.section2 span',{
  y:'-100vw',stagger:1
})
.from('.section2 p',{
  opacity:0,rotateY:90
},'>')


let sectionThree = gsap.timeline({
  xPercent: -100 * (document.querySelectorAll(".section3 p").length - 1),
  scrollTrigger:{
    trigger:'.section3',
    scrub:true,
    // markers:true,
    pin:true,
    start:'top',
    end:'bottom',
  }
})

sectionThree.from('.section3 h2',{
  scale:10
})
.from('.section3 span',{
  y:'100vw',stagger:1
})
.to('.section3 span',{
  backgroundColor:'white',color:'black'
},'<')

gsap.to(".section4", {
  xPercent: -100 * (document.querySelectorAll(".portfolio-item").length - 1), 
  ease: "none",
  scrollTrigger: {
    trigger: ".section3",
    start: "top +=100", 
    end: "bottom-=100", 
    scrub: true,
    pin: true, 
    markers:true,
  }
});

gsap.from('.section4 .portfolio-item', {
  x: '100vw',
  stagger: 1,
  scrollTrigger: {
    trigger: '.horizontal-sections',
    start: "top", 
    end: 'bottom',
    pin: true,
    scrub: true,
    anticipatePin: 1,
    // markers: true
  }
});



const heading = document.querySelector('.section5 h2');
const text = heading.innerText;
const formattedText = text
      .split('')
      .map(char => char === ' ' ? '&nbsp;' : `<span class="char">${char}</span>`)
      .join('');
    heading.innerHTML = formattedText;

let sectionFive = gsap.timeline({
  scrollTrigger:{
    trigger:'.section5',
    scrub:true,
    // markers:true,
    pin:true,
    start:'top',
    end:'bottom',
  }
})

sectionFive.from('.section5 span', {
  y:'-100vw',stagger:1,duration:1
})
.from('.section5 p',{
  y:'50px',opacity:0
})
.from('.section5 button',{
  scale:0,opacity:0
})
.to('.section5',{
  backgroundColor:'black'
})
.from('.section5',{
  backgroundPosition: '150% 100%'
})

