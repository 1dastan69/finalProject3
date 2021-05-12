import { useCallback } from "react"
import { useHttp } from "./http.hook"
import { useSuccess } from './success.hook'
import { useError } from "./error.hook"
import { useHistory } from "react-router-dom"

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export const useDelete = () => {
    toast.configure({
        autoClose: 3000,
        draggable: true
    })

    const { request, API_URL } = useHttp()
    const successMessage = useSuccess()
    const errorMessage = useError()
    const history = useHistory()

    const deleteHandler = useCallback(async (id) => {

        const pass = window.confirm("Вы уверенны?")
        if (pass) {
            await request(`${API_URL}/delete/${id}`, "DELETE").catch(() => {
                successMessage("Данные о рабочем удалены")
                history.push('/add')
                history.push('/')
            })
        } else {
            errorMessage("Удаление отменено")
        }

    }, [request, API_URL, history, successMessage, errorMessage])

    return { deleteHandler }
}