import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'

const ArtistsView = React.createClass({
	render: function() {
		//console.log(this.props.artistsColl)
		return (
				<div className = 'artistsView'>
					<Header />
					<ArtistsContainer artistsColl = {this.props.artistsColl} />

				</div>
			)
	}
})

const ArtistsContainer =  React.createClass({
	_getJsxArray: function (artistsArray) {
		var jsxArray = []
		artistsArray.forEach(function(model){
			jsxArray.push(<Artist artistModel = {model} />)

		})
		
		return jsxArray

	},
	
	render: function() {
		//console.log(this.props.artistsColl.models[0].get('items'))
		return (
				<div className = 'artistsContainer'>
					{this._getJsxArray(this.props.artistsColl.models[0].get('items'))}	

				</div>

			)

	} 

})

const Artist = React.createClass({
	render: function () {
		console.log(this.props.artistModel)
		return (
			<div className = 'artist'>
		

			</div>

		)
	}



})

export default ArtistsView