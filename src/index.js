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
		this.state = {videos: []};

		YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
			this.setState({videos: data})
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(
	<App />, document.querySelector('.container')
);