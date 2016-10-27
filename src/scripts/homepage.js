import React from 'react'
import Header from './header'

const Homepage = React.createClass({
	render: function() {
		return (
				<div className = 'homepage'>
					<Header />
					<InputContainer />

				</div>
			)
	}
})

const InputContainer =  React.createClass ({

	_doSearch: function (e) {
			console.log(e.target.value)
			location.hash = 'search/' + e.target.value 
		
	},

	render: function() {
		return (
				<div className = 'inputContainer'>
					<p>Type an artist name and click on "Search". Then, click on the artist for albums and details</p>
					<input placeholder= 'Type an Artist Name'></input>
					<button onClick = {this._doSearch}>search</button> 


				</div>

			)

	} 

})

export default Homepage