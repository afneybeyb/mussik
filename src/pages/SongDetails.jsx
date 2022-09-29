import { useParams } from 'react-router-dom';

import { useGetSongDetailsQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
	const { songid } = useParams();

	const { data: songData, isFetching: isFetchingSongData } = useGetSongDetailsQuery({ songid });

	return (
		<div className="flex flex-col">
			<div className="mb-10">
				<h2 className="mt-4 mb-2 text-3xl font-bold text-my-yellow">Lyrics:</h2>
				<div className="mt-5">
					{songData?.sections[1].type === "LYRICS" ?
						songData?.sections[1].text.map((songDetail, i) => (
							<p className="my-2">{songDetail}</p>
						)) :
						isFetchingSongData ? <p>Loading lyrics...</p> : <p>Sorry, no lyrics found.</p>
					}
				</div>
			</div>
		</div>
	);
};

export default SongDetails;

