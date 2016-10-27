import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import Homepage from './homepage'
import ArtistsView from './ArtistsView'

//example of a request url for artists https://api.spotify.com/v1/search?q=tania%20bowra&type=artist

const app = function() {

	var artistsCollection = Backbone.Collection.extend({
			url: 'https://api.spotify.com/v1/search',
			parse: function(rawJSON) {
				return rawJSON.results;

		}

	})

	var ApolloRouter = Backbone.Router.extend({

		routes: {
			'home' : 'showHomepage',
			'search/:q' : 'doArtistsSearch',
			'*catchall' : 'redirectHome' 
		},

		doArtistsSearch: function (query) {
			var searchCollection = new artistsCollection()
			searchCollection.fetch({
				data: {
					q: query,
					type: 'artist'
				}

			}).then(function(){ 
				ReactDOM.render(<ArtistsView artistsColl = {searchCollection} />, document.querySelector('.container'))

			})

		},

		showHomepage: function() {
			ReactDOM.render(<Homepage />, document.querySelector('.container'))

		},

		redirectHome: function () {
			location.hash = 'home'

		},

		initialize: function() {
			Backbone.history.start()

		}
	})

	new ApolloRouter()
	
	
}

app()