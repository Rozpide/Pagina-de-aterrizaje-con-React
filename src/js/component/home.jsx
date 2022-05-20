import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar1 from "./Navbar.jsx";
import Footer1 from "./Footer.jsx";
import Cartis from "./Cards.jsx";
import Jumbo from "./Jumbotron.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<div>
				<Navbar1></Navbar1>
			</div>
			<div class="container">
				<div>
					<Jumbo></Jumbo>
				</div>
				<div>
					<Cartis></Cartis>
				</div>
			</div>
			<div class="container">
				<div>
					<Footer1></Footer1>
				</div>
			</div>
		</div>
	);
};

export default Home;
