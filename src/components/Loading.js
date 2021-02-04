import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
	return (
		<div className="loader">
			<Loader type="Rings" color="#0093d0" />
		</div>
	);
};

export default Loading;
