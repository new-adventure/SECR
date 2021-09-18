import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Form from './components/form/Form';
import Credits from './components/credits/Credits';

function App() {
	return (
		<div className="App">
			<Header />
			<Form />
			<Credits />
		</div>
	);
}

export default App;
