import { View } from "react-native";
import { Styles } from "../../styles/Stylesheet";
import NameComponent from "../partials/NameComponent";
import ImageComponent from "../partials/ImageComponent";

export default function TouristLocation() {
  return (
    <View style={Styles.Container}>
      <NameComponent point={"Santuário de Nossa Senhora de Aparecida"} />
      <ImageComponent />
      <NameComponent
        point={
          "Santuário Nacional de Nossa Senhora Aparecida, Avenida Dr. Júlio Prestes, s/n - Centro Aparecida - SP, 12570-000, Brasil"
        }
        cor={{ color: "#add8e6", fontSize: 25 }}
      ></NameComponent>
      <NameComponent
        cor={{ color: "#a9a9a9", fontSize: 20 }}
        point={
          "O Santuário Nacional de Nossa Senhora Aparecida é um local de devoção e fé para os católicos, dedicado à Virgem Maria, Nossa Senhora Aparecida, Padroeira do Brasil."
        }
      />
    </View>
  );
}
