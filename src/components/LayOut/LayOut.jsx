import { NavLink, OutLet } from 'react-router-dom';

import stl from './layOut.module.css';

const doActive = ({ isActive }) => {
  isActive ? `${stl.active} ${stl.link}` : `${stl.link}`;
};

function LayOut() {
  return (
    <>
      <ul className={stl.list}>
        <li className={stl.item}>
          <NavLink to="/" className={doActive}>
            Home
          </NavLink>
        </li>
        <li className={stl.item}>
          <NavLink to="/movies" className={doActive}>
            Movies
          </NavLink>
        </li>
      </ul>
      <OutLet />
    </>
  );
}

export default LayOut;
