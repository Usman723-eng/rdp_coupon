import React from 'react'
import DealsCard from '../DealsSection/DealsCard';

function OliveVPSCard() {
    const OliveVPSData = [
        {
            id: 0,
            offText: "15% Off",
            rdpName: "OliveVPS",
            cardTitle: "Now Get 15% Off on All Monthly Plans.",
            verifyText: "Verified 7 Days Ago",
            usesText: "27 Uses Today",
            BoxDesc: "Want To Run Emulators? Want To Do Graphics Intensive Work? No Worries We Got It Covered For You.",
            btnLink: "https://olivevps.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Olahag",
        },
        {
            id: 1,
            offText: "25% Off",
            rdpName: "OliveVPS",
            cardTitle: "Get 25% Off On All New purchases.",
            verifyText: "Verified 5 Days Ago",
            usesText: "46 Uses Today",
            BoxDesc: "Get an all-round year of quality RDP services at a whopping 25% off",
            btnLink: "https://olivevps.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Ljagfr",
        },
        {
            id: 2,
            offText: "30% Off",
            rdpName: "OliveVPS",
            cardTitle: "Get Flat 30% Off On Hong Kong RDP Hurrry!!",
            verifyText: "Verified 6 Days Ago",
            usesText: "27 Uses Today",
            BoxDesc: "With a long term RDP plan, you can now save much more than before. Avail a 30% off on all quarterly plans.",
            btnLink: "https://olivevps.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Mnahga",
        },
        {
            id: 3,
            offText: "5% Off",
            rdpName: "OliveVPS",
            cardTitle: "Get 5% Off Each Time On All Annually plans.",
            verifyText: "Verified 1 Days Ago",
            usesText: "41 Uses Today",
            BoxDesc: "Having taken first-hand experience of our RDP services, are you planning a renewal? Well, we have got a 5% off coupon code for you on every renewal.",
            btnLink: "https://olivevps.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Vgahgt",
        },
        {
            id: 4,
            offText: "35% Off",
            rdpName: "OliveVPS",
            cardTitle: "Powerful GPU Dedicated Server. $35 off",
            verifyText: "Verified 2 Days Ago",
            usesText: "20 Uses Today",
            BoxDesc: "Want to renew RDP services? Now get a 35% off every time you seek a renewal.",
            btnLink: "https://olivevps.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "VGhayt",
        },
        {
            id: 5,
            offText: "15% Off",
            rdpName: "OliveVPS",
            cardTitle: "Now Get 15% Off on All Plans - Elevate Your Experience with Secure and Efficient RDPs!",
            verifyText: "Verified 1 Days Ago",
            usesText: "5 Uses Today",
            BoxDesc: "Experience the next level of productivity with our diverse range of Remote Desktop Plans. Unlock a 15% discount on all plans, ensuring secure and efficient remote access tailored to your needs. Elevate your digital journey and enjoy seamless connectivity today!",
            btnLink: "https://olivevps.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PLANSAVER15",
        },
    ]

    return (
        <>
            {OliveVPSData.map((val) => {
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

export default OliveVPSCard