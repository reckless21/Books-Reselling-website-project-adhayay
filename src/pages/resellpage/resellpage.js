import React from "react";
import Navbar from '../../components/layouts/navbar/Navbar';
import Footer from '../../components/layouts/footer/Footer';
import SellBookForm from '../../components/layouts/resell-section/resell';

const ResellPage = () => {
    return (
        <section>
           <Navbar darkTheme={ true } />
           <SellBookForm />
           <Footer />
        </section>
    )
}

export default ResellPage;