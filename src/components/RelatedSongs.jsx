import SongBar from './SongBar';

const RelatedSongs = ({ data, isPlaying, activeSong, artistId, handlePauseClick, handlePlayClick }) => (
	<div className="flex flex-col">
		<h1 className="text-3xl font-bold">Related songs:</h1>

		<div className="mt-6 w-full flex flex-col">
			{data?.map((song, i) => (
				<SongBar
					key={`${song.key}-${artistId}`}
					song={song}
					data={data}
					i={i}
					isPlaying={isPlaying}
					activeSong={activeSong}
					artistId={artistId}
					handlePauseClick={handlePauseClick}
					handlePlayClick={handlePlayClick}
				/>
			))}
		</div>
	</div>
);

export default RelatedSongs;
