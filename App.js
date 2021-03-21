import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Input, Item, Button } from 'native-base'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: 1000,
      input: 0

    }
  }

  add() {
    this.setState({
      result: this.state.result + this.state.input
    })
  }

  subtract() {
    this.setState({
      result: this.state.result - this.state.input
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayView}>
          <Text style={styles.txtSyle}> {this.state.result} </Text>
        </View>
        <View style={styles.inputView}>
          <Item regular>
            <Input keyboardType='numeric'
              placeholder='Enter number'
              onChangeText={(text) => this.setState({ input: parseInt(text) })}
            />
          </Item>
        </View>
        <View style={styles.btnView}>
          <Button primary><Text style={styles.btnText} onPress={() => this.add()}> Add </Text></Button>
          <View style={{ width: wp('25%') }} />
          <Button primary><Text style={styles.btnText} onPress={() => this.subtract()}> Subtract </Text></Button>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  displayView: {
    width: wp('40%'),
    height: hp('20%'),
    backgroundColor: 'pink'
  },
  txtSyle: {
    textAlign: 'center',
    marginTop: hp('8.1%')
  },
  inputView: {
    width: wp('80%'),
    marginTop: hp('10%')

  },
  btnView: {
    flexDirection: 'row',
    margin: hp('5%')
  },
  btnText: {
    paddingStart: 10,
    paddingEnd: 10,
    color: 'white',
    fontSize: hp('2.5%')
  }
})



