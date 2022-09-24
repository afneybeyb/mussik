import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ song, activeSong, isPlaying, handlePause, handlePlay }) => {
	return (isPlaying && activeSong?.title === song.title ? (
		<FaPauseCircle
			className="text-gray-200"
			size={35}
			onClick={handlePause}
		/>
	) : (
		<FaPlayCircle
			className="text-gray-200"
			size={35}
			onClick={handlePlay}
		/>
	));
};

export default PlayPause;

