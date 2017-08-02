import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA7VHRys3EX_nG5bZD_bJjSs2grLU7-9MA';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('tom cruise');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            })
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    onSearchTermChange={term => this.videoSearch(term)}
                />
                <VideoDetail
                    video={this.state.selectedVideo}
                />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));