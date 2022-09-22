import React, { Fragment, useEffect, useState } from 'react'
import { format } from 'date-fns'
import DateField from '../components/DateField'
import TextField from '../components/TextField'
import ButtonRemove from '../components/ButtonRemove'
import ButtonAdd from '../components/ButtonAdd'
import TextFieldDynamic from '../components/TextFieldDynamic'

export interface Kazino {
  jibKazina: string
  nazivKazina: string
  adresaKazina: string
  iznosNaknadeKazina: string
}

const Obrazac20 = () => {
  const currentDate = new Date()

  const [datumPodnosenjaDev, setDatumPodnosenjaDev] = useState<Date>(currentDate)
  const [periodOdDev, setPeriodOdDev] = useState<Date>(currentDate)
  const [periodDoDev, setPeriodDoDev] = useState<Date>(currentDate)
  const [datumPrijemaDev, setDatumPrijemaDev] = useState<Date>(currentDate)
  const [datumUnosaDev, setDatumUnosaDev] = useState<Date>(currentDate)
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
  const [sifraDjelatnosti, setSifraDjelatnosti] = useState<string>('')
  const [nazivDjelatnosti, setNazivDjelatnosti] = useState<string>('')
  const [iznosNaknadeUkupno, setIznosNaknadeUkupno] = useState<string>('')
  const [operacija, setOperacija] = useState<string>('')
  const [datumPrijema, setDatumPrijema] = useState<string>(
    format(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1), 'yyyy-MM-dd')
  )
  const [jmbg, setJmbg] = useState<string>('')
  const [ime, setIme] = useState<string>('')
  const [datumUnosa, setDatumUnosa] = useState<string>(
    format(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1), 'yyyy-MM-dd')
  )
  const [mjesto, setMjesto] = useState<string>('')

  const [kazina, setKazina] = useState<Kazino[]>([
    { jibKazina: '', nazivKazina: '', adresaKazina: '', iznosNaknadeKazina: '' },
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
    const payMonth = format(
      new Date(datumPrijemaDev.getFullYear(), datumPrijemaDev.getMonth(), datumPrijemaDev.getDate()),
      'yyyy-MM-dd'
    )
    setDatumPrijema(payMonth)
  }, [datumPrijemaDev])
  //   Set godina-mjesec-dan
  useEffect(() => {
    const payMonth = format(
      new Date(datumUnosaDev.getFullYear(), datumUnosaDev.getMonth(), datumUnosaDev.getDate()),
      'yyyy-MM-dd'
    )
    setDatumUnosa(payMonth)
  }, [datumUnosaDev])

  let xmlFile = ''
  const obrazac19KMOISA = `<?xml version="1.0" encoding="Windows-1250" ?>
<PaketniUvozObrazaca xmlns="urn:PaketniUvozObrazaca_V1_0.xsd">
<PodaciOPoslodavcu>
<JIBPoslodavca>${jibPoslodavca}</JIBPoslodavca>
<NazivPoslodavca>${nazivPoslodavca}</NazivPoslodavca>
<BrojZahtjeva>${brojZahtjeva}</BrojZahtjeva>
<DatumPodnosenja>${datumPodnosenja}</DatumPodnosenja>
</PodaciOPoslodavcu>
<Obrazac20KGONISK>
<PodaciOPriredjivacu>
<Jib>${jibPriredjivaca}</Jib>
<Naziv>${nazivPriredjivaca}</Naziv>
<SifraOpstine>${sifraOpstine}</SifraOpstine>
<NazivOpstine>${nazivOpstine}</NazivOpstine>
<Adresa>${adresa}</Adresa>
<PeriodOd>${periodOd}</PeriodOd>
<PeriodDo>${periodDo}</PeriodDo>
<SifraDjelatnosti>${sifraDjelatnosti}</SifraDjelatnosti>
<NazivDjelatnosti>${nazivDjelatnosti}</NazivDjelatnosti>
</PodaciOPriredjivacu>`

  xmlFile += obrazac19KMOISA

  let podaciONaknadi = ''

  for (let i = 0; i < kazina.length; i++) {
    podaciONaknadi = `<PodaciONaknadi>
<JibKazina>${kazina[i].jibKazina}</JibKazina>
<NazivKazina>${kazina[i].nazivKazina}</NazivKazina>
<AdresaKazina>${kazina[i].adresaKazina}</AdresaKazina>
<IznosNaknade>${kazina[i].iznosNaknadeKazina}</IznosNaknade>
</PodaciONaknadi>`

    xmlFile += podaciONaknadi
  }

  const ostalo = `<PodaciONaknadiUkupno>
<IznosNaknade>${iznosNaknadeUkupno}</IznosNaknade>
</PodaciONaknadiUkupno>
<Dokument>
<Operacija>${operacija}</Operacija>
<DatumPrijema>${datumPrijema}</DatumPrijema>
</Dokument>
<IzjavaOvlastenoLice>
<JMBOvlastenogLica>${jmbg}</JMBOvlastenogLica>
<ImePrezime>${ime}</ImePrezime>
<DatumUnosa>${datumUnosa}</DatumUnosa>
<Mjesto>${mjesto}</Mjesto>
</IzjavaOvlastenoLice>
</Obrazac20KGONISK>
</PaketniUvozObrazaca>`

  xmlFile += ostalo

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([xmlFile], { type: 'xml' })
    element.href = URL.createObjectURL(file)
    element.download = 'OBRAZAC_20_KGON_ISK.xml'
    document.body.appendChild(element)
    element.click()
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    let newFormValues = [...kazina]
    // @ts-ignore
    newFormValues[i][e.target.name] = e.target.value
    setKazina(newFormValues)
  }

  const addField = () => {
    setKazina([...kazina, { jibKazina: '', adresaKazina: '', iznosNaknadeKazina: '', nazivKazina: '' }])
  }
  const removeField = (i: number) => {
    let newFormValues = [...kazina]
    newFormValues.splice(i, 1)
    setKazina(newFormValues)
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
          <TextField text='Šifra djelatnosti' value={sifraDjelatnosti} setValue={setSifraDjelatnosti} />
          <TextField text='Naziv djelatnosti' value={nazivDjelatnosti} setValue={setNazivDjelatnosti} />
        </div>
      </section>
      <section className='w-full mb-6'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Podaci o automatima</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          {kazina.map((kaz, ind) => (
            <div key={ind}>
              <TextFieldDynamic text='JIB kazina' handleChange={handleChange} ind={ind} name='jibKazina' />
              <TextFieldDynamic text='Naziv kazina' handleChange={handleChange} ind={ind} name='nazivKazina' />
              <TextFieldDynamic text='Adresa kazina' handleChange={handleChange} ind={ind} name='adresaKazina' />
              <TextFieldDynamic text='Iznos naknade' handleChange={handleChange} ind={ind} name='iznosNaknadeKazina' />
              <div className='flex flex-wrap w-60'>
                {ind ? <ButtonRemove ind={ind} removeField={removeField} /> : null}
                <ButtonAdd addField={addField} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='w-full mb-6'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Podaci o naknadi ukupno</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          <TextField text='Iznos naknade' value={iznosNaknadeUkupno} setValue={setIznosNaknadeUkupno} />
        </div>
      </section>
      <section className='w-full mb-6'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Dokument</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          <TextField text='Operacija' value={operacija} setValue={setOperacija} />
          <DateField text='Datum prijema' value={datumPrijemaDev} setValue={setDatumPrijemaDev} />
        </div>
      </section>
      <section className='w-full mb-6'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Izjava ovlaštenog lica</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          <TextField text='JMB ovlaštenog lica' value={jmbg} setValue={setJmbg} />
          <TextField text='Ime i prezime' value={ime} setValue={setIme} />
          <DateField text='Datum unosa' value={datumUnosaDev} setValue={setDatumUnosaDev} />
          <TextField text='Mjesto' value={mjesto} setValue={setMjesto} />
        </div>
      </section>
      <button onClick={handleDownload} className='bg-sky-700 w-full px-4 py-2 rounded hover:bg-sky-600 text-sky-100'>
        Preuzmi XML
      </button>
    </>
  )
}

export default Obrazac20
