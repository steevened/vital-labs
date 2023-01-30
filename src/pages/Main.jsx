import { useState } from 'react';
import BtnCircle from '../components/buttons/BtnCircle';
import NavLeft from '../components/Navbar/NavLeft';
import NavTop from '../components/Navbar/NavTop';

const Main = () => {
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);

  console.log('isToolbarOpen: ', isToolbarOpen);
  return (
    <div className="bg-base-100 h-screen relative">
      <NavTop setIsToolbarOpen={setIsToolbarOpen} />
      <NavLeft
        isToolbarOpen={isToolbarOpen}
        setIsToolbarOpen={setIsToolbarOpen}
      />
    </div>
  );
};

export default Main;
