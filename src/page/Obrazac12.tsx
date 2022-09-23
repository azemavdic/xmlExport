import React, { Fragment, useEffect, useState } from 'react'
import { format } from 'date-fns'
import DateField from '../components/DateField'
import TextField from '../components/TextField'
import ButtonRemove from '../components/ButtonRemove'
import ButtonAdd from '../components/ButtonAdd'
import TextFieldDynamic from '../components/TextFieldDynamic'

export interface Automati {
  inventurniBroj: string
  serijskiBroj: string
  brojPorezneNaljepnice: string
  ulaz: string
  izlaz: string
  jackpot: string
  razlika: string
}

const Obrazac12 = () => {
  // TODO: samo kopirano, treba prepraviti
  const currentDate = new Date()

  const [datumPodnosenjaDev, setDatumPodnosenjaDev] = useState<Date>(currentDate)
  const [periodOdDev, setPeriodOdDev] = useState<Date>(currentDate)
  const [periodDoDev, setPeriodDoDev] = useState<Date>(currentDate)
  const [danDev, setDanDev] = useState<Date>(currentDate)
  const [jibPoslodavca, setJibPoslodavca] = useState<string>('')
  const [nazivPoslodavca, setNazivPoslodavca] = useState<string>('')
  const [brojZahtjeva, setBrojZahtjeva] = useState<string>('')
  const [datumPodnosenja, setDatumPodnosenja] = useState<string>(
    format(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1), 'yyyy-MM-dd')
  )
  const [jibPriredjivaca, setJibPriredjivaca] = useState<string>('')
  const [nazivPriredjivaca, setNazivPriredjivaca] = useState<string>('')
  const [sifraOpstine, setSifraOpstine] = useState<string>('')
  const [nazivOpstine, setNazivOpstine] = useState<string>('')
  const [adresa, setAdresa] = useState<string>('')
  const [periodOd, setPeriodOd] = useState<string>(
    format(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1), 'yyyy-MM-dd')
  )
  const [periodDo, setPeriodDo] = useState<string>(
    format(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1), 'yyyy-MM-dd')
  )
  const [dan, setDan] = useState<string>(
    format(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1), 'yyyy-MM-dd')
  )
  const [ulaz, setUlaz] = useState<string>('')
  const [izlaz, setIzlaz] = useState<string>('')
  const [jackpot, setJackpot] = useState<string>('')
  const [razlika, setRazlika] = useState<string>('')

  const [automati, setAutomati] = useState<Automati[]>([
    { inventurniBroj: '', serijskiBroj: '', brojPorezneNaljepnice: '', ulaz: '', izlaz: '', jackpot: '', razlika: '' },
  ])

  //   Set godina-mjesec-dan
  useEffect(() => {
    const payMonth = format(
      new Date(datumPodnosenjaDev.getFullYear(), datumPodnosenjaDev.getMonth(), datumPodnosenjaDev.getDate()),
      'yyyy-MM-dd'
    )
    setDatumPodnosenja(payMonth)
  }, [datumPodnosenjaDev])
  //   Set godina-mjesec-dan
  useEffect(() => {
    const payMonth = format(
      new Date(periodOdDev.getFullYear(), periodOdDev.getMonth(), periodOdDev.getDate()),
      'yyyy-MM-dd'
    )
    setPeriodOd(payMonth)
  }, [periodOdDev])
  //   Set godina-mjesec-dan
  useEffect(() => {
    const payMonth = format(
      new Date(periodDoDev.getFullYear(), periodDoDev.getMonth(), periodDoDev.getDate()),
      'yyyy-MM-dd'
    )
    setPeriodDo(payMonth)
  }, [periodDoDev])
  //   Set godina-mjesec-dan
  useEffect(() => {
    const payMonth = format(new Date(danDev.getFullYear(), danDev.getMonth(), danDev.getDate()), 'yyyy-MM-dd')
    setDan(payMonth)
  }, [danDev])

  let xmlFile = ''
  const obrazac12SDRA = `<?xml version="1.0" encoding="Windows-1250" ?>
<PaketniUvozObrazaca xmlns="urn:PaketniUvozObrazaca_V1_0.xsd">
<PodaciOPoslodavcu>
<JIBPoslodavca>${jibPoslodavca}</JIBPoslodavca>
<NazivPoslodavca>${nazivPoslodavca}</NazivPoslodavca>
<BrojZahtjeva>${brojZahtjeva}</BrojZahtjeva>
<DatumPodnosenja>${datumPodnosenja}</DatumPodnosenja>
</PodaciOPoslodavcu>
<Obrazac12SDRA>
<PodaciOPriredjivacu>
<Jib>${jibPriredjivaca}</Jib>
<Naziv>${nazivPriredjivaca}</Naziv>
<SifraOpstine>${sifraOpstine}</SifraOpstine>
<NazivOpstine>${nazivOpstine}</NazivOpstine>
<Adresa>${adresa}</Adresa>
<PeriodOd>${periodOd}</PeriodOd>
<PeriodDo>${periodDo}</PeriodDo>
</PodaciOPriredjivacu>
<PodaciODanu>
<Dan>${dan}</Dan>`

  xmlFile += obrazac12SDRA

  let podaciOAutomatima = ''

  for (let i = 0; i < automati.length; i++) {
    podaciOAutomatima = `<PodaciOAutomatima>
<InventurniBrojAutomata>${automati[i].inventurniBroj}</InventurniBrojAutomata>
<SerijskiBrojAutomata>${automati[i].serijskiBroj}</SerijskiBrojAutomata>
<BrojPorezneNaljepnice>${automati[i].brojPorezneNaljepnice}</BrojPorezneNaljepnice>
<UkupanUlaz>${automati[i].ulaz}</UkupanUlaz>
<UkupanIzlaz>${automati[i].izlaz}</UkupanIzlaz>
<Jackpot>${automati[i].jackpot}</Jackpot>
<Razlika>${automati[i].razlika}</Razlika>
</PodaciOAutomatima>`

    xmlFile += podaciOAutomatima
  }

  const ostalo = `<PodaciOUkupno>
<UkupanUlaz>${ulaz}</UkupanUlaz>
<UkupanIzlaz>${izlaz}</UkupanIzlaz>
<Jackpot>${jackpot}</Jackpot>
<Razlika>${razlika}</Razlika>
</PodaciOUkupno>
</PodaciODanu>
</Obrazac12SDRA>
</PaketniUvozObrazaca>`

  xmlFile += ostalo

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([xmlFile], { type: 'xml;charset=windows-1250' })
    element.href = URL.createObjectURL(file)
    element.download = 'OBRAZAC_12_SDRA.xml'
    document.body.appendChild(element)
    element.click()
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    let newFormValues = [...automati]
    // @ts-ignore
    newFormValues[i][e.target.name] = e.target.value
    setAutomati(newFormValues)
  }

  const addField = () => {
    setAutomati([
      ...automati,
      {
        inventurniBroj: '',
        serijskiBroj: '',
        brojPorezneNaljepnice: '',
        ulaz: '',
        izlaz: '',
        jackpot: '',
        razlika: '',
      },
    ])
  }
  const removeField = (i: number) => {
    let newFormValues = [...automati]
    newFormValues.splice(i, 1)
    setAutomati(newFormValues)
  }

  return (
    <>
      <section className='w-full mt-2 mb-2'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Podaci o poslodavcu</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          <TextField text='JIB poslodavca' value={jibPoslodavca} setValue={setJibPoslodavca} />
          <TextField text='Naziv poslodavca' value={nazivPoslodavca} setValue={setNazivPoslodavca} />
          <TextField text='Broj zahtjeva' value={brojZahtjeva} setValue={setBrojZahtjeva} />
          <DateField text='Datum podnošenja' value={datumPodnosenjaDev} setValue={setDatumPodnosenjaDev} />
        </div>
      </section>
      <section className='w-full mb-6'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Podaci o priređivaču</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          <TextField text='JIB' value={jibPriredjivaca} setValue={setJibPriredjivaca} />
          <TextField text='Naziv priređivača' value={nazivPriredjivaca} setValue={setNazivPriredjivaca} />
          <TextField text='Šifra opštine' value={sifraOpstine} setValue={setSifraOpstine} />
          <TextField text='Naziv opštine' value={nazivOpstine} setValue={setNazivOpstine} />
          <TextField text='Adresa' value={adresa} setValue={setAdresa} />
          <DateField text='Period od' value={periodOdDev} setValue={setPeriodOdDev} />
          <DateField text='Period do' value={periodDoDev} setValue={setPeriodDoDev} />
        </div>
      </section>
      <section className='w-full mb-6'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Podaci o danu</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          <DateField text='Dan' value={danDev} setValue={setDanDev} />
        </div>
      </section>
      <section className='w-full mb-6'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Podaci o automatima</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          {automati.map((kaz, ind) => (
            <div key={ind}>
              <TextFieldDynamic text='Inventurni broj' handleChange={handleChange} ind={ind} name='inventurniBroj' />
              <TextFieldDynamic text='Serijski broj' handleChange={handleChange} ind={ind} name='serijskiBroj' />
              <TextFieldDynamic
                text='Broj porezne naljepnice'
                handleChange={handleChange}
                ind={ind}
                name='brojPorezneNaljepnice'
              />
              <TextFieldDynamic text='Ukupan ulaz' handleChange={handleChange} ind={ind} name='ulaz' />
              <TextFieldDynamic text='Ukupan izlaz' handleChange={handleChange} ind={ind} name='izlaz' />
              <TextFieldDynamic text='Jackpot' handleChange={handleChange} ind={ind} name='jackpot' />
              <TextFieldDynamic text='Razlika' handleChange={handleChange} ind={ind} name='razlika' />
              <div className='flex flex-wrap w-60'>
                {ind ? <ButtonRemove ind={ind} removeField={removeField} /> : null}
                <ButtonAdd addField={addField} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='w-full mb-6'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Podaci ukupno</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          <TextField text='Ukupan ulaz' value={ulaz} setValue={setUlaz} />
          <TextField text='Ukupan izlaz' value={izlaz} setValue={setIzlaz} />
          <TextField text='Jackpot' value={jackpot} setValue={setJackpot} />
          <TextField text='Razlika' value={razlika} setValue={setRazlika} />
        </div>
      </section>
      <button onClick={handleDownload} className='w-full px-4 py-2 rounded bg-sky-700 hover:bg-sky-600 text-sky-100'>
        Preuzmi XML
      </button>
    </>
  )
}

export default Obrazac12
