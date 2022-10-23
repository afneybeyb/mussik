import SongBar from './SongBar';

const RelatedSongs = ({ data, artistId }) => {
	return (
		<div className="flex flex-col">
			<h1 className="text-3xl font-bold">Related songs:</h1>

			<div className="mt-6 w-full flex flex-col">
				{data?.map((song, i) => (
					<SongBar
						key={`${song.key}-${artistId}-${i}`}
						song={song}
						data={data}
						i={i}
						artistId={artistId}
					/>
				))}
			</div>
		</div>
	);
}

export default RelatedSongs;

