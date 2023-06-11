import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Skeleton } from "@mui/material";

export default function SkeletonComp() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={<Skeleton variant="circular" width={40} height={40} />}
				title={<Skeleton width={"80%"} height={10} />}
				subheader={<Skeleton width={"30%"} height={10} />}
			/>
			{<Skeleton variant="rectangular" width={345} height={194} />}
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{<Skeleton width={"100%"} height={10} />}
					{<Skeleton width={"80%"} height={10} />}
				</Typography>
			</CardContent>
		</Card>
	);
}
