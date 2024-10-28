import React from 'react'
import Projects from './component/Project/page';
import Skills from './component/Skill/page';
import Home from './component/Home/page'
import Resume from './component/Resume/page'
import Contact from './component/Contact/page'

export default function page() {
  return (
    <div>
      {/* <Navbar/> */}
      <Home/>
       <Projects/>
      <Skills/>
      <Resume/> 
      <Contact/>
    </div>
  )
}

