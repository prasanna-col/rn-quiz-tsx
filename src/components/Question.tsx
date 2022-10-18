
import React, { FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

interface Question {
  QuestionNo: number, // This one of the prop from parant component. 
  Question: string // This one of the prop from parant component. 
}


const Questions: FC<Question> = (props) => {
  return (
    <SafeAreaView >
      <View style={styles.questioncontainer}>
        <Text style={styles.textstyle}>{props.QuestionNo}</Text>
        <Text style={{ fontSize: 15, color: 'black', textAlign: 'left' }}>{props.Question} This is sample question text to test the length of the question</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  questioncontainer: { flexDirection: 'row', backgroundColor: 'white', marginTop: 10, paddingRight: 50 },

  textstyle: { paddingHorizontal: 15, fontSize: 15, color: 'blue' },
})


export default Questions;
