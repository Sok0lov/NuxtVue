
export default defineEventHandler(async (event) => {

    // const { name } = getQuery(event)
    //
    // //Обработка данных после публикации
    //
    // const { age } = await readBody(event)

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_MTsOvubIrtlMER3Q9YkOxXklHI7p778UkIHsUvmz')

    return data
})