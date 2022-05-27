import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Banner from './components/Banner/Banner';
import AppHeader from './components/Header';
import { Layout } from 'antd';
import Info from './components/Info/Info';
import Foods from './components/Foods/Foods';
import Banner2 from './components/Banner2/Banner2';
import Info2 from './components/Info2/Info2';
import Foods2 from './components/Foods2/Foods2';

const { Header, Content } = Layout;

function App() {
	return (
		<Layout className="mainLayout" style={{ position: 'relative' }}>
			<Header>
				<AppHeader />
			</Header>

			<Content>
				<Banner2 />
				<Info2 />
				<Foods2 />
			</Content>
		</Layout>
	);
}

export default App;
