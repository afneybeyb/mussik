import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';

// Genres constants
import { genres } from '../assets/constants';

// Import of my API endpoints
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
	// Slice of the state
	const { activeSong } = useSelector((state) => state.player);

	// Fetch charts data
	const { data, isFetching, error } = useGetTopChartsQuery();

	// TODO: Dynamic change of the current genre
	const genreTitle = "Pop";

	// Fallback components
	if (isFetching) return <Loader title="Loading songs" />;
	if (error) return <Error title="Error connecting to the server" />;

	return (
		<div className="flex flex-col">
			<div className="mt-4 mb-10 w-full flex justify-between items-center sm:flex-row flex-col">
				<h2 className="text-3xl text-left text-my-yellow font-bold">Discover {genreTitle}!</h2>
				<select className="sm:mt-0 mt-5 p-3 bg-black text-gray-300 text-sm rounded-lg outline-none" onChange={() => { }} value="">
					{genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
				</select>
			</div>

			<div className="flex flex-wrap md:justify-start justify-center gap-8">
				{
					data?.map((song) => (
						<SongCard
							key={song.key}
							song={song}
							data={data}
							activeSong={activeSong}
						/>
					))
				}
			</div>
		</div>
	);
};

export default Discover;

