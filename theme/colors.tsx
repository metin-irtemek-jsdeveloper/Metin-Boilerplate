type ColorList =
  | 'transparent'
  | 'black'
  | 'white'
  | 'red'
  | 'red50'
  | 'red100'
  | 'red200'
  | 'red300'
  | 'red400'
  | 'red500'
  | 'red600'
  | 'red700'
  | 'red800'
  | 'red900'
  | 'pink'
  | 'pink50'
  | 'pink100'
  | 'pink200'
  | 'pink300'
  | 'pink400'
  | 'pink500'
  | 'pink600'
  | 'pink700'
  | 'pink800'
  | 'pink900'
  | 'purple'
  | 'purple50'
  | 'purple100'
  | 'purple200'
  | 'purple300'
  | 'purple400'
  | 'purple500'
  | 'purple600'
  | 'purple700'
  | 'purple800'
  | 'purple900'
  | 'deeppurple'
  | 'deeppurple50'
  | 'deeppurple100'
  | 'deeppurple200'
  | 'deeppurple300'
  | 'deeppurple400'
  | 'deeppurple500'
  | 'deeppurple600'
  | 'deeppurple700'
  | 'deeppurple800'
  | 'deeppurple900'
  | 'indigo'
  | 'indigo50'
  | 'indigo100'
  | 'indigo200'
  | 'indigo300'
  | 'indigo400'
  | 'indigo500'
  | 'indigo600'
  | 'indigo700'
  | 'indigo800'
  | 'indigo900'
  | 'blue'
  | 'blue50'
  | 'blue100'
  | 'blue200'
  | 'blue300'
  | 'blue400'
  | 'blue500'
  | 'blue600'
  | 'blue700'
  | 'blue800'
  | 'blue900'
  | 'lightblue'
  | 'lightblue50'
  | 'lightblue100'
  | 'lightblue200'
  | 'lightblue300'
  | 'lightblue400'
  | 'lightblue500'
  | 'lightblue600'
  | 'lightblue700'
  | 'lightblue800'
  | 'lightblue900'
  | 'cyan'
  | 'cyan50'
  | 'cyan100'
  | 'cyan200'
  | 'cyan300'
  | 'cyan400'
  | 'cyan500'
  | 'cyan600'
  | 'cyan700'
  | 'cyan800'
  | 'cyan900'
  | 'teal'
  | 'teal50'
  | 'teal100'
  | 'teal200'
  | 'teal300'
  | 'teal400'
  | 'teal500'
  | 'teal600'
  | 'teal700'
  | 'teal800'
  | 'teal900'
  | 'green'
  | 'green50'
  | 'green100'
  | 'green200'
  | 'green300'
  | 'green400'
  | 'green500'
  | 'green600'
  | 'green700'
  | 'green800'
  | 'green900'
  | 'lightgreen'
  | 'lightgreen50'
  | 'lightgreen100'
  | 'lightgreen200'
  | 'lightgreen300'
  | 'lightgreen400'
  | 'lightgreen500'
  | 'lightgreen600'
  | 'lightgreen700'
  | 'lightgreen800'
  | 'lightgreen900'
  | 'lime'
  | 'lime50'
  | 'lime100'
  | 'lime200'
  | 'lime300'
  | 'lime400'
  | 'lime500'
  | 'lime600'
  | 'lime700'
  | 'lime800'
  | 'lime900'
  | 'yellow'
  | 'yellow50'
  | 'yellow100'
  | 'yellow200'
  | 'yellow300'
  | 'yellow400'
  | 'yellow500'
  | 'yellow600'
  | 'yellow700'
  | 'yellow800'
  | 'yellow900'
  | 'amber'
  | 'amber50'
  | 'amber100'
  | 'amber200'
  | 'amber300'
  | 'amber400'
  | 'amber500'
  | 'amber600'
  | 'amber700'
  | 'amber800'
  | 'amber900'
  | 'orange'
  | 'orange50'
  | 'orange100'
  | 'orange200'
  | 'orange300'
  | 'orange400'
  | 'orange500'
  | 'orange600'
  | 'orange700'
  | 'orange800'
  | 'orange900'
  | 'deeporange'
  | 'deeporange50'
  | 'deeporange100'
  | 'deeporange200'
  | 'deeporange300'
  | 'deeporange400'
  | 'deeporange500'
  | 'deeporange600'
  | 'deeporange700'
  | 'deeporange800'
  | 'deeporange900'
  | 'brown'
  | 'brown50'
  | 'brown100'
  | 'brown200'
  | 'brown300'
  | 'brown400'
  | 'brown500'
  | 'brown600'
  | 'brown700'
  | 'brown800'
  | 'brown900'
  | 'grey'
  | 'grey50'
  | 'grey100'
  | 'grey200'
  | 'grey300'
  | 'grey400'
  | 'grey500'
  | 'grey600'
  | 'grey700'
  | 'grey800'
  | 'grey900'
  | 'bluegrey'
  | 'bluegrey50'
  | 'bluegrey100'
  | 'bluegrey200'
  | 'bluegrey300'
  | 'bluegrey400'
  | 'bluegrey500'
  | 'bluegrey600'
  | 'bluegrey700'
  | 'bluegrey800'
  | 'bluegrey900';

