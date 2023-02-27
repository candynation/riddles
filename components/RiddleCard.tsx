import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface RiddleCardProps {
  key:number;
  id:number;
  riddle: string;
  answer: string;
}


const RiddleCard: React.FC<RiddleCardProps> = (props) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const {id,riddle, answer} = props;



  return (
    <View>
      <View style={styles.card}>
      
      <Text style = {styles.cardText}>{riddle}</Text>
      <TouchableOpacity onPress={() => setIsAnswerVisible(!isAnswerVisible)}>
        <View>
          {isAnswerVisible ? (
            <Text style={styles.cardText}>{answer}</Text>
          ) : (
            <Text style={styles.cardText}>Tap for Answer</Text>
          )}
        </View>
      </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width:400,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
   

  },
  cardText: {
    fontFamily: 'comicsans',
    fontSize: 30,
    color: 'black',
    marginLeft:20,
    marginRight:20,
    marginBottom:30,
  },
});

export default RiddleCard;