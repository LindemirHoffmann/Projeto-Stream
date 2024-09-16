export default class LocalStorage<T> {
  getItem(key: string): T | null {
    const item = localStorage.getItem(key)
    if (item) {
      const decodedItem = atob(item)
      return JSON.parse(decodedItem)
    }
    return null
  }

  setItem(key: string, value: T): void {
    const stringValue = JSON.stringify(value)
    const encodedValue = btoa(stringValue)
    localStorage.setItem(key, encodedValue)
  }
}
