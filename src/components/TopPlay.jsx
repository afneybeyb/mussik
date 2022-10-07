import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({ song, data, i }) => {
	const dispatch = useDispatch();
	const { activeSong, isPlaying } = useSelector((state) => state.player);

	const handlePauseClick = () => {
		dispatch(playPause(false));
	}
	const handlePlayClick = () => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	}

	return (
		<div className="mb-2 p-2 w-full flex flex-row items-center gap-3 rounded-lg hover:bg-black/50">
			<p className="font-bold">{i + 1}.</p>
			<Link className="w-16 h-fit" to={`/songs/${song?.key}`}>
				<img className="rounded-lg" src={song.images?.coverart} alt="Song coverart" />
			</Link>
			<div className="flex flex-col">
				<Link className="font-semibold truncate hover:text-my-yellow transition-all" to={`/songs/${song?.key}`}>{song.title}</Link>
				<Link className="text-sm truncate hover:text-my-yellow transition-all" to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : "/top-artists"}>{song.subtitle}</Link>
			</div>
			<div className="ml-auto">
				<PlayPause
					song={song}
					activeSong={activeSong}
					isPlaying={isPlaying}
					handlePause={handlePauseClick}
					handlePlay={handlePlayClick}
				/>
			</div>
		</div>
	)
};
const TopPlay = () => {
	const { data } = useGetTopChartsQuery();
	const divRef = useRef(null);
	const topSongs = data?.slice(0, 5);

	useEffect(() => {
		divRef.current.scrollIntoView({ behavior: "smooth" });
	});

	return (
		<div className="ml-0 xl:ml-6 mb-6 xl:mb-0 max-w-full xl:max-w-[400px] flex flex-1 flex-col" ref={divRef}>
			<div className="w-full flex flex-col">
				<Link className="w-fit text-2xl font-bold hover:text-my-yellow cursor-pointer transition-all" to="/top-charts">Top charts</Link>

				<div className="mt-4 flex flex-col gap-1">
					{topSongs?.map((song, i) => (
						<TopChartCard
							key={song.key}
							song={song}
							data={data}
							i={i}
						/>
					))}
				</div>
			</div>
			<div className="mt-4 w-full flex flex-col">
				<Link className="w-fit text-2xl font-bold hover:text-my-yellow cursor-pointer transition-all" to="/top-artists">Top artists</Link>

				<Swiper
					className="mt-4"
					slidesPerView="auto"
					spaceBetween={15}
					centeredSlides
					centeredSlidesBounds
					freeMode
					modules={[FreeMode]}
				>
					{topSongs?.map((song, i) => (
						<SwiperSlide
							className="shadow-lg rounded-full animate-slideright"
							style={{ width: "25%", height: "auto" }}
							key={song?.key}
						>
							<Link to={`/artists/${song?.artists[0]?.adamid}`}>
								<img className="w-full rounded-full object-cover" src={song?.images.background} alt="Author's image" />
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default TopPlay;

