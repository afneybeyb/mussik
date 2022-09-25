import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
	<div className="mt-8">
		{links.map((item, i) => (
			<NavLink
				className="flex h-16 justify-start items-center text-sm hover:text-base font-medium text-my-cream hover:bg-white/5 hover:bg-opacity-80 backdrop-blur-sm rounded-lg cursor-pointer transition-all"
				to={item.to}
				key={i}
				onClick={() => handleClick && handleClick()}
			>
				<item.icon className="ml-4 mr-2 w-6 h-6" />
				{item.name}
			</NavLink>
		))}
	</div>
);

const Sidebar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div className="md:flex hidden px-4 py-8 w-[240px] flex-col bg-black">
				<img className="w-full h-24 object-contain" src={logo} alt="logo" />
				<NavLinks />
			</div>

			<div className="absolute md:hidden block right-0 text-my-cream hover:text-my-yellow cursor-pointer transition-all">
				{mobileMenuOpen ? (
					<RiCloseLine className="p-2 w-12 h-12" onClick={() => setMobileMenuOpen(false)} />
				) : <HiOutlineMenu className="p-2 w-12 h-12" onClick={() => setMobileMenuOpen(true)} />
				}
			</div>

			<div
				className={`absolute md:hidden p-6 top-0 w-2/3 h-screen bg-gradient-to-r from-my-darkgreen to-white/10 backdrop-blur-lg z-10 smooth-transition ${mobileMenuOpen ? "left-0" : "-left-full"}`}
			>
				<img className="w-full h-24 object-contain" src={logo} alt="logo" />
				<NavLinks handleClick={() => setMobileMenuOpen(false)} />
			</div>
		</>
	);
}

export default Sidebar;
