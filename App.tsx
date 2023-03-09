import React,{useState, useEffect }  from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native';

import RiddleCard from './components/RiddleCard';
import { Riddle, RiddleData } from './RiddleData';

const myIterator = RiddleData.entries();
  let nextItem:Riddle =RiddleData.at(0) as Riddle;
  let prevItem:Riddle;

const App: React.FC = () => {

  const [riddleQ, setRiddleQ] = useState<string>(nextItem.question);
  const [riddleId, setRiddleId] = useState<number>(nextItem.id);
  const [riddleAnswer, setRiddleAnswer] = useState<string>(nextItem.answer);
 
  
  const moveNext =()=>{
    //console.log(RiddleData.length);
    
    if (RiddleData.length>riddleId+1)
    {
     nextItem = RiddleData.at(riddleId+1) as Riddle; 
    }
    else 
    {
      nextItem = RiddleData.at(0) as Riddle; 
    }
    console.log(nextItem);
    setRiddleQ(nextItem.question); 
    setRiddleId(nextItem.id);
    setRiddleAnswer(nextItem.answer);
   
  }

  const movePrevious =()=>{


    prevItem = RiddleData.at(riddleId-1) as Riddle;
    console.log(prevItem);
    setRiddleQ(prevItem.question); 
    setRiddleId(prevItem.id);
    setRiddleAnswer(prevItem.answer);
   }


const handleNextButton =()=>{
  moveNext();
}



const handlePreviousButton =()=>{
 movePrevious();
}

  return (
    <View style={styles.container}>
      <Text testID='txtTitle' style={styles.titleText} >Riddles</Text>
      <View style={styles.buttonView}> 
      <TouchableOpacity testID='btnPrevious' onPress={()=> handlePreviousButton()} style={styles.button}><Text>Previous Riddle</Text></TouchableOpacity>
      <TouchableOpacity testID='btnNext' onPress={()=> handleNextButton()} style={styles.button}><Text>Next Riddle</Text></TouchableOpacity>
      </View>
      <View style={styles.cardView}>
      <RiddleCard riddle={riddleQ} answer={riddleAnswer} key={riddleId} id={riddleId}/> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  cardView: {
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
   
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius:60,
    borderColor: 'yellow',
    borderWidth: 3,
  },
  titleText: {
    fontFamily: 'comicsans',
    fontSize: 40,
  },

});

export default App;