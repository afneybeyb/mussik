import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
	const artist = artistData?.artists[artistId]?.attributes


	return (
		<div className="w-full flex flex-col">
			<div className="p-2 flex items-center w-fit bg-my-cream/10 rounded-3xl">
				<img
					className="w-24 sm:w-44 h-24 sm:h-44 border-2 border-white/70 rounded-full object-cover transition-all"
					src={
						artistId ? artistData?.artists[artistId].attributes?.artwork?.url
							.replace("{w}", "500")
							.replace("{h}", "500")
							: songData?.images?.coverart
					}
					alt="profile"
				/>

				<div className="ml-6">
					<p className="my-2 text-xl font-bold">{artistId ? artist?.name : songData?.title}</p>
					{!artistId && (
						<Link className="my-2 text-my-cream/70 hover:text-my-yellow transition-all" to={`/artists/${songData?.artists[0].adamid}`}>{songData?.subtitle}</Link>
					)}
					<p className="my-2 text-my-cream/70">{artistId ? artist?.genreNames[0] : songData?.genres?.primary}</p>
				</div>
			</div>
		</div>
	);
}

export default DetailsHeader;

