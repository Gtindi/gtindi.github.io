import React, { useEffect, useState } from "react";
import Link from "next/link";

export const Nav = ({ title, links }) => {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-secondary">
			<div className="container ">
				<Link href="/" aria-label={"Home"}>
					{/* <Image src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
					<a className="navbar-brand w-100 text-center">
						<h2 id="nav-title">{title}</h2>
					</a>
				</Link>
			</div>
		</nav>
	);
};
