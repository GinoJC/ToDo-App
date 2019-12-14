import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Header extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text> Header </Text>
        <TextInput style={styles.texto} 
            onChangeText={this.props.cambiarTexto}
            placeholder="Aqui escribe un texto..."
            onSubmitEditing={this.props.agregar}
            value={this.props.texto}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#00ff00',
      justifyContent: "center",
    },
    texto:{
        paddingHorizontal:18
    }
});
export default Header;