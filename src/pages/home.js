import React from "react";
import Base from "../layouts/base";
import { Box, Button, Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import { CafeList } from "../data/cafeList";

function Home() {
	const [isPlaying, setIsPlaying] = React.useState(true);
	React.useEffect(() => {
		document.body.onkeyup = function (e) {
			if (e.keyCode === 32) {
				setIsPlaying((playing) => !playing);
			}
		};
	}, []);

	return (
		<Base>
			<Box
				display="flex"
				justifyContent="space-evenly"
				alignItems="center"
				width="70%"
				height="50vh"
				flexDirection="column"
			>
				<Box height="50%" textAlign="center">
					<Typography variant="h3" fontWeight="bold">
						<RandomReveal
							isPlaying={isPlaying}
							duration={Infinity}
							revealDuration={0}
							updateInterval={0.05}
							characterSet={CafeList}
							characters=" "
						/>
					</Typography>
				</Box>

				<Button
					onClick={() => setIsPlaying(!isPlaying)}
					size="large"
					sx={{
						backgroundColor: "#0091d1",
						"&:hover": {
							backgroundColor: "#0076d1",
						},

						color: "white",
						width: { xs: "50%", sm: "50%", md: "30%", lg: "30%" },
						borderRadius: "10px",
					}}
				>
					{!isPlaying ? "Random" : "Stop"}
				</Button>
			</Box>
		</Base>
	);
}

export default Home;