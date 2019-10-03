import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from '@material-ui/core/Link';
import './footer.modules.scss';

export function Footer() {
	return (
		<div className="footer__wrapper">
			<footer>
				Made with <FontAwesomeIcon icon={faHeart} /> and <FontAwesomeIcon icon={faAtom} /> by <Link href={'https://constellix.com'}>Constellix</Link>
			</footer>
		</div>
	);
}
