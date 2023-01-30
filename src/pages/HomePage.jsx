import HomeLayout from '../layouts/HomeLayout';

const HomePage = ({ isToolbarOpen, setIsToolbarOpen }) => {
  return (
    <HomeLayout
      isToolbarOpen={isToolbarOpen}
      setIsToolbarOpen={setIsToolbarOpen}
    />
  );
};

export default HomePage;
