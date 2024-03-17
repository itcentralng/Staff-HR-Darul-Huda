import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AppraisalFeedbackScreen = () => {
  const handleSubmitFeedback = () => {
    console.log('Feedback submitted');
  };

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 40 }}>
      <Text style={{ fontSize: 20, marginBottom: 10, fontFamily: 'Lato-Bold'}}>Appraisal Feedback</Text>
      <TextInput
        placeholder="Enter your feedback here..."
        multiline
        style={{ height: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, borderRadius: 8, textAlignVertical: "top", padding: 10, fontFamily: 'Lato-Regular'}}
      />
      <Button title="Submit Feedback" onPress={handleSubmitFeedback} />
    </View>
  );
};

export default AppraisalFeedbackScreen;
