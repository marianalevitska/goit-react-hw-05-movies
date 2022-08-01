import Home from 'components/Home';
import stl from './homePage.module.css';

function HomePage() {
  return (
    <div className={stl.home}>
      <Home />
    </div>
  );
}

export default HomePage;
