import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDvkOksDVLiap2bCzw0eW3dP0y0IqX0krM';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'Fliptop Philippines'}, (videos) => {
			this.setState({
				videos,
				selectedVideo: videos[0]
			})
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos}
					onVideoSelected={selectedVideo => this.setState({selectedVideo})}
				/>
			</div>
		);
	}
}

ReactDOM.render(
	<App />, document.querySelector('.container')
);