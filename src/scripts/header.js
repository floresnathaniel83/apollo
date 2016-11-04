import React from 'react'
import ReactDOM from 'react-dom'

const Header = React.createClass({
	_doSearch: function (e) {
		if(e.keyCode === 13) {
			location.hash = "search/" + e.target.value 

		}
		
	},

	render: function() {
		return (
				<div className = 'inputContainer'>
				   <h5>APOLLO</h5>
				   <input placeholder= 'Type an Artist Name' onKeyDown = {this._doSearch} />

				</div>
			   )
	}
})

export default Header