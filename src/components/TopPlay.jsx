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

const TopChartCard = ({ song }) => (
	<div className="mb-2 px-4 py-2 w-full flex flex-row items-center rounded-lg hover:bg-black/50 cursor-pointer">
		<div>
			<p className="font-bold">{song?.title}</p>
			<p>{song?.subtitle}</p>
		</div>
	</div>
);
const TopPlay = () => {
	const dispatch = useDispatch();
	const { data } = useGetTopChartsQuery();
	const divRef = useRef(null);
	const topSongs = data?.slice(0, 5);

	useEffect(() => {
		divRef.current.scrollIntoView({ behavior: "smooth" });
	});

	return (
		<div className="ml-0 xl:ml-6 mb-6 xl:mb-0 max-w-full xl:max-w-[500px] flex flex-1 flex-col" ref={divRef}>
			<div className="w-full flex flex-col">
				<div className="flex flex-row justify-between items-center">
					<Link to="/top-charts">
						<h2 className="text-2xl font-bold hover:text-my-yellow cursor-pointer transition-all">Top charts</h2>
					</Link>
				</div>
				<div className="mt-4 flex flex-col gap-1">
					{topSongs?.map((song) => (
						<TopChartCard
							key={song.key}
							song={song}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default TopPlay;

