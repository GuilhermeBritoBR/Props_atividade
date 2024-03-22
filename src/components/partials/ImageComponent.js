import { View, Image } from "react-native";
import { Styles } from "../../styles/Stylesheet";

export default function ImageComponent() {
  const Img = {
    uri: "https://www.boqnews.com/wp-content/uploads/2018/10/aparecida-basilica-capa.jpg",
  };

  return <Image source={Img} style={Styles.img} resizeMode="cover" />;
}
