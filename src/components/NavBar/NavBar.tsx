import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './styled-navBar';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home'>
			Home
		</NavLink>
		<NavLink to='/rxjs'>
			RxJs
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		{/* <NavBtn>
		<NavBtnLink to='/home'>Home</NavBtnLink>
		<NavBtnLink to='/rxjs'>RxJs</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;
