import React from "react";
// Icons
import CircleO from "../images/circle-o.svg";
import Circle from "../images/circle.svg";
import DoubleLines from "../images/double-lines.svg";
import DoubleLinesDot from "../images/double-lines-dot.svg";
import TripleLines from "../images/triple-lines.svg";

const BackgroundSVG = () => {
	return (
		<>
			<img className="svg-1" src={CircleO} alt="circleo" />
			<img className="svg-2" src={TripleLines} alt="tripleLines" />
			<img className="svg-3" src={DoubleLinesDot} alt="lines" />
			<img className="svg-4" src={DoubleLinesDot} alt="lines" />
			<img className="svg-5" src={CircleO} alt="circleo" />
			<img className="svg-6" src={TripleLines} alt="tripleLines" />
			<img className="svg-7" src={CircleO} alt="circleo" />
			<img className="svg-8" src={CircleO} alt="circleo" />
			<img className="svg-9" src={DoubleLines} alt="lines" />
			<img className="svg-10" src={Circle} alt="circle" />
		</>
	);
};

export default BackgroundSVG;
