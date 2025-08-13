import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }};
  render() {
    return ()
      <ScrollView style={gaya.container}>
        }
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: 20,
            marginBottom: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginLeft: 10,
            }}>
            <Image
              source={require('../image/logo.png')}
              style={gaya.logo}
              borderRadius={50}
            />
            <Text
              style={{
                marginLeft: 10,
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Pailee Shop
            </Text>
          </View>
          <Ionicons
            name="notifications-circle-outline"
            size={40}
            style={{marginTop: 10, color: 'white'}}
          />
        </View>
        <TextInput
          value={this.state.input}
          style={gaya.search}
          onChangeText={value => this.setState({input: value})}
          theme={{roundness: 20}}
          underlineColor="transparent"
          underlineColorAndroid="transparent"
        />
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
            marginTop: 30,
            borderRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingTop: 20,
            }}>
            <View>
              <View
                style={{
                  width: 80,
                  height: 80,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    backgroundColor: '#C5EBAF',
                    width: 40,
                    width: 40,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Image
                    source={require('../image/grocery.png')}
                    style={{width: 50, height: 50}}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 15,
                  marginTop: 5,
                  fontWeight: 'bold',
                }}>
                Grocery
              </Text>
            </View>
            <View style={{justifyContent: 'space-around'}}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    backgroundColor: '#E9EB8D',
                    width: 40,
                    width: 40,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Image
                    source={require('../image/fashion.png')}
                    style={{width: 50, height: 50}}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 15,
                  marginTop: 5,
                  fontWeight: 'bold',
                }}>
                Fashion
              </Text>
            </View>
            <View>
              <View
                style={{
                  width: 80,
                  height: 80,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    backgroundColor: '#F1B7DB',
                    width: 40,
                    width: 40,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Image
                    source={require('../image/el.png')}
                    style={{width: 50, height: 50}}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 10,
                  marginTop: 5,
                  fontWeight: 'bold',
                }}>
                Electronics
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: 'black',
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              paddingLeft: 10,
            }}>
            Our best banner
          </Text>
          <View>
            <ScrollView
              style={{
                marginTop: 20,
              }}
              horizontal={true}>
              <Image
                source={require('../image/banner1.jpg')}
                style={{
                  width: 300,
                  height: 200,
                  backgroundColor: 'green',
                  borderRadius: 25,
                  marginRight: 20,
                }}></Image>
              <Image
                source={require('../image/banner2.png')}
                style={{
                  width: 300,
                  height: 200,
                  backgroundColor: 'green',
                  borderRadius: 25,
                  marginRight: 20,
                }}></Image>
              <Image
                source={require('../image/banner3.png')}
                style={{
                  width: 300,
                  height: 200,
                  backgroundColor: 'green',
                  borderRadius: 25,
                  marginRight: 20,
                }}></Image>
              <Image
                source={require('../image/banner4.png')}
                style={{
                  width: 300,
                  height: 200,
                  backgroundColor: 'green',
                  borderRadius: 25,
                  marginRight: 20,
                }}></Image>
            </ScrollView>
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: '100vw',
                  height: '100vh',
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginVertical: 15,
                  marginLeft: 10,
                }}>
                Produk Teratas
              </Text>
              <TouchableOpacity>
                <Text style={{color: '#3196E2', marginRight: 10, fontSize: 15}}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <ScrollView style={{}} horizontal={true}>
              <Image
                source={require('../image/baju.jpg')}
                style={{
                  width: 200,
                  height: 300,
                  backgroundColor: 'green',
                  borderRadius: 25,
                  marginRight: 20,
                }}
              />
              <Image
                source={require('../image/hp.jpg')}
                style={{
                  width: 200,
                  height: 300,
                  backgroundColor: 'green',
                  borderRadius: 25,
                  marginRight: 20,
                }}
              />
              <Image
                source={require('../image/celana.jpg')}
                style={{
                  width: 200,
                  height: 300,
                  backgroundColor: 'green',
                  borderRadius: 25,
                  marginRight: 20,
                }}
              />
              <Image
                source={require('../image/sepatu.jpg')}
                style={{
                  width: 200,
                  height: 300,
                  backgroundColor: 'green',
                  borderRadius: 25,
                  marginRight: 20,
                }}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Home;

const gaya = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3196E2',
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
  },
  search: {
    height: 50,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    marginHorizontal: 20,
    borderRadius: 25,
    backgroundColor: 'white',
  },
});
