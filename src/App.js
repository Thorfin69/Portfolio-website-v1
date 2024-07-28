
import Profile from './components/Profile';
import Navbar from './components/Navbar';
// import Code from './components/Code';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Code from './components/Code';

import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <>
      <div className='sm:ml-[12vh] container md:container md:max-w-[1450px] justify-center align-middle' >

        <Navbar />
        <h1 className="decor opacity-20 -mt-34 ml-20 hidden md:inline-block" >Hax</h1>
        <Profile className='' />
        <div className="flex justify-start items-start">

          <div className="flex justify-center items-starafter:bg-gradient-conic after:from-transparent after:via-[#dba895] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-transparent before:dark:opacity-10 after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
          <h1 className="decor opacity-20  -mt-40   hidden md:inline-block">!!</h1>
        </div>
<div className='md:-mt-[20vh]'>
        <Skills/>
</div>
        <Code />
        <h1 className="decor opacity-20 hidden md:inline-block md:ml-[20vh] -mt-[100vh] bottom  ">@Vikas</h1>
        <Footer />
<Analytics/>
      </div>
    </>
  );
}

export default App;
