import { useParams } from 'react-router-dom';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
	const { id: artistId } = useParams();

	const { data: artistData, isFetching: isFetchingArtistData, errorArtistData } = useGetArtistDetailsQuery({ artistId });

	if (isFetchingArtistData) return <Loader title="Searching for artist details" />
	if (errorArtistData) return <Error />

	return (
		<div className="my-10 mx-0 md:mx-4 flex flex-col gap-6">
			<DetailsHeader artistId={artistId} artistData={artistData} />
			<button onClick={() => console.log(artistData?.songs)}>Show me</button>
			<RelatedSongs
				data={Object.values(artistData?.songs)}
				artistId={artistId}
			/>
		</div>
	);
};

export default ArtistDetails;

