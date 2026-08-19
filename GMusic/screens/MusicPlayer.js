import React from "react"
import {StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../theme/colors';

export default function MusicPlayer(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.eyebrow}>TOCANDO AGORA</Text>
                <Text style={styles.title}>GMusic</Text>
                <Text style={styles.description}>
                    Nosso Player começa aqui
                    </Text>
            </View>          
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background
    }
})