import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

import Author from './Author'

class Post extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Author email='marialeticiaribeiro79@gmail.com' nickname='Fulano de Tal' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('windows').width,
        height: Dimensions.get('windows').width * 3 / 4,
        resizeMode: 'contain'
    }
})

export default Post