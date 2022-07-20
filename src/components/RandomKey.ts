export default function random(): string {
    return (Math.random() + 1).toString(36).substring(7)
}