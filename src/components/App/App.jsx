import "./app.scss";
import FadeIn from 'react-fade-in';

import Home from "../home/Home";
import OfferedServices from "../offeredServices/OfferedServices";
import Payment from "../payment/Payment";
import Testimonials from "../testimonials/Testimonials";

export default function App() {

  return (
    <>
    <FadeIn>
      <Home/>
      <OfferedServices/>
      <Payment/>
      <Testimonials/>
    </FadeIn>
    </>
  )
}
