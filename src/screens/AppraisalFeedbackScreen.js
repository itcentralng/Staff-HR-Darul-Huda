import React from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';

const AppraisalFeedbackScreen = () => {
  const handleSubmitFeedback = () => {
    console.log('Feedback submitted');
  };

  return (
    <SafeAreaView>
    <View style={{ flex: 1, padding: 20, paddingTop: 40 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Appraisal Feedback</Text>
      <TextInput
        placeholder="Enter your feedback here..."
        multiline
        style={{ height: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, borderRadius: 8, textAlignVertical: "top", padding: 10 }}
      />
      <Button title="Submit Feedback" onPress={handleSubmitFeedback} />
    </View>
    </SafeAreaView>
  );
};

export default AppraisalFeedbackScreen;
