import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import ArtistsView from './artistsView'
import HomeView from './homeView'

//example of a request url for artists https://api.spotify.com/v1/search?q=tania%20bowra&type=artist

const app = function() {

	var ArtistsCollection = Backbone.Collection.extend({
			url: 'https://api.spotify.com/v1/search',
			parse: function(rawJSON) {
				console.log(rawJSON)
				return rawJSON.artists;

		}

	})

	var ArtistsModel = Backbone.Collection.extend({
		url: 'https://api.spotify.com/v1/search',
		parse: function(rawJSON) {
			return rawJSON.artists;

		}

	})

	var ApolloRouter = Backbone.Router.extend({

		routes: {
			'home' : 'showHomepage',
			'search/:q' : 'doArtistsSearch',
			'*catchall' : 'redirectHome' 
		},

		doArtistsSearch: function (query) {
			var artistsCollection = new ArtistsCollection()
			artistsCollection.fetch({
				dataType: 'json', // look into what is happening here
				data: {
					q: query,
					type: 'artist'
				}

			}).then(function(){ 
				//console.log(artistsCollection)
				ReactDOM.render(<ArtistsView artistsColl = {artistsCollection}  />, document.querySelector('.container'))

			})

		},

		showHomepage: function() {
			ReactDOM.render(<HomeView />, document.querySelector('.container'))

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