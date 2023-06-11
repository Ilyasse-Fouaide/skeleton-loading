import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue, green, purple, red, deepPurple } from "@mui/material/colors";
import axios from "axios";
import SkeletonComp from "./Skeleton.jsx";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function RecipeReviewCard() {
	const [product, setProduct] = React.useState();
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		axios.get("https://dummyjson.com/products").then((response) => {
			setIsLoading(true);
			setProduct(response.data.products);
		});
	}, []);

	const avatarRandomColor = () => {
		let colors = [
			{ color: red },
			{ color: blue },
			{ color: purple },
			{ color: green },
			{ color: deepPurple },
		];
		return colors[Math.floor(Math.random() * colors.length)].color.A200;
	};

	const randomCar = () => {
		let letter = [
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
			"G",
			"H",
			"I",
			"J",
			"K",
			"L",
			"M",
			"N",
			"O",
			"P",
			"Q",
			"R",
			"S",
			"T",
			"E",
			"V",
			"W",
			"X",
			"Y",
			"Z",
		];

		return letter[Math.floor(Math.random() * letter.length)];
	};

	return (
		<div
			style={{
				width: "50%",
				margin: "auto",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: "50px",
			}}
		>
			{isLoading ? (
				<>
					{product &&
						product.map((product) => (
							<Card sx={{ maxWidth: 345 }} key={product.id}>
								<CardHeader
									avatar={
										<Avatar
											src={product.images[Math.floor(Math.random() * 5)]}
										/>
									}
									title={product.title}
									subheader={product.category}
								/>
								<CardMedia
									component="img"
									height="194"
									image={product.thumbnail}
									alt="Paella dish"
								/>
								<CardContent>
									<Typography variant="body2" color="text.secondary">
										{product.description}
									</Typography>
								</CardContent>
							</Card>
						))}
				</>
			) : (
				<>
					<Box
						sx={{
							width: "100%",
							position: "absolute",
							top: "0",
							color: "grey.500",
						}}
					>
						<LinearProgress />
					</Box>
					<SkeletonComp />
					<SkeletonComp />
					<SkeletonComp />
				</>
			)}
		</div>
	);
}
