import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PlayPause from './PlayPause';

const SongBar = ({ song, data, i, artistId }) => {
	const { activeSong } = useSelector((state) => state.player);

	return (
		<div className={`mb-2 p-2 w-full flex flex-row items-center gap-3 rounded-lg hover:bg-black/50 ${activeSong?.title === song.title ? "bg-black/50" : "bg-transparent"}`}>
			<h3 className="font-bold">{i + 1}.</h3>

			<div className="flex flex-1 flex-row justify-between items-center gap-3 cursor-default" to={`/songs/${song?.key}`}>
				<Link to={`/songs/${song?.key}`}>
					<img className="w-[4em] h-fit rounded-lg" src={artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song.images?.coverart} alt="Song coverart" />
				</Link>

				<div className="flex flex-1 flex-col">
					{!artistId ? (
						<>
							<Link className="p-1 font-semibold truncate hover:text-my-yellow transition-all" to={`/songs/${song?.key}`}>{song.title}</Link>
							<Link className="p-1 w-fit text-sm truncate hover:text-my-yellow transition-all" to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : "/top-artists"}>{song.subtitle}</Link>
						</>
					) : (
						<>
							<p className="p-1 font-semibold truncate">{song?.attributes?.name}</p>
							<p className="p-1 text-sm truncate">{song?.attributes?.albumName}</p>
						</>
					)}
				</div>
			</div>
			{!artistId ? (
				<PlayPause
					song={song}
					data={data}
				/>
			) : null
			}
		</div>
	);
}

export default SongBar;