
import { Prescription } from "./Prescription";

export function dateList(startDate: Date, numberOfDays: number): string[] {
    const dates: Date[] = []; 
    for (let i = 0; i < numberOfDays; i++) {
        let start = new Date(startDate.valueOf());
        start.setDate(start.getDate() + i);
        dates.push(start);
    }
    return dates.map(d => d.toISOString().split('T')[0])
}


export class Person {
    prescriptions: Prescription[] = [];
    // calendar: [
    //     { date: '2021-01-01' , medicines: ['xanx', 'ibu']}
    // ]

    addPrescription(prescription: Prescription) {
        // prescription -> ['2021-01-01', '2021-01-02', '2021-01-03']
        // dates.forEach(d => calendar.push())
        this.prescriptions.push(prescription);
    }

    clash(){
        
        if (this.prescriptions.length < 2) return false
        else {
            this.prescriptions.forEach((prescription) => {

            })
        }
        
        
    }
}