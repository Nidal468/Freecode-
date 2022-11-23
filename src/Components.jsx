import {useState, useEffect} from 'react';

export function Menu(){
	const[isActive, setIsActive] = useState(false);
	function togglebtn() {
	   setIsActive(current => !current);
	}
	
	return(
		<div className={isActive? "close":""}>
			<div className="menu">
		<span onClick={togglebtn} className="button"></span>
				<ul>
				<li><a href="#" id="icon-box1"><i class="fi fi-rr-home"></i><span className="text">Home</span></a></li>
					<li><a href="#" id="icon-box2"><i class="fi fi-rr-settings"></i><span className="text">Projects</span></a></li>
					<li><a href="#" id="icon-box3"><i class="fi fi-rr-user"></i><span className="text">Members</span></a></li>
					<li><a href="#" id="icon-box4"><i class="fi fi-rr-users-alt"></i><span className="text">About Us</span></a></li>
					<li><a href="#" id="icon-box5"><i class="fi fi-rr-phone-call"></i><span className="text">Contact Us</span></a></li>
				</ul>
				</div>
		</div>
	)
}