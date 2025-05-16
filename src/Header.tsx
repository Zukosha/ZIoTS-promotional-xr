import { useState } from "react";
import "./Header.css";

function Header() {
	return (
		<>
			<header className='header'>
				<h1>ZIoTS AR Viewer</h1>
				<p>ZIoTSの3DモデルをARで表示します</p>
			</header>
		</>
	);
}

export default Header;
