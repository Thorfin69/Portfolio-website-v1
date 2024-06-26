
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Code from './components/Code';
import Footer from './components/Footer';
import Works from './components/Works';

function App() {
  return (
    <>
      <div className='' >
        <Navbar />
        <h1 className="decor opacity-20 -mt-34 ml-20 hidden md:inline-block" >Hax</h1>
        <Profile />
        <div className="flex justify-start items-start">

          <div className="flex justify-center items-starafter:bg-gradient-conic after:from-transparent after:via-[#dba895] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-transparent before:dark:opacity-10 after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
          <h1 className="decor opacity-20  -mt-40 ml-96 hidden md:inline-block">!!</h1>
        </div>
        <Works />
        <Code />
        <h1 className="decor opacity-20 hidden md:inline-block  -mt-44 bottom-2  ">@Vikas</h1>
        <Footer />
      </div>
    </>
  );
}

export default App;
