import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetSongDetailsQuery } from '../redux/services/shazamCore';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongDetails = () => {
	const { songid } = useParams();
	const dispatch = useDispatch();
	const { activeSong, isPlaying } = useSelector((state) => state.player);

	const { data: songData, isFetching: isFetchingSongData } = useGetSongDetailsQuery({ songid });

	return (
		<div className="my-10 mx-0 md:mx-4 flex flex-col gap-6">
			<DetailsHeader artistId="" songData={songData} />
			<div className="mt-8">
				<h2 className="my-2 text-3xl font-bold text-my-yellow">Lyrics:</h2>
				<div className="mt-5">
					{songData?.sections[1].type === "LYRICS" ?
						songData?.sections[1].text.map((songDetail, i) => (
							<p className="my-2" key={i}>{songDetail}</p>
						)) :
						isFetchingSongData ? <p>Loading lyrics...</p> : <p>Sorry, no lyrics found.</p>
					}
				</div>
			</div>
		</div>
	);
};

export default SongDetails;

