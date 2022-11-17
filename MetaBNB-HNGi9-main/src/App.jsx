import "./App.css";
import Home from "./components/home";
import Footer from "./components/footer";
import Places from "./components/placesToStay";
import Navbar from "./components/navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/places" element={<Places />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
