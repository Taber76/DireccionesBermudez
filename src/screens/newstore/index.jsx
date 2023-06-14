import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Picker } from "@react-native-picker/picker";

import { styles } from "./styles";
import { ImageSelector, Head } from "../../components";
//import { addStore } from "../../store/actions";

const NewStore = ({ navigation }) => {
  const [name, setName] = useState("");
  const [categoryText, setCategoryText] = useState("Categoria");
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState("");
  const [photoUri, setPhotoUri] = useState(null);

  const dispatch = useDispatch();
  //const storesData = useSelector((state) => state.stores.data);

  const handlePickerChange = (value) => {
    switch (value) {
      case "Restaurantes":
        setCategory(1);
        setCategoryText("Restaurantes");
        break;
      case "Cosmetica":
        setCategory(2);
        setCategoryText("Cosmetica");
        break;
      case "Limpieza":
        setCategory(3);
        setCategoryText("Limpieza");
        break;
      case "Comestibles":
        setCategory(4);
        setCategoryText("Comestibles");
        break;
    }
  };

  const handleImageSelect = (uri) => {
    setPhotoUri(uri);
  };

  const handleSave = () => {
    // dispatch(
    //   addStore({
    //     name: name,
    //     categorie: category,
    //     description: description,
    //     photoUri: photoUri,
    //  })
    // );
  };

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Head />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>NUEVA TIENDA</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre de la tienda"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.text}>Categoria</Text>
        <Picker
          onValueChange={handlePickerChange}
          selectedValue={categoryText}
          style={styles.picker}
          itemStyle={styles.pickerItem}
          dropdownStyle={styles.pickerDropdown}>
          <Picker.Item label="Restaurantes" value="Restaurantes" />
          <Picker.Item label="Cosmetica" value="Cosmetica" />
          <Picker.Item label="Limpieza" value="Limpieza" />
          <Picker.Item label="Comestibles" value="Comestibles" />
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Descripcion"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />

        <ImageSelector onImage={handleImageSelect} />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>GUARDAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewStore;
