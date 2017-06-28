/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Button,
  ActivityIndicator
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor(props) {
    console.log("constructor gan");
    super(props);

    this.state = {
      isLoading: false,
      dataSource:null
    }

    this.fetchGan = this.fetchGan.bind(this);
  }

  fetchGan() { 
    this.setState({
      isLoading:true
    });

    return fetch('https://facebook.github.io/react-native/movies.json') 
    .then((response) => response.json()) 
    .then((responseJson) => { 
      console.log("responseJson movies: "+responseJson.movies)
      console.log("state:"+this.state);
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      console.log("ds:"+ds);

      this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with new state
        });

      return responseJson.movies; 
    })
    .catch((error) => { 
      console.log("error nih gan:"+error); 
      return {}
    }); 
  }
  
  render() {
    if (this.state.isLoading) {
      return(
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }else{
      
      return(
         <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native GAN!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          {/*
          <Button onPress={() => this.fetchGan()} title="FETCH"/>
          */}
          <Button onPress={this.fetchGan} title="FETCH GAN"/>
          
        {this.state.dataSource!=null && 
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, tahun release: {rowData.releaseYear}</Text>}
        />
        }
      
        

        </View>
      )
    }
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
