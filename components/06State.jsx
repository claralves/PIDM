import { View, Text, Button } from "react-native";
import { useState } from "react";

const State = () => {
  //let contador = 0; isso é uma variável local ai não dá certo

  const [contador, setContador] = useState(0);
  //toda função que tem "use "no começo é um hook, que serve para sair da lógica do componente, pegar a variável e trazer para cá :)
  //o valor dentro dos () é o valor inicial

  return (
    <View>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Contador: {contador}
      </Text>
      <Button
        title="CONTAR + 1"
        onPress={() => {
          //contador = contador + 1;
          //como agora usa useState não pode acessar a variável assim agora
          //   setContador(contador + 1);
          setContador((prev) => prev + 1);
          //   console.log(contador);
        }}
      />
    </View>
  );
};

export default State;
