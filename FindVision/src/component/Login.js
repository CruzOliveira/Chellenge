import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App(){
    return(
        <View>

            <Image source={require('../img/Logo.png')}
            />

            <View>
                <Text>Email</Text>
                <TextInput/>
            </View>

            <View>
                <Text>Senha</Text>
                <TextInput/>
            </View>

            <View>
                <TouchableOpacity>
                    <Text>Esqueci a senha</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={ () => navigation.replace('Cadastrar')}
                >
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>

        </View>
)};