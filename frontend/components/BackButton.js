import { TouchableOpacity, Image } from "react-native"

const BackButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={require('../assets/images/arrow-left.png')} />
        </TouchableOpacity>
    )
}

export default BackButton;