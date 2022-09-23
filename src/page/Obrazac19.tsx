import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import DateField from '../components/DateField'
import TextField from '../components/TextField'
import SelectField from '../components/SelectField'

const Obrazac19 = () => {
  const currentDate = new Date()
  // obrazac19KMOISA
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
  const [brojAutomata, setBrojAutomata] = useState<string>('')
  const [uplataAut, setUplataAut] = useState<string>('')
  const [isplataAut, setIsplataAut] = useState<string>('')
  const [osnovicaAut, setOsnovicaAut] = useState<string>('')
  const [iznosNaknadeAut, setIznosNaknadeAut] = useState<string>('')
  const [brojRuleta, setBrojRuleta] = useState<string>('')
  const [uplataRul, setUplataRul] = useState<string>('')
  const [isplataRul, setIsplataRul] = useState<string>('')
  const [osnovicaRul, setOsnovicaRul] = useState<string>('')
  const [iznosNaknadeRul, setIznosNaknadeRul] = useState<string>('')
  const [uplataUkupno, setUplataUkupno] = useState<string>('')
  const [isplataUkupno, setIsplataUkupno] = useState<string>('')
  const [osnovicaUkupno, setOsnovicaUkupno] = useState<string>('')
  const [iznosNaknadeUkupno, setIznosNaknadeUkupno] = useState<string>('')
  const [operacija, setOperacija] = useState<string>('Prijava_od_strane_poreznog_obveznika')
  const [datumPrijema, setDatumPrijema] = useState<string>(
    format(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1), 'yyyy-MM-dd')
  )
  const [jmbg, setJmbg] = useState<string>('')
  const [ime, setIme] = useState<string>('')
  const [datumUnosa, setDatumUnosa] = useState<string>(
    format(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1), 'yyyy-MM-dd')
  )
  const [mjesto, setMjesto] = useState<string>('')

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

  const obrazac19KMOISA = `<?xml version="1.0" encoding="Windows-1250" ?><PaketniUvozObrazaca xmlns="urn:PaketniUvozObrazaca_V1_0.xsd">
<PodaciOPoslodavcu>
<JIBPoslodavca>${jibPoslodavca}</JIBPoslodavca>
<NazivPoslodavca>${nazivPoslodavca}</NazivPoslodavca>
<BrojZahtjeva>${brojZahtjeva}</BrojZahtjeva>
<DatumPodnosenja>${datumPodnosenja}</DatumPodnosenja>
</PodaciOPoslodavcu>
<Obrazac19KMOISA>
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
</PodaciOPriredjivacu>
<OpciPodaciOIgramaNaSrecu>
<BrojAutomata>${brojAutomata}</BrojAutomata>
<BrojRuleta>${brojRuleta}</BrojRuleta>
</OpciPodaciOIgramaNaSrecu>
<PodaciONaknadi>
<UkupnoAutomati>
<Uplata>${uplataAut}</Uplata>
<Isplata>${isplataAut}</Isplata>
<Osnovica>${osnovicaAut}</Osnovica>
<IznosNaknade>${iznosNaknadeAut}</IznosNaknade>
</UkupnoAutomati>
<UkupnoRuleti>
<Uplata>${uplataRul}</Uplata>
<Isplata>${isplataRul}</Isplata>
<Osnovica>${osnovicaRul}</Osnovica>
<IznosNaknade>${iznosNaknadeRul}</IznosNaknade>
</UkupnoRuleti>
</PodaciONaknadi>
<PodaciONaknadiUkupno>
<Uplata>${uplataUkupno}</Uplata>
<Isplata>${isplataUkupno}</Isplata>
<Osnovica>${osnovicaUkupno}</Osnovica>
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
</Obrazac19KMOISA>
</PaketniUvozObrazaca>`

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([obrazac19KMOISA], { type: 'xml' })
    element.href = URL.createObjectURL(file)
    element.download = 'OBRAZAC_19_KMO_ISA.xml'
    document.body.appendChild(element)
    element.click()
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
          <TextField text='Šifra djelatnosti' value={sifraDjelatnosti} setValue={setSifraDjelatnosti} />
          <TextField text='Naziv djelatnosti' value={nazivDjelatnosti} setValue={setNazivDjelatnosti} />
        </div>
      </section>
      <section className='w-full mb-6'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Podaci o automatima</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          <TextField text='Broj automata' value={brojAutomata} setValue={setBrojAutomata} />
          <TextField text='Uplata' value={uplataAut} setValue={setUplataAut} />
          <TextField text='Isplata' value={isplataAut} setValue={setIsplataAut} />
          <TextField text='Osnovica' value={osnovicaAut} setValue={setOsnovicaAut} />
          <TextField text='Iznos naknade' value={iznosNaknadeAut} setValue={setIznosNaknadeAut} />
        </div>
      </section>
      <section className='w-full mb-6'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Podaci o ruletima</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          <TextField text='Broj ruleta' value={brojRuleta} setValue={setBrojRuleta} />
          <TextField text='Uplata' value={uplataRul} setValue={setUplataRul} />
          <TextField text='Isplata' value={isplataRul} setValue={setIsplataRul} />
          <TextField text='Osnovica' value={osnovicaRul} setValue={setOsnovicaRul} />
          <TextField text='Iznos naknade' value={iznosNaknadeRul} setValue={setIznosNaknadeRul} />
        </div>
      </section>
      <section className='w-full mb-6'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Podaci o naknadi ukupno</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          <TextField text='Uplata' value={uplataUkupno} setValue={setUplataUkupno} />
          <TextField text='Isplata' value={isplataUkupno} setValue={setIsplataUkupno} />
          <TextField text='Osnovica' value={osnovicaUkupno} setValue={setOsnovicaUkupno} />
          <TextField text='Iznos naknade' value={iznosNaknadeUkupno} setValue={setIznosNaknadeUkupno} />
        </div>
      </section>
      <section className='w-full mb-6'>
        <p className='p-1 font-semibold uppercase bg-slate-300 text-slate-600'>Dokument</p>
        <div className='flex flex-wrap items-center justify-start w-full'>
          <SelectField text='Operacija' value={operacija} setValue={setOperacija} />
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
      <button onClick={handleDownload} className='w-full px-4 py-2 rounded bg-sky-700 hover:bg-sky-600 text-sky-100'>
        Preuzmi XML
      </button>
    </>
  )
}

export default Obrazac19
