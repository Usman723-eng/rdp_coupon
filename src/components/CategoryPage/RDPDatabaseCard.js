import React from 'react'
import DealsCard from '../DealsSection/DealsCard';

function RDPDatabaseCard() {
    const RDPDatabaseData = [
        {
            id: 0,
            offText: "10% Off",
            rdpName: "RDP Database",
            cardTitle: "Now Get 10% Off on All Monthly Plans.",
            verifyText: "Verified 31 Days Ago",
            usesText: "70 Uses Today",
            BoxDesc: "Get an all-round year of quality RDP services at a whopping 10% off",
            btnLink: "https://rdpdatabase.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "RPdhhe",
        },
        {
            id: 1,
            offText: "16% Off",
            rdpName: "RDP Database",
            cardTitle: "Get 16% Off On All New purchases.",
            verifyText: "Verified 1 Days Ago",
            usesText: "75 Uses Today",
            BoxDesc: "Get authentic, transformational RDP services for your business now. Avail 16% off by using our coupon code. Offer applicable only for new users.",
            btnLink: "https://rdpdatabase.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Usvf763",
        },
        {
            id: 2,
            offText: "20% Off",
            rdpName: "RDP Database",
            cardTitle: "Get Flat 20% Off On Hong Kong RDP Hurrry!!",
            verifyText: "Verified 4 Days Ago",
            usesText: "20 Uses Today",
            BoxDesc: "Hope This Year is Filled With Love, Laughter and Light Grab This One More Great Offer From RDP Database Get Flat 20% Off On Hong Kong RDP Hurrry!!",
            btnLink: "https://rdpdatabase.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "UPjsh328",
        },
        {
            id: 3,
            offText: "25% Off",
            rdpName: "RDP Database",
            cardTitle: "Get 25% Off on All Annually plans.",
            verifyText: "Verified 3 Days Ago",
            usesText: "37 Uses Today",
            BoxDesc: "Running low on business’ yearly budget? Save more at the RDP front by taking a wholesome annual plan at 25% off.",
            btnLink: "https://rdpdatabase.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Ysfc872",
        },
        {
            id: 4,
            offText: "27% Off",
            rdpName: "RDP Database",
            cardTitle: "Powerful GPU Dedicated Server. $27 off",
            verifyText: "Verified 8 Days Ago",
            usesText: "30 Uses Today",
            BoxDesc: "Powerful GPU Dedicated Server with GeForce® GTX 1080 configured so that you can run android emulators and online games smoothly.Get It At Just $159/m After Applying Coupon Code L5K597t5i7",
            btnLink: "https://rdpdatabase.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Wosnd982",
        },
        {
            id: 5,
            offText: "15% Off",
            rdpName: "RDP Database",
            cardTitle: "Now Get 15% Off on All Plans - Elevate Your Experience with Secure and Efficient RDPs!",
            verifyText: "Verified 1 Days Ago",
            usesText: "5 Uses Today",
            BoxDesc: "Experience the next level of productivity with our diverse range of Remote Desktop Plans. Unlock a 15% discount on all plans, ensuring secure and efficient remote access tailored to your needs. Elevate your digital journey and enjoy seamless connectivity today!",
            btnLink: "https://rdpdatabase.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PLANSAVER15",
        },
    ]

    return (
        <>
            {RDPDatabaseData.map((val) => {
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

export default RDPDatabaseCard