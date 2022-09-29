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
				className="flex h-16 justify-start items-center text-sm hover:text-base font-medium text-my-cream hover:bg-black/50 backdrop-blur-sm rounded-lg cursor-pointer transition-all"
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
			<div className="md:flex hidden px-4 py-8 w-[200px] xl:w-[250px] flex-col bg-black transition-all">
				<img className="w-full h-24 object-contain" src={logo} alt="logo" />
				<NavLinks />
			</div>

			<div className="absolute right-0 w-1/3 h-screen">
				<div className="absolute md:hidden block right-0 z-50 text-my-cream hover:text-my-yellow cursor-pointer transition-all">
					{mobileMenuOpen ? (
						<RiCloseLine className="p-2 w-12 h-12" onClick={() => setMobileMenuOpen(false)} />
					) : <HiOutlineMenu className="p-2 w-12 h-12" onClick={() => setMobileMenuOpen(true)} />
					}
				</div>
				{mobileMenuOpen && (
					<div
						className="absolute md:hidden flex right-0 w-full h-screen z-40 justify-center items-center bg-black/10 backdrop-blur-lg text-lg text-my-cream smooth-transition opacity-0 hover:opacity-100 cursor-pointer" onClick={() => setMobileMenuOpen(false)}
					>
						<p>Close</p>
					</div>
				)}
			</div>

			<div
				className={`absolute md:hidden p-6 top-0 w-2/3 h-screen z-50 bg-gradient-to-r from-my-darkgreen to-white/10 backdrop-blur-lg smooth-transition ${mobileMenuOpen ? "left-0" : "-left-full"}`}
			>
				<img className="w-full h-24 object-contain" src={logo} alt="logo" />
				<NavLinks handleClick={() => setMobileMenuOpen(false)} />
			</div>
		</>
	);
}

export default Sidebar;
