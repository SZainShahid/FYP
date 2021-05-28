import * as React from 'react';
import MapView, { AnimatedRegion } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const Maps = () => {

	return (
		<View style={styles.container}>
			<MapView 
				style={styles.map}
				showsUserLocation={true}
			>
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});

export default Maps;

// import React, { Component } from 'react'
// import MapView, { AnimatedRegion } from 'react-native-maps';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';

// export default class Maps extends Component {
	
// 	state = {
// 		region: {
// 			latitude: 37.78825,
// 			longitude: -122.4324,
// 			latitudeDelta: 0.0922,
// 			longitudeDelta: 0.0421
// 	  }
// 	}

// 	async getCurrentLocation() {
// 		navigator.geolocation.getCurrentPosition(
// 			position => {
// 				let region = {
// 					latitude: parseFloat(position.coords.latitude),
// 					longitude: parseFloat(position.coords.longitude),
// 					latitudeDelta: 5,
// 					longitudeDelta: 5
// 				};
// 				this.setState({
// 					initialRegion: region
// 				});
// 			},
// 			error => console.log(error),
// 			{
// 				enableHighAccuracy: true,
// 				timeout: 20000,
// 				maximumAge: 1000
// 			}
// 		);
// 	}

// 	componentDidMount() {
// 		this.getCurrentLocation();
// 	}

// 	goToInitialLocation() {
// 		let initialRegion = Object.assign({}, this.state.initialRegion);
// 		initialRegion["latitudeDelta"] = 0.005;
// 		initialRegion["longitudeDelta"] = 0.005;
// 		this.mapView.animateToRegion(initialRegion, 2000);
// 	}

// 	render() {
// 		return (
// 			<MapView
// 				style={styles.map}
// 				followUserLocation={true}
// 				ref={ref => (this.mapView = ref)}
// 				zoomEnabled={true}
// 				showsUserLocation={true}
// 				initialRegion={this.state.initialRegion}>
// 			</MapView>
// 		)
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	map: {
// 		width: Dimensions.get('window').width,
// 		height: Dimensions.get('window').height,
// 	},
// });
