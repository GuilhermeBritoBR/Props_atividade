import { View, Text } from "react-native";
import { Styles } from "../../styles/Stylesheet";
//O PARAMETRO POINT DEFINE O TEXTO DO COMPONENTE
// O PARAMETRO COR DEFINE A COR DO COMPONENTE
export default function NameComponent({ point, cor }) {
  return <Text style={[Styles.text, cor]}>{point}</Text>;
}
