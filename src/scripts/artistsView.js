import React from 'react'
import Header from './header'

const ArtistsView = React.createClass({
	render: function() {
		return (
				<div className = 'artistsView'>
					<ArtistsContainer artistsColl = {this.props.artistsColl} />

				</div>

			)

	}

})

export default ArtistsView