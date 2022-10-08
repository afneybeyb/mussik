import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import SongBar from "./SongBar";
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';

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
						<SongBar
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
							key={song?.key}
							className="shadow-lg rounded-full animate-slideright"
							style={{ width: "25%", height: "auto" }}
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

