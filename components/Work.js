import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const Skills = ({ title, isIconify, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<SkillCardWithTools
							key={index}
							title={value.title}
							description={value.description}
							isIconify={isIconify}
							icons={value.icons}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons}
						/>
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
};

export const Card = ({ title, description, icons }) => {
	return (
		<div
			className="card py-3 px-3 mx-sm-4 my-4 card-work"
			style={{ width: "20rem" }}
		>
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			<div className="text-end">
				{icons &&
					icons.map((value, index) => (
						<Link
							key={index}
							href={value.link}
							aria-label={value.link}
						>
							<a target="_blank" rel="noreferrer">
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
	);
};

export const SkillCardWithTools = ({
	title,
	description,
	icons,
	isIconify,
}) => {
	return (
		<div
			className="card py-3 px-3 mx-sm-4 my-4 card-work"
			style={{ width: "20rem" }}
		>
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			<div className="text-end">
				{icons &&
					icons.map((value, index) =>
						isIconify ? (
							<Icon
								key={index}
								icon={value}
								size="2x"
								data-inline="false"
								className="svg-inline--fa fa-github fa-2x icon-style mx-1"
							></Icon>
						) : (
							<FontAwesomeIcon
								key={index}
								className="icon-style mx-1"
								icon={value}
								size="2x"
							/>
						)
					)}
			</div>
		</div>
	);
};
