import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

class Home extends Component {
  state = {
    title: '',
    url: ''
  }
  
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.url.trim()) {
      this.props.onAddBookmark(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      title: '',
      url: ''
    });
  };

  render() {
    console.log(this.state);
    return ( 
      <div>
        <section className="container-fluid">
					<div className="container">
						<h1 className="text-center">Homepage</h1>
						<Link to="/bookmark"><h6 className="text-center">Back to Bookmark</h6></Link>
						<hr/>
            <div className="row align-items-center">
              <div className="col-12" style={styles}>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="title"
                    name="title"
                    onChange={this.handleInputChange}
                    value={this.state.title}
                  />
                  <input
                    type="text"
                    placeholder="URL"
                    name="url"
                    onChange={this.handleInputChange}
                    value={this.state.url}
                  />
                  <hr />
                  <button type="submit">Add bookmark</button>
                  <button type="button" onClick={this.handleReset}>
                    Reset
                  </button>
                </form>
              </div>
            </div>
					</div>
				</section>
      </div>
    )
  }
}

export default Home;