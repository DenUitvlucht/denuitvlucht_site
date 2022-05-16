import { ref } from "vue";


export const defaultTheme = () => {


  if (localStorage.getItem('theme') === null) {

    localStorage.setItem('theme', 'light')
  }

  return localStorage.getItem('theme').toString()
}



export const toggleTheme = () => {

  theme.value = theme.value === "light" ? "dark" : "light"
  model.value = model.value === "uit" ? "aan" : "uit"


  if (source.value === './images/denuitvlucht/Logo_Vector_Blauw.svg') {

    source.value = './images/denuitvlucht/Logo_Vector_Wit.svg'
  }
  else {

    source.value = './images/denuitvlucht/Logo_Vector_Blauw.svg'
  }

  localStorage.setItem("theme", theme.value.toString());

};

export let theme = ref(defaultTheme())
export let model = ref('uit')
export let source = ref('./images/denuitvlucht/Logo_Vector_Blauw.svg')

