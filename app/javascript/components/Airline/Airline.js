import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "./Header";
import AirlineReviewForm from "./AirlineReviewForm";

const Wrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const Column = styled.div`
	background: #fff;
	height: 100vh;
	overflow: scroll;

	::-webkit-scrollbar {
		width: 10px;
	}

	&:last-child {
		background: rgb(0, 0, 179);
	}
`;

const Main = styled.div`
	padding-left: 50px;
`;

const Airline = ({ match }) => {
	const [airline, setAirline] = useState([]);
	const [review, setReview] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const airlineSlug = match.params.slug;
		const url = `/api/v1/airlines/${airlineSlug}`;

		axios
			.get(url)
			.then((resp) => {
				setAirline(resp.data);
				setLoaded(true);
			})
			.catch((err) => console.error(err));
	}, []);

	const handleChange = (e) => {
		e.preventDefault();

		setReview({
			...review,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const airline_id = airline.data.id;
		const csrfToken = document.querySelector("[name=csrf-token]").content;
		axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

		axios
			.post("/api/v1/reviews", { review, airline_id })
			.then((res) => {
				const included = [...airline.included, res.data.data];

				setAirline({ ...airline, included });

				setReview({ title: "", description: "", score: 0 });
			})
			.catch((e) => console.error(e));
	};

	const setRating = (score, e) => {
		e.preventDefault();

		setReview({ ...review, score });
	};

	return (
		<Wrapper>
			{loaded && (
				<>
					<Column>
						<Main>
							<Header
								attributes={airline.data.attributes}
								reviews={airline.included}
							/>
						</Main>
						<div className="reviews"></div>
					</Column>
					<Column>
						<AirlineReviewForm
							change={handleChange}
							submit={handleSubmit}
							attributes={airline.data.attributes}
							review={review}
							setRating={setRating}
						/>
					</Column>
				</>
			)}
		</Wrapper>
	);
};

export default Airline;
