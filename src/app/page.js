import { Banner } from '@/components/Banner';
import { text1 } from '@/config';
import { TextBlock } from '@/components/TextBlock';
import { ContactsBlock } from '@/components/ContactsBlock';
import { FormAction } from '@/components/FormAction';
import { MainInfoBlock } from '@/components/MainInfoBlock';
import { CoordinatorBlock } from '@/components/CoordinatorBlock';
import PhoneBlock from '@/components/PhoneBlock';
import { Suspense } from 'react';
import { Metrika } from '@/components/Metrika';

export default function Home() {
    return (
        <>
            <main style={{ position: 'relative' }}>
                <Banner />
                {/*<CardsBlock />*/}
                <PhoneBlock text="Ответим на любые вопросы по госпитализации и лечению. Звоните!" />
                <MainInfoBlock />
                {/*<PhoneBlock />*/}
                {/*<AboutBlock />*/}
                {/*<OurServicesBlock />*/}
                {/*<WhyWeBlock />*/}
                {/*<PhoneBlock text="Остались вопросы? Звоните!" />*/}
                {/*<WeRespondBlock />*/}
                {/*<WhatWeOfferBlock/>*/}
                {/*<DirectionsOfHospitalizationBlock />*/}
                {/*<PhoneBlock text="Ответим на любые вопросы!" />*/}
                {/*<BaseAccordion id="faq" title="Частые вопросы" items={faq} />*/}
                <CoordinatorBlock />
                {/*<PartnersBlock />*/}
                <PhoneBlock text="Полный список услуг и цены по телефону. Звоните!" />
                {/*<BaseAccordion id="service" title="Услуги" items={services} />*/}
                <TextBlock text={text1} />
                <ContactsBlock />
                <FormAction />
            </main>
            <Suspense>
                <Metrika />
            </Suspense>
        </>
    );
}
