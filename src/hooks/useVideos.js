import { useState, useEffect } from 'react';
import youtube from '../APIs/youtube';

const KEY = 'AIzaSyCGoIvrAL030r6F8f7rt5kabXw8bI1ZcK4';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
			search(defaultSearchTerm);
		}, [defaultSearchTerm]);

	const search = async term => {
	 const response = await youtube.get("/search", {
	      params: {
	        q: term,
	        part: "snippet",
	        maxResults: 5,
	        key: KEY
	        }
	});

	 	setVideos(response.data.items);
	};
	return [videos, search];
};

export default useVideos;