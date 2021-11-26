export class Prescription {
    medicineName: string
    startDate: Date
    days: number
    constructor(medicineName: string, startDate: Date, days: number) {
        this.medicineName = medicineName
        this.startDate = startDate
        this.days = days
    }
}