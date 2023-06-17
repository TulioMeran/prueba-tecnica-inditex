export function millisToMinutesAndSeconds(millis: number) {
    const date = new Date(0, 0, 0, 0, 0, 0, millis)
    return `${date.getHours() > 0 ? `${date.getHours()}:` : ''}${date.getMinutes()}:${date.getSeconds()}`
}