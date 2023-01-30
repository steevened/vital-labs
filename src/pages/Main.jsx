import { useState } from 'react';
import BtnCircle from '../components/buttons/BtnCircle';
import NavLeft from '../components/Navbar/NavLeft';
import NavTop from '../components/Navbar/NavTop';

const Main = () => {
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);

  console.log('isToolbarOpen: ', isToolbarOpen);
  return (
    <div className="bg-base-100 h-screen">
      <NavTop setIsToolbarOpen={setIsToolbarOpen} />
      <div
        onClick={() => setIsToolbarOpen(false)}
        className={`md:hidden absolute top-0 backdrop-blur-[2px] left-0 w-full h-full transition-all bg-black/50 z-10 ${
          isToolbarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none -z-10'
        }}`}
      ></div>{' '}
      <NavLeft
        isToolbarOpen={isToolbarOpen}
        setIsToolbarOpen={setIsToolbarOpen}
      />
    </div>
  );
};

export default Main;
