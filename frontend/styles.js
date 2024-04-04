import { StyleSheet } from 'react-native';
import { color } from 'react-native-tailwindcss';

export const Colors = {
  primary100: '#f9beda',
  primary500: '#c30b64',
  primary800: '#610440',
  error100: '#fcdcbf',
  error500: '#f37c13',
};

export const categoriesStyles = StyleSheet.create({
  view: {
    marginTop: 120,
    marginLeft: 10,
    marginRight: 10,
    justify: 'center',
    flexDirection: 'row',
  }
});

export const acquisitionStyles = StyleSheet.create({
  view: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justify: 'center',
    flexDirection: 'row'
  }
});

export const itemStyles = StyleSheet.create({
  view: {
    flex: 0,
    marginTop: 20,
    marginBottom: 75,
    marginHorizontal: 24,
    height: '55%',
    overflow: 'hiden',
  }
});

export const unSelectedCategoryStyles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 20,
    color: 'gray'
  }
});

export const selectedCategoryStyles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 20,
    borderBottomWidth: 4,
  }
});



export const blueBackgroundStyles = StyleSheet.create({
  button: {
    marginLeft: 10,
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
    alignItems: 'center',
    backgroundColor: '#38A59F',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    marginHorizontal: 4,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});

export const scrollViewStyles = StyleSheet.create({
  scrollview: {
    paddingHorizontal: 5
  }
});