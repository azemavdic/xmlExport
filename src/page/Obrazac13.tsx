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
  vrstaPrograma: string
  koeficijent: string
  ulogBet: string
  dobitakWin: string
  ulaz: string
  izlaz: string
  jackpot: string
}

const Obrazac13 = () => {
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
  const [koeficijent, setKoeficijent] = useState<string>('')
  const [ulog, setUlog] = useState<string>('')
  const [dobitak, setDobitak] = useState<string>('')

  const [automati, setAutomati] = useState<Automati[]>([
    {
      inventurniBroj: '',
      serijskiBroj: '',
      dobitakWin: '',
      ulaz: '',
      izlaz: '',
      jackpot: '',
      koeficijent: '',
      ulogBet: '',
      vrstaPrograma: '',
    },
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
  const obrazac13PSEB = `<?xml version="1.0" encoding="Windows-1250" ?>
<PaketniUvozObrazaca xmlns="urn:PaketniUvozObrazaca_V1_0.xsd">
<PodaciOPoslodavcu>
<JIBPoslodavca>${jibPoslodavca}</JIBPoslodavca>
<NazivPoslodavca>${nazivPoslodavca}</NazivPoslodavca>
<BrojZahtjeva>${brojZahtjeva}</BrojZahtjeva>
<DatumPodnosenja>${datumPodnosenja}</DatumPodnosenja>
</PodaciOPoslodavcu>
<Obrazac13PSEB>
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

  xmlFile += obrazac13PSEB

  let podaciOAutomatima = ''

  for (let i = 0; i < automati.length; i++) {
    podaciOAutomatima = `<PodaciOAutomatima>
<InventurniBrojAutomata>${automati[i].inventurniBroj}</InventurniBrojAutomata>
<SerijskiBrojAutomata>${automati[i].serijskiBroj}</SerijskiBrojAutomata>
<VrstaPrograma>${automati[i].vrstaPrograma}</VrstaPrograma>
<Koeficijent>${automati[i].koeficijent}</Koeficijent>
<UlogBet>${automati[i].ulogBet}</UlogBet>
<DobitakWin>${automati[i].dobitakWin}</DobitakWin>
<UlazIn>${automati[i].ulaz}</UlazIn>
<IzlazOut>${automati[i].izlaz}</IzlazOut>
<Jackpot>${automati[i].jackpot}</Jackpot>
<Elektronski>true</Elektronski>
</PodaciOAutomatima>`

    xmlFile += podaciOAutomatima
  }

  const ostalo = `<PodaciOUkupno>
<Koeficijent>${koeficijent}</Koeficijent>
<UlogBet>${ulog}</UlogBet>
<DobitakWin>${dobitak}</DobitakWin>
<UlazIn>${ulaz}</UlazIn>
<IzlazOut>${izlaz}</IzlazOut>
<Jackpot>${jackpot}</Jackpot>
</PodaciOUkupno>
</PodaciODanu>
</Obrazac13PSEB>
</PaketniUvozObrazaca>`

  xmlFile += ostalo

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([xmlFile], { type: 'xml' })
    element.href = URL.createObjectURL(file)
    element.download = 'OBRAZAC_13_PSEB.xml'
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
        dobitakWin: '',
        ulaz: '',
        izlaz: '',
        jackpot: '',
        koeficijent: '',
        ulogBet: '',
        vrstaPrograma: '',
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
      <section className='mt-2 w-full mb-2'>
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
              <TextFieldDynamic text='Vrsta programa' handleChange={handleChange} ind={ind} name='vrstaPrograma' />
              <TextFieldDynamic text='Koeficijent' handleChange={handleChange} ind={ind} name='koeficijent' />
              <TextFieldDynamic text='Ulog Bet' handleChange={handleChange} ind={ind} name='ulogBet' />
              <TextFieldDynamic text='Dobitak Win' handleChange={handleChange} ind={ind} name='dobitakWin' />
              <TextFieldDynamic text='Ulaz in' handleChange={handleChange} ind={ind} name='ulaz' />
              <TextFieldDynamic text='Izlaz out' handleChange={handleChange} ind={ind} name='izlaz' />
              <TextFieldDynamic text='Jackpot' handleChange={handleChange} ind={ind} name='jackpot' />
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
          <TextField text='Koeficijent' value={koeficijent} setValue={setKoeficijent} />
          <TextField text='Ulog Bet' value={ulog} setValue={setUlog} />
          <TextField text='Dobitak Win' value={dobitak} setValue={setDobitak} />
          <TextField text='Ulaz in' value={ulaz} setValue={setUlaz} />
          <TextField text='Izlaz out' value={izlaz} setValue={setIzlaz} />
          <TextField text='Jackpot' value={razlika} setValue={setRazlika} />
        </div>
      </section>
      <button onClick={handleDownload} className='bg-sky-700 w-full px-4 py-2 rounded hover:bg-sky-600 text-sky-100'>
        Preuzmi XML
      </button>
    </>
  )
}

export default Obrazac13
