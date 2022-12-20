import { Link } from 'react-router-dom';
import '../scss/MyNav.scss';

export default function MyNav() {
	return (
		<nav className="MyNav">
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='orderadd'>New Order</Link></li>
			</ul>
		</nav>
	)
}