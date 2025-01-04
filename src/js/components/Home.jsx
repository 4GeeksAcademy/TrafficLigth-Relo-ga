import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		<div className="text-center">
            <div className="bg-black mx-auto" style={{width:'20px',height:'150px'}}></div>
			<div className="bg-black mx-auto rounded py-2" style={{width:'130px'}}>
				<div className={"bg-danger rounded-circle mx-auto my-1 "+ (color == "red" ? "brillo": "")} 
				onClick={() => setColor("red")}
				style={{width:'100px',height:'100px'}}>
				</div>
				<div className={"bg-warning rounded-circle mx-auto my-1 "+ (color == "yellow" ? "brillo": "")} 
				onClick={() => setColor("yellow")}
				style={{width:'100px',height:'100px'}}>
				</div>
				<div className={"bg-success rounded-circle mx-auto my-1 "+ (color == "green" ? "brillo": "")} 
				onClick={() => setColor("green")}
				style={{width:'100px',height:'100px'}}>
				</div>
			</div>
			
		</div>
	);
};

export default Home;