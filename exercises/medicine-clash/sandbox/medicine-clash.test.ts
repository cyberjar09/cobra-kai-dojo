import { Person, dateList } from './Person'
import { Prescription } from './Prescription'

it('should return no clash if there is no prescriptions', () => {
  const prescription = new Prescription('any', new Date(), 1)
  const person = new Person()
  person.addPrescription(prescription);
  expect(person.clash()).toEqual(false);
})

it('returns list of dates', () => {
  expect(dateList(new Date(), 3)).toEqual(['2021-11-12', '2021-11-13', '2021-11-14'])
})

it.skip('should return clash dates', () => {
  const today = new Date()
  const ibuprofen = new Prescription('ibuprofen', today, 10)
  const xanex = new Prescription('xanex', today, 1)
  const person = new Person()
  person.addPrescription(ibuprofen);
  person.addPrescription(xanex);
  expect(person.clash()).toEqual([{ date: today, medicines: ['ibuprofen', 'xanex']}]);
})
