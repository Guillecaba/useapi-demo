import { theme } from './theme';

export const typeOptions = [
  {
    label: "Effect Monster",
    value: "Effect Monster",
  },
  {
    label: "Flip Effect Monster",
    value: "Flip Effect Monster",
  },
  /*  {
      label: "Flip Tuner Effect Monster",
      value: "Flip Tuner Effect Monster",
    }, */
  {
    label: "Gemini Monster",
    value: "Gemini Monster",
  },
  {
    label: "Normal Monste",
    value: "Normal Monster",
  },
  {
    label: "Normal Tuner Monster",
    value: "Normal Tuner Monster",
  },
  {
    label: "Pendulum Effect Monster",
    value: "Pendulum Effect Monster",
  },
  {
    label: "Pendulum Flip Effect Monster",
    value: "Pendulum Flip Effect Monster",
  },
  {
    label: "Pendulum Normal Monster",
    value: "Pendulum Normal Monster",
  },
  {
    label: "Pendulum Tuner Effect Monste",
    value: "Pendulum Tuner Effect Monste",
  },
  {
    label: "Ritual Effect Monster",
    value: "Ritual Effect Monster",
  },
  {
    label: "Ritual Monster",
    value: "Ritual Monster",
  },
  {
    label: "Skill Card",
    value: "Skill Card",
  },
  {
    label: "Spell Card",
    value: "Spell Card",
  },
  {
    label: "Spirit Monster",
    value: "Spirit Monster",
  },
  {
    label: "Toon Monster",
    value: "Toon Monster",
  },
  {
    label: "Trap Card",
    value: "Trap Card",
  },
  {
    label: "Tuner Monster",
    value: "Tuner Monster",
  },
  {
    label: "Union Effect Monster",
    value: "Union Effect Monster",
  },
];


export const customStyles = {
   
  control: (styles, { isFocused, isDisabled }) => ({
    ...styles,
    backgroundColor:  theme.palette.background.default,
    border: 'none',
    '&:hover': { borderColor: 'none' },
    '&:active': { borderColor: 'none' },
  // This line disable the blue border
    boxShadow: 'none'
    
    
  }),
  placeholder: styles => ({
    ...styles,
    color: theme.palette.text.primary,
    //paddingBottom: 25,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 13
  }),
  singleValue: (styles, { isDisabled }) => ({
    ...styles,
    color: theme.palette.text.primary,
    fontSize: 12
  }),
  option: (styles, { isFocused,isSelected }) => ({
    ...styles,
    backgroundColor: isFocused ? 'rgba(0, 0, 0, 0.08);': isSelected ? 'rgba(0, 0, 0, 0.08);' :'transparent',

    color: isSelected ? theme.palette.grey.main : theme.palette.text.primary ,
    fontSize: isSelected ? 12 :12,
    fontFamily: theme.typography.fontFamily,
    fontWeight: isSelected ? '800': theme.typography.fontWeightMedium,
  }),
  
}




export const normalizeLanguages = (lang) => {
  const shortLang = !!lang ? lang.substr(0, 2) : "es";
  const languages = {
    en: "en",
    es: "es",
  };
  return languages[shortLang] || languages["es"];
};