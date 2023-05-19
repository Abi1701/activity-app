import styled from "./app.module.scss";
import Header from "./components/header/header";
import Routers from "./routes/routes";

function App() {
	return (
		<div className={styled.app}>
			<Header />
			<Routers />
		</div>
	);
}

export default App;
