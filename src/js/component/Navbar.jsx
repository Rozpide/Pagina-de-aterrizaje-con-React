import React from "react";
const Navbar1 = () => {
	return (
		<div className="navegador">
			{" "}
			<nav className=" w-70 navbar navbar-expand-lg p-3 mb-2 bg-dark text-white ">
				<div className="container-fluid">
					<a
						className="navbar-brand p-3 mb-2 bg-dark text-white"
						href="#">
						Start Bootstrap
					</a>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent ">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0 position-absolute bottom-0 end-0">
							<li class="nav-item">
								<a
									className="nav-link active  p-3 mb-2 bg-dark text-white"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link active  p-3 mb-2 bg-dark text-white"
									aria-current="page"
									href="#">
									About
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link active  p-3 mb-2 bg-dark text-white "
									aria-current="page"
									href="#">
									Services
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link active  p-3 mb-2 bg-dark text-white "
									aria-current="page"
									href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar1;
