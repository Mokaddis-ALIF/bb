import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Banner from './components/Banner/Banner';
import AppHeader from './components/Header';
import { Layout } from 'antd';
import Info from './components/Info/Info';
import Foods from './components/Foods/Foods';

const { Header, Content } = Layout;

function App() {
	return (
		<Layout className="mainLayout" style={{ position: 'relative' }}>
			<Header>
				<AppHeader />
			</Header>

			<Content>
				<Banner />
				<Info />
				<Foods />
			</Content>
		</Layout>
	);
}

export default App;
