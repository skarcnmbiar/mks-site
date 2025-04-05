import Header from "../components/main-header";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'], // Or any other subsets you need
  weight: ['400', '600', '700'], // Specify the weights you want to use
});

export default function about() {
  return (
    <div>
      <Header />
      <div className="my-10 sm:grid sm:grid-cols-6">
        <div className={`${nunitoSans} m-5 p-5 sm:col-span-5`}>
            <h1 className="text-2xl">
                About Us
            </h1>
          <p>
          <br/>
            &ensp; &ensp;Our organization is dedicated to the preservation of traditions and
            the protection of rights within the Nair community. The primary
            motive of our organization is to serve the Nair community. They are 
            This organization also helps in developing and educating the Nair
            community. It will also help in uplifting economically weak Nair&apos;s.
            Our services are exclusively aimed at the traditional Nair
            communities. No improper nair would be included in the fold. We
            embrace individuals from diverse ideologies and sampradayas.
            Recognizing the Nair community&apos;s affiliation with the
            Hindu Varna of Kshatriyas, our organization endeavors to uphold and
            preserve all Kshatriya traditions among Nairs. This includes
            promoting the practice of initiation ceremonies such as Upanayana
            and the cultivation of martial arts. We maintain a stance of
            non-hostility towards all other communities. Emphasizing our
            commitment to the Nair community, we reiterate that the welfare of
            the Nair community is our foremost concern. Our organization also
            encourages non-political discourse and the generation of ideas that
            benefit the Nair community. Lastly, the authority within our
            organization is collectively vested in the entire Nair community and
            not concentrated in any individual.
            <br/><br/>
          </p>
          <p className="text-right">-President<br/>(Malayala Kshatriya Samajam)</p>
        </div>
      </div>
    </div>
  );
}
