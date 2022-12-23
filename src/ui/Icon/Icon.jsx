import { Image, View } from 'react-native'

export const Icon = ({ src, height = 30, width = 30, style }) => {
    return (
        <View>
            <Image
                style={style}
                width={width}
                height={height}
                source={{ uri: src }}
            />
        </View>
    )
}
