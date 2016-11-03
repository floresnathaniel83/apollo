import React from 'react'
import ReactDOM from 'react-dom'


const ArtistsView = React.createClass({
	render: function() {
		console.log(this.props.artistsColl)
		return (
				<div className = 'homepage'>
					<Header />
					<ArtistsContainer artistsColl = {this.props.searchCollection}/>

				</div>
			)
	}
})

const Header = React.createClass({
	render: () => {
		return <h5>APOLLO</h5>
	}
})

const ArtistsContainer =  React.createClass ({
	_doSearch: function (e) {
		if(e.keyCode === 13) {
			location.hash = "search/" + e.target.value 
			console.log(location.hash)
			//next steps render the artists and move search up to header...
		}
		
	},

	render: function() {
		return (
				<div className = 'artistsContainer'>
					<p>Type an artist name and click on "Search". Then, click on the artist for albums and details</p>
					<input placeholder= 'Type an Artist Name' onKeyDown = {this._doSearch} />


				</div>

			)

	} 

})

export default ArtistsView