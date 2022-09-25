import { loader } from '../assets';

const Loader = ({ title }) => (
	<div className="mt-24 w-full flex justify-center items-center flex-col text-center">
		<img className="w-32 h-32 object-contain" src={loader} alt="Loading icon" />
		<h1 className="mt-2 text-2xl font-bold">{title || "Loading"}</h1>
	</div>
);

export default Loader;
