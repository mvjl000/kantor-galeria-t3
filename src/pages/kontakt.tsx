import type { NextPage } from "next";
import Head from "next/head";
import { H1, H2 } from "../components/ui";
import {
  LocationWrapper,
  MapWrapper,
  PhonesList,
} from "../components/contact/Contact.styles";
import PhoneIcon from "../../public/icons/phone.svg";
import SamrtphoneIcon from "../../public/icons/smartphone.svg";
import Image from "next/image";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kantor | Kontakt</title>
        <meta
          name="description"
          content="Skontaktuj się z nami, dowiedz się gdzie nas znaleźć lub sprawdź godziny w których jesteśmy otwarci."
        />
      </Head>
      <H1>Skontaktuj się z nami</H1>
      <PhonesList>
        <li>
          <a href="tel:+48177771097">
            <Image src={PhoneIcon} alt="Telefon" />
            <span>:</span>17 777 10 97
          </a>
        </li>
        <li>
          <a href="tel:+48604486626">
            <Image src={SamrtphoneIcon} alt="Telefon" />
            <span>:</span>604 486 626
          </a>
        </li>
        <li>
          <a href="tel:+48604485398">
            <Image src={SamrtphoneIcon} alt="Telefon" />
            <span>:</span>604 485 398
          </a>
        </li>
      </PhonesList>
      <LocationWrapper>
        <H2>Gdzie nas znaleźć?</H2>
        <p>
          Nasz kantor mieści się w Galerii Rzeszów na poziomie 0, obok
          Super-Pharm i Smyka.
        </p>
        <p>
          Dokładny adres to{" "}
          <span>aleja Józefa Piłsudskiego 44, 35-001 Rzeszów</span>
        </p>
        <H2>W jakich godzinach pracujemy?</H2>
        <p>Od poniedziałku do piątku - 09:00-21:00</p>
        <p>W soboty - 10:00-21:00</p>
        <p>W niedziele handlowe - 10:00-20:00</p>
        <MapWrapper>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.3657294827817!2d21.995700715716623!3d50.04197977942114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb018c3f4fbd%3A0x5033f39cd685a056!2sGaleria%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1610107162737!5m2!1spl!2spl"></iframe>
        </MapWrapper>
      </LocationWrapper>
    </>
  );
};

export default Contact;
