import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import SliderEntry from '../components/SliderEntry';
import { sliderWidth, itemWidth } from '../components/SliderEntry.style';
import { Actions } from 'react-native-router-flux';

export class HomeCarousel extends Component {
  constructor() {
    super();
    this.state = {
        slides: null
    }
  }

  componentDidMount(){
    axios.get('https://korfilm.co/api/slides')
      .then(response => { 
        let slides = response.data.data.map((item)=>{
          return { title: item.title, subtitle: item.description, illustration: item.image_url };
        }); 

        this.setState({ slides: slides });
      })
      .catch(() => {});
  }

  _renderItem ({item, index}) {
    return <SliderEntry data={item} even={ true } />;
  }

  render () {
      if( this.state.slides === null )
        return <Text></Text>;

      return (
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.slides}
            renderItem={this._renderItem}
            sliderWidth={ sliderWidth }
            itemWidth={ itemWidth }
            layout={'default'}
            windowSize={1}
          />
      );
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <HomeCarousel />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});