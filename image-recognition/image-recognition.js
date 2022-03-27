import TextRecognition from "react-native-text-recognition";

// pass the image's path to recognize

export const textRecognition = async () =>
	await TextRecognition.recognize("/images/test.png");
