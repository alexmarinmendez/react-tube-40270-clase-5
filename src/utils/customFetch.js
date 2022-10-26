let is_ok = true

export const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task)   // => return task
            } else {
                reject('Error al consultar los datos')    // => return
            }
        }, time)
    })
}