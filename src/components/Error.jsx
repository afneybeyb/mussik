import React from 'react';

const Error = ({ title }) => (
	<div className="mt-36 w-full flex justify-center items-center flex-col text-center">
		<h1 className="text-2xl font-bold">{title || "An error occured"}</h1>
		<p>Please try it again later</p>
	</div>
);

export default Error;
