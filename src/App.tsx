import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FarmListPage from "./pages/FarmList";
import DetailFarmerPage from "./pages/DetailFarmer";
import AddFarmerPage from "./pages/AddFarmer";
import EditFarmerPage from "./pages/EditFarmer";

import axios from "axios";

const auth = import.meta.env.VITE_AUTH;

const queryClient = new QueryClient();
axios.defaults.headers.common["Authorization"] = auth;

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<FarmListPage />} />
						<Route path="/detail-farmer/:id" element={<DetailFarmerPage />} />
						<Route path="/add-farmer" element={<AddFarmerPage />} />
						<Route path="/edit-farmer/:id" element={<EditFarmerPage />} />
					</Routes>
				</Layout>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
