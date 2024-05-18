import { useState, useEffect } from 'react';
import logo from '/logo-name.svg'
import './Header.css'


export default function Header() {
	const [now, setNow] = useState(new Date());



useEffect(() => {
	const interval = setInterval(() => setNow(new Date(), 1000));

	return () => {
		clearInterval(interval)
	}
}, [])


  return (
    <header>
      {/* <h3>Result University</h3> */}
		<img src={logo} alt={"result"} />
      <span>Час зараз: {now.toLocaleTimeString()}</span>
    </header>
  );
}
