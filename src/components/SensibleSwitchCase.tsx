export default function switchCase(conditions: any, val: any): any {
    for (var type in conditions) {
        if (conditions[type](val)) return type
    }
}
