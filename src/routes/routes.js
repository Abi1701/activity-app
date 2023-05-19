import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "../page/dashboard/dashboard";
import ActivityPage from "../page/activityPage/activity";
import EmptyList from "../page/emptylistPage/emptyList";
import NewActivityPage from "../page/newItem/newItem";
import ItemList from "../page/itemList/itemList";
import Layout from "../page/layout/layout";

export default function Routers() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<DashboardPage />} />
					<Route path="activity" element={<ActivityPage />} />
					<Route path="emptylist" element={<EmptyList />} />
					<Route path="newitem" element={<NewActivityPage />} />
					<Route path="itemlist" element={<ItemList />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
