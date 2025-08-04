import React from 'react'
import DealsCard from '../DealsSection/DealsCard';

function AmazingRDPCard() {
    const AmazingRDPData = [
        {
            id: 0,
            offText: "10% Off",
            rdpName: "AmazingRDP",
            cardTitle: "Get 10% Off On All Plans.",
            verifyText: "Verified 1 Day Ago",
            usesText: "61 Uses Today",
            BoxDesc: "Shut your eyes to the expensive RDP plans for digitizing your business. Turn to AmazingRDP and get a 10% off on all plans.",
            btnLink: "https://amazingrdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Lkado387",
        },
        {
            id: 1,
            offText: "5% Off",
            rdpName: "AmazingRDP",
            cardTitle: "Now Get 5% Off Each Time On Every Renewal.",
            verifyText: "Verified 2 Day Ago",
            usesText: "21 Uses Today",
            BoxDesc: "Did you expect RDP renewal at such decent rates? Instantly use this code for a 5% off on renewal.",
            btnLink: "https://amazingrdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "jshdiw298",
        },
        {
            id: 2,
            offText: "30% Off",
            rdpName: "AmazingRDP",
            cardTitle: "Get 30% Off On Each Annual Plans.",
            verifyText: "Verified 5 Day Ago",
            usesText: "20 Uses Today",
            BoxDesc: "With business digitalization, RDP services are essential across the year. Take an annual plan at 30% off and experience remote desktop services at unbelievable value.",
            btnLink: "https://amazingrdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Kdjshdb",
        },
        {
            id: 3,
            offText: "10% Off",
            rdpName: "AmazingRDP",
            cardTitle: "Now Get 10% Off On Residential Plans.",
            verifyText: "Verified 4 Day Ago",
            usesText: "20 Uses Today",
            BoxDesc: "Looking for a cost-effective residential RDP plan? You can get it at a functional value with an additional 10% off.",
            btnLink: "https://amazingrdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Dgaft972",
        },
        {
            id: 4,
            offText: "5% Off",
            rdpName: "AmazingRDP",
            cardTitle: "Get 5% Off On Each New Purchases.",
            verifyText: "Verified 4 Day Ago",
            usesText: "20 Uses Today",
            BoxDesc: "Are you also getting on-board the RDP way now? Well, start with saving some bucks. Avail a 5% off on every new membership.",
            btnLink: "https://amazingrdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "mdfdeh7617",
        },
        {
            id: 5,
            offText: "15% Off",
            rdpName: "AmazingRDP",
            cardTitle: "Now Get 15% Off on All Plans - Elevate Your Experience with Secure and Efficient RDPs!",
            verifyText: "Verified 1 Days Ago",
            usesText: "5 Uses Today",
            BoxDesc: "Experience the next level of productivity with our diverse range of Remote Desktop Plans. Unlock a 15% discount on all plans, ensuring secure and efficient remote access tailored to your needs. Elevate your digital journey and enjoy seamless connectivity today!",
            btnLink: "https://amazingrdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PLANSAVER15",
        },
    ]

    return (
        <>
            {AmazingRDPData.map((val) => {
                return (
                    <DealsCard
                        id={val.id}
                        offText={val.offText}
                        rdpName={val.rdpName}
                        cardTitle={val.cardTitle}
                        verifyText={val.verifyText}
                        usesText={val.usesText}
                        BoxDesc={val.BoxDesc}
                        btnLink={val.btnLink}
                        modalDesc={val.modalDesc}
                        modalCode={val.modalCode}
                    />
                )
            })}
        </>
    )
}

export default AmazingRDPCard