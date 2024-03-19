import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">

						<div className="work">
							<img
								src="./St.-Johns-Red-Storm-logo.png"
								alt="St. John's University"
								className="work-image"
							/>
							<div className="work-title">St. John's University</div>
							<div className="work-subtitle">
								Technical Writing Assistant
							</div>
							<div className="work-duration">Jan 2022 - June 2022</div>
						</div>

						<div className="work">
							<img
								src="./Comcast-Logo-PNG-Photos.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Comcast</div>
							<div className="work-subtitle">
								Open Source Program Intern
							</div>
							<div className="work-duration">May 2022 - August 2022</div>
						</div>

						<div className="work">
							<img
								src="./nba-logo_2x.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">National Basketball Association</div>
							<div className="work-subtitle">
								Digital Product Dev Intern
							</div>
							<div className="work-duration">May 2023 - August 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
