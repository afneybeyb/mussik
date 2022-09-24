import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i }) => {
	// TODO: Dynamic change of the active song
	const activeSong = undefined;

	return (
		<div className="p-4 w-[250px] flex flex-col bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
			<div className="relative w-full group">
				<div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? "flex bg-black bg-opacity-70" : "hidden"}`}>
					<PlayPause />
				</div>
				<img src={song.images?.coverart} alt="Song coverart" />
			</div>
		</div>
	);
};

export default SongCard;

