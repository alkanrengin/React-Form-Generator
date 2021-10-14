import axios from "axios";

const config = axios.create({
    baseURL: 'https://www.jsonbulut.com/json/'
})

const ref= 'ce16b92206474a5ea51d575ce260b184'

export const formGetir = () => {
    const params = {
        ref:ref,
        formId: 42
    }

    return config.get('forms.php',{params:params})
}