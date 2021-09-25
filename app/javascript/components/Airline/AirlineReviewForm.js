import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	background: #bebebe;
	padding: 20px;
	margin: 20px;
	border-radius: 10px;
	height: 55vh;
`;

const Field = styled.div`
	border-radius: 4px;

	input {
		min-height: 20px;
		min-width: 96%;
		border-radius: 4px;
		border: 1px solid #e6e6e6;
		margin: 12px 0;
		padding: 12px;
	}

	textarea {
		width: 96%;
		min-height: 80px;
		border-radius: 4px;
		border: 1px solid #e6e6e6;
		margin: 12px 0;
		padding: 12px;
		resize: none;
	}
`;

const SubmitButton = styled.button`
	color: #fff;
	background: #333;
	border-radius: 4px;
	border: 1px solid #bebebe;
	padding: 12px;
	margin-top: 20px;
	font-size: 10px;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	cursor: pointer;
	transition: ease-in-out 0.3s;
	width: 100%;

	&:hover {
		background: rgb(60, 179, 113);
		color: #fff;
		border: 1px solid rgb(240, 240, 240);
	}
`;

const Headline = styled.div`
	padding: 20px;
	font-size: 20px;
	font-weight: bold;
	text-transform: uppercase;
	text-align: center;
	font-family: Arial, Helvetica, Sans-Serif;
`;

const RatingContainer = styled.div`
	text-align: center;
	border-radius: 4px;
	font-size: 18px;
	padding: 40px, 0, 10px, 0;
	border: 1px solid #e6e6e6;
	background: #fff;
`;

const RatingBox = styled.div`
	background: #fff;
	display: flex;
	justify-content: center;
	flex-direction: row-reverse;
	position: relative;

	input {
		display: none;
	}

	label {
		cursor: pointer;
		width: 40px;
		height: 40px;
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
		background-repeat: no-repeat;
		margin-top: auto;
		background-position: center;
		background-size: 50%;
		transition: 0.3s;
	}

	input:checked ~ label,
	input:checked ~ label ~ label {
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
	}

	input:not(:checked) ~ label:hover,
	input:not(:checked) ~ label:hover ~ label {
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
	}
`;

const RatingTitle = styled.div`
	font-size: 16px;
	font-weight: bold;
	text-transform: uppercase;
	font-family: Arial, Helvetica, Sans-Serif;
	padding-bottom: 12px;
`;

const AirlineReviewForm = ({
	change,
	submit,
	attributes,
	review,
	setRating,
}) => {
	const { title, description } = review;
	const { name } = attributes;
	const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
		return (
			<Fragment key={index}>
				<input
					type="radio"
					value={score}
					name="rating"
					onChange={() => console.log("selected:", score)}
					checked={review.score == score}
					id={`rating-${score}`}
				/>
				<label onClick={setRating.bind(this, score)}></label>
			</Fragment>
		);
	});

	return (
		<Wrapper>
			<form onSubmit={submit}>
				<Headline>Share your experience with {name}</Headline>
				<Field>
					<input
						type="text"
						name="title"
						placeholder="Review Title"
						onChange={change}
						value={title || ""}
					/>
				</Field>
				<Field>
					<textarea
						type="text"
						name="description"
						placeholder="Review Description"
						onChange={change}
						value={description || ""}
					/>
				</Field>
				<Field>
					<RatingContainer>
						<RatingTitle>Rate this airline</RatingTitle>
						<RatingBox>{ratingOptions}</RatingBox>
					</RatingContainer>
				</Field>
				<SubmitButton type="submit" onSubmit={submit}>
					Submit Review
				</SubmitButton>
			</form>
		</Wrapper>
	);
};

export default AirlineReviewForm;