export type Colors = {
  [key in ColorList]: string;
};

export const color: Colors = {
  transparent: 'transparent',
  black: '#000000',
  white: '#ffffff',
  red: '#f44336',
  red50: '#ffebee',
  red100: '#ffcdd2',
  red200: '#ef9a9a',
  red300: '#e57373',
  red400: '#ef5350',
  red500: '#f44336',
  red600: '#e53935',
  red700: '#d32f2f',
  red800: '#c62828',
  red900: '#b71c1c',
  pink: '#e91e63',
  pink50: '#fce4ec',
  pink100: '#f8bbd0',
  pink200: '#f48fb1',
  pink300: '#f06292',
  pink400: '#ec407a',
  pink500: '#e91e63',
  pink600: '#d81b60',
  pink700: '#c2185b',
  pink800: '#ad1457',
  pink900: '#880e4f',
  purple: '#9c27b0',
  purple50: '#f3e5f5',
  purple100: '#e1bee7',
  purple200: '#ce93d8',
  purple300: '#ba68c8',
  purple400: '#ab47bc',
  purple500: '#9c27b0',
  purple600: '#8e24aa',
  purple700: '#7b1fa2',
  purple800: '#6a1b9a',
  purple900: '#4a148c',
  deeppurple: '#673ab7',
  deeppurple50: '#ede7f6',
  deeppurple100: '#d1c4e9',
  deeppurple200: '#b39ddb',
  deeppurple300: '#9575cd',
  deeppurple400: '#7e57c2',
  deeppurple500: '#673ab7',
  deeppurple600: '#5e35b1',
  deeppurple700: '#512da8',
  deeppurple800: '#4527a0',
  deeppurple900: '#311b92',
  indigo: '#3f51b5',
  indigo50: '#e8eaf6',
  indigo100: '#c5cae9',
  indigo200: '#9fa8da',
  indigo300: '#7986cb',
  indigo400: '#5c6bc0',
  indigo500: '#3f51b5',
  indigo600: '#3949ab',
  indigo700: '#303f9f',
  indigo800: '#283593',
  indigo900: '#1a237e',
  blue: '#2196f3',
  blue50: '#e3f2fd',
  blue100: '#bbdefb',
  blue200: '#90caf9',
  blue300: '#64b5f6',
  blue400: '#42a5f5',
  blue500: '#2196f3',
  blue600: '#1e88e5',
  blue700: '#1976d2',
  blue800: '#1565c0',
  blue900: '#0d47a1',
  lightblue: '#03a9f4',
  lightblue50: '#e1f5fe',
  lightblue100: '#b3e5fc',
  lightblue200: '#81d4fa',
  lightblue300: '#4fc3f7',
  lightblue400: '#29b6f6',
  lightblue500: '#03a9f4',
  lightblue600: '#039be5',
  lightblue700: '#0288d1',
  lightblue800: '#0277bd',
  lightblue900: '#01579b',
  cyan: '#00bcd4',
  cyan50: '#e0f7fa',
  cyan100: '#b2ebf2',
  cyan200: '#80deea',
  cyan300: '#4dd0e1',
  cyan400: '#26c6da',
  cyan500: '#00bcd4',
  cyan600: '#00acc1',
  cyan700: '#0097a7',
  cyan800: '#00838f',
  cyan900: '#006064',
  teal: '#009688',
  teal50: '#e0f2f1',
  teal100: '#b2dfdb',
  teal200: '#80cbc4',
  teal300: '#4db6ac',
  teal400: '#26a69a',
  teal500: '#009688',
  teal600: '#00897b',
  teal700: '#00796b',
  teal800: '#00695c',
  teal900: '#004d40',
  green: '#4caf50',
  green50: '#e8f5e9',
  green100: '#c8e6c9',
  green200: '#a5d6a7',
  green300: '#81c784',
  green400: '#66bb6a',
  green500: '#4caf50',
  green600: '#43a047',
  green700: '#388e3c',
  green800: '#2e7d32',
  green900: '#1b5e20',
  lightgreen: '#8bc34a',
  lightgreen50: '#f1f8e9',
  lightgreen100: '#dcedc8',
  lightgreen200: '#c5e1a5',
  lightgreen300: '#aed581',
  lightgreen400: '#9ccc65',
  lightgreen500: '#8bc34a',
  lightgreen600: '#7cb342',
  lightgreen700: '#689f38',
  lightgreen800: '#558b2f',
  lightgreen900: '#33691e',
  lime: '#cddc39',
  lime50: '#f9fbe7',
  lime100: '#f0f4c3',
  lime200: '#e6ee9c',
  lime300: '#dce775',
  lime400: '#d4e157',
  lime500: '#cddc39',
  lime600: '#c0ca33',
  lime700: '#afb42b',
  lime800: '#9e9d24',
  lime900: '#827717',
  yellow: '#ffeb3b',
  yellow50: '#fffde7',
  yellow100: '#fff9c4',
  yellow200: '#fff59d',
  yellow300: '#fff176',
  yellow400: '#ffee58',
  yellow500: '#ffeb3b',
  yellow600: '#fdd835',
  yellow700: '#fbc02d',
  yellow800: '#f9a825',
  yellow900: '#f57f17',
  amber: '#ffc107',
  amber50: '#fff8e1',
  amber100: '#ffecb3',
  amber200: '#ffe082',
  amber300: '#ffd54f',
  amber400: '#ffca28',
  amber500: '#ffc107',
  amber600: '#ffb300',
  amber700: '#ffa000',
  amber800: '#ff8f00',
  amber900: '#ff6f00',
  orange: '#ff9800',
  orange50: '#fff3e0',
  orange100: '#ffe0b2',
  orange200: '#ffcc80',
  orange300: '#ffb74d',
  orange400: '#ffa726',
  orange500: '#ff9800',
  orange600: '#fb8c00',
  orange700: '#f57c00',
  orange800: '#ef6c00',
  orange900: '#e65100',
  deeporange: '#ff5722',
  deeporange50: '#fbe9e7',
  deeporange100: '#ffccbc',
  deeporange200: '#ffab91',
  deeporange300: '#ff8a65',
  deeporange400: '#ff7043',
  deeporange500: '#ff5722',
  deeporange600: '#f4511e',
  deeporange700: '#e64a19',
  deeporange800: '#d84315',
  deeporange900: '#bf360c',
  brown: '#795548',
  brown50: '#efebe9',
  brown100: '#d7ccc8',
  brown200: '#bcaaa4',
  brown300: '#a1887f',
  brown400: '#8d6e63',
  brown500: '#795548',
  brown600: '#6d4c41',
  brown700: '#5d4037',
  brown800: '#4e342e',
  brown900: '#3e2723',
  grey: '#9e9e9e',
  grey50: '#fafafa',
  grey100: '#f5f5f5',
  grey200: '#eeeeee',
  grey300: '#e0e0e0',
  grey400: '#bdbdbd',
  grey500: '#9e9e9e',
  grey600: '#757575',
  grey700: '#616161',
  grey800: '#424242',
  grey900: '#212121',
  bluegrey: '#607d8b',
  bluegrey50: '#eceff1',
  bluegrey100: '#cfd8dc',
  bluegrey200: '#b0bec5',
  bluegrey300: '#90a4ae',
  bluegrey400: '#78909c',
  bluegrey500: '#607d8b',
  bluegrey600: '#546e7a',
  bluegrey700: '#455a64',
  bluegrey800: '#37474f',
  bluegrey900: '#263238',
};
