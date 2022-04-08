import "./app.scss";
import FadeIn from 'react-fade-in';

import Home from "../home/Home";
import OfferedServices from "../offeredServices/OfferedServices";
import Payment from "../payment/Payment";
import Testimonials from "../testimonials/Testimonials";
import MapHours from "../mapHours/MapHours";
import Signature from "../signature/Signature";

export default function App() {

  return (
    <>
    <FadeIn>
      <Home/>
      <OfferedServices/>
      <Payment/>
      <Testimonials/>
      <MapHours/>
      <Signature/>
    </FadeIn>
    </>
  )
}
