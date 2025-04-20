import React, { Component } from 'react';
import request from 'superagent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      viewCompleted: true,
      cardClassName: "card bg-info mb-3",
      gif:"",
    };
  }

  tick() {
    this.setState({
      time: new Date(),
    });
    if (this.state.time.getSeconds() % 15 === 0) {
      this.changeClassName();
      this.timeOutId = setTimeout(
        () => this.resetClassName(),250
      );
    }
	// There is a split of a second difference, so I adjusted with this check... works fine!
    if (this.state.time.getSeconds() % 5 === 4) {
      this.loadGif();
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    clearTimeout(this.timeOutId);
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };

  loadGif = () => {
    const url = "http://api.giphy.com/v1/gifs/random?api_key=".concat(process.env.GIPHY_API);
    request.get(url, (err, res) => {
      this.setState({gif: res.body})
    });
  };

  renderTabList = () => {
    return(
      <div className="nav nav-tabs">
        <span
          className={this.state.viewCompleted? "nav-link active": "nav-link"}
          onClick={() => this.displayCompleted(true)}>
        Flashing Clock</span>
        <span
          className={this.state.viewCompleted? "nav-link": "nav-link active"}
          onClick={() => this.displayCompleted(false)}>
        Triggered Giffs</span>
      </div>
    )
  };

  resetClassName() {
    this.setState({
      cardClassName: "card bg-info mb-3",
    });
  }

  changeClassName() {
    this.setState({
      cardClassName: "card bg-light mb-3",
    });
  }

  renderTabContent = () => {
    const { viewCompleted } = this.state;
    if (!viewCompleted) {
      return(
        <div className="card bg-info mb-3">
          <div className="card-header bg-transparent text-white">New GIF displays each 5 seconds...</div>
          <div className="card-body">
	    <img
              className="card-img"
	      src={String(this.state.gif)===""?"https://media.giphy.com/media/j3IyZq87xdTjsCiO88/source.gif":this.state.gif.images.downsized.url}
	      alt="gif" width="300"
	      height="300" />
          </div>
	</div>
      );
    }
    else {
      return (
        <div className={this.state.cardClassName}>
          <div className="card-header bg-transparent text-white">Content area flashes each 15 seconds...</div>
          <div className="card-body">
            <h1 className="text-uppercase text-white text-center my-4">
              {this.state.time.toLocaleTimeString('de')}
            </h1>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-uppercase text-center my-5">Digital clock</h1>
          <div className="row">
	    <div className="col-md-6 col-sm-10 mx-auto p-0">
	      <div className="card p-3">
	        <div className="mb-4">
		  {this.state.time.toLocaleTimeString('de')}
		</div>
	        <div className="mb-4">
	          {this.renderTabList()}
		</div>
		{this.renderTabContent()}
	      </div>
	    </div>
	  </div>
      </main>
     );
   }
}

export default App;
