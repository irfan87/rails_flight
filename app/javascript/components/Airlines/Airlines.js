import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Home = styled.div`
	text-align: center;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
`;

const Header = styled.div`
	padding: 100px 100px 10px 100px;
	h1 {
		font-size: 42px;
	}
`;

const Subheader = styled.div`
	font-weight: 300;
	font-size: 26px;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	width: 100%;
	padding: 20px;
`;

import Airline from "./Airline";

const Airlines = () => {
	const [airlines, setAirlines] = useState([]);
	// const url = "/api/v1";

	useEffect(() => {
		axios
			.get("/api/v1/airlines.json")
			.then((res) => {
				setAirlines(res.data.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const airlinesList = airlines.map((airline, index) => {
		return <Airline key={index} attributes={airline.attributes} />;
	});

	return (
		<Home>
			<Header>
				<h1>OpenFlights</h1>
				<Subheader>
					Honest, unbiased airline reviews. Share your experience.
				</Subheader>
			</Header>
			<Grid>{airlinesList}</Grid>
		</Home>
	);
};

export default Airlines;
