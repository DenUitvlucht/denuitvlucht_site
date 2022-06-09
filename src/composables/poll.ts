import { ref } from "vue";


export const defaultValues = () => {


    if (localStorage.getItem('registered') === null) {

        localStorage.setItem('registered', 'false')
    }

    if (localStorage.getItem('verified') === null) {

        localStorage.setItem('verified', 'false')
    }

    if (localStorage.getItem('voted') === null) {

        localStorage.setItem('voted', 'false')
    }


    return [localStorage.getItem('verified').toString(), localStorage.getItem('registered').toString(), localStorage.getItem('voted').toString()]
}


export const getEmail = () => {

    return localStorage.getItem('emailForSignIn')

}

export const getLastVote = () => {

    return localStorage.getItem('lastVote')

}


export const verify = () => {

    verified.value = 'true'
    localStorage.setItem('verified', 'true')

}

export const vote = (voteValue) => {

    voted.value = 'true'
    window.localStorage.setItem('voted', 'true')
    window.localStorage.setItem('lastVote', voteValue)
}


export let verified = ref(defaultValues()[0])
export let registered = ref(defaultValues()[1])
export let voted = ref(defaultValues()[2])
export let emailToShow = getEmail()
export let lastVote = getLastVote()



