import { View,Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const COLORS = [{
    id: 1,
    name:'Sublime Vivid',
    colors: ['#FC466B', '#3F5EFB']
  },
  {
    id: 2,
    name:'Rainbow Blue',
    colors: ['#00F260', '#0575E6']
  },
  {
    id: 3,
    name:'Orange Fun',
    colors: ['#fc4a1a', '#f7b733']
  },
  {
    id: 4,
    name:'Moon Purple',
    colors: ['#4e54c8', '#8f94fb']
  },
  {
    id: 5,
    name:'Harvey',
    colors: ['#1f4037', '#99f2c8']
  },
  {
    id: 6,
    name:'Amin',
    colors: ['#8E2DE2', '#4A00E0']
  },
  {
    id: 7,
    name:'Yoda',
    colors: ['#FF0099', '#493240']
  },
  {
    id: 8,
    name:'Piggy Pink',
    colors: ['#ee9ca7', '#ffdde1']
  },
  {
    id: 9,
    name: 'Mango',
    colors: ['#ffe259', '#ffa751']
  },
  {
    id: 10,
    name:'Purpink',
    colors: ['#7F00FF', '#E100FF']
  }]

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, }}>

      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 20}}>
        {COLORS.map((item) => <LinearGradient
          key={item.id}
          colors={item.colors}
          start={[0, 0.5]}
          end={[1, 0.5]}
          style={{ justifyContent: 'center', alignItems: 'center', height: 120, borderRadius: 10, marginBottom: 8, }}>
            <Text style={{fontSize: 20, fontWeight: '800', color:'#FFF'}}>{item.name}</Text>
        </LinearGradient>)}
      </ScrollView>

    </View>
  );
}