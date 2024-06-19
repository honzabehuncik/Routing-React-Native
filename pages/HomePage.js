import { StyleSheet, Button, View, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';


export default function HomePage() {
    const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

    return (
        <View>
            <Button
                title="Login page"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
                  <Button title="Pick an image from camera roll" onPress={pickImage} />
                    {image && <Image source={{ uri: image }} style={styles.image} />}

            {/* <LongText/> */}

        </View>
    );
}
