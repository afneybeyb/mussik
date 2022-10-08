import { useDispatch, useSelector } from 'react-redux';

import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

const PlayPause = ({ song, data }) => {
	const dispatch = useDispatch();
	const { activeSong, isPlaying } = useSelector((state) => state.player);

	const handlePauseClick = () => {
		dispatch(playPause(false));
	}
	const handlePlayClick = (song, data) => {
		dispatch(setActiveSong({ song, data }));
		dispatch(playPause(true));
	}

	return (isPlaying && activeSong?.title === song.title ? (
		<FaPauseCircle
			className="text-gray-200 cursor-pointer hover:text-my-yellow"
			size={35}
			onClick={handlePauseClick}
		/>
	) : (
		<FaPlayCircle
			className="text-gray-200 cursor-pointer hover:text-my-yellow"
			size={35}
			onClick={() => handlePlayClick(song, data)}
		/>
	));
};

export default PlayPause;

