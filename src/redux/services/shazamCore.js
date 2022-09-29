import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Creation of Shazam Core API request
export const shazamCoreApi = createApi({
	reducerPath: "shazamCoreApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://shazam-core.p.rapidapi.com/v1",

		// Adding API key from .env to the request's headers
		prepareHeaders: (headers) => {
			headers.set("X-RapidAPI-Key", import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
			return headers;
		}
	}),
	// Define API endpoints
	endpoints: (builder) => ({
		getTopCharts: builder.query({ query: () => "/charts/world" }),
		getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
	})
});

// Export API endpoints
export const {
	useGetTopChartsQuery,
	useGetSongDetailsQuery,
} = shazamCoreApi;

