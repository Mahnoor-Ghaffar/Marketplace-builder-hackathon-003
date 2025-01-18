import SecondNavbar from '@/app/components/About-2/SecondNavbar'
import ContactCards from '@/app/components/ContactComponents/ContactCards'
import ContactHero from '@/app/components/ContactComponents/ContactHero'
import LetsTalk from '@/app/components/ContactComponents/LetsTalk'
import Footer from '@/app/components/HomeComponents/footer'
import React from 'react'

const contact = () => {
  return (
    <main>
        <SecondNavbar />
        <ContactHero />
        <ContactCards />
        <LetsTalk />
        <Footer />
    </main>

  )
}

export default contact