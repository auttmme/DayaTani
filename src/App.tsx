import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FarmListPage from "./pages/FarmList";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<FarmListPage />} />
					</Routes>
				</Layout>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
