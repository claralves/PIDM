import { Image, View } from "react-native";

const ChildA = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/00/fe/28/00fe280ea21f53d41df890dd1949df23.jpg",
        }}
        style={{ height: 150, width: 150 }}
      />
    </View>
  );
};

export default ChildA;
