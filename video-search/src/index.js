import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyAH2xyBVPYbFPTLsJ9lbvLUQoGslCjPhhM';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.searchVideo('surfboards');
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.searchVideo(term)
        }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                />
            </div>
        );
    }

    searchVideo(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({selectedVideo: videos[0], videos: videos})
        });
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));