import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = ({ title, description, icons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
						{icons &&
							icons.map((value, index) => (
								<Link key={index} href={value.link}>
									<a target="_blank" rel="noreferrer" aria-label={value.link}>
										<FontAwesomeIcon
											className="icon-style mx-1"
											icon={value.icon}
											size="2x"
										/>
									</a>
								</Link>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export const Footer = () => {
	return (
		<footer className="bg-white text-center py-2 px-5">
			<div className="container text-muted">
				<small>&copy; Copyright {new Date().getFullYear()} </small>
			</div>
		</footer>
	);
};
