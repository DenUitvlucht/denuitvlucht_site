import { ref } from "vue";

export const html = document.getElementById('html')
export const locked = ref(false)
export const drawerstate = ref(false)

export const lock = () => {

    if (drawerstate.value) {

        html.removeAttribute('style')
        html.setAttribute('style', 'overflow-y: hidden;')
    }
    else if (drawerstate.value === false) {

        html.removeAttribute('style')
        html.setAttribute('style', 'overflow-y: scroll;')
    }
}



