export default function Request(req, res) {
    let messageBool = Math.round(Math.random());
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    if (messageBool == 1)
        res.end(JSON.stringify({
            result: 'success',
            message: 'Операция успешна'
    }));

    else res.end(JSON.stringify({
            result: 'failure',
            message: 'Произошла ошибка - попробуйте позднее'
    }))
}