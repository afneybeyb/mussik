import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, activeSong, isPlaying, data, i }) => {
	// Getting Redux state hooks
	const dispatch = useDispatch();

	const handlePauseClick = () => {
		dispatch(playPause(false));
	}
	const handlePlayClick = () => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	}

	return (
		<div className="p-4 w-[250px] flex flex-col bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
			<div className="relative w-full h-fit min-h-[218px] group">
				<div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? "flex bg-black bg-opacity-70" : "hidden"}`}>
					<PlayPause
						song={song}
						activeSong={activeSong}
						isPlaying={isPlaying}
						handlePause={handlePauseClick}
						handlePlay={handlePlayClick}
					/>
				</div>
				<img src={song.images?.coverart} alt="Song coverart" />
			</div>
			<Link className="mt-4 text-lg font-semibold truncate hover:text-my-yellow transition-all" to={`/songs/${song?.key}`}>{song.title}</Link>
			<Link className="mt-1 text-sm truncate hover:text-my-yellow transition-all" to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : "/top-artists"}>{song.subtitle}</Link>
		</div>
	);
};

export default SongCard;

