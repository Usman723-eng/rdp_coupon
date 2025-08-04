import React from 'react'
import DealsCard from '../DealsSection/DealsCard';

function HomeRDPCard() {
    const HomeRDPData = [
        {
            id: 0,
            offText: "10% Off",
            rdpName: "HomeRDP",
            cardTitle: "Now Get 10% Off on All Monthly plans",
            verifyText: "Verified 4 Days Ago",
            usesText: "20 Uses Today",
            BoxDesc: "Planning on testing our RDP services by taking a monthly plan? Well, now you can get all monthly plans at 10%.",
            btnLink: "https://homerdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Plandjs29",
        },
        {
            id: 1,
            offText: "5% Off",
            rdpName: "HomeRDP",
            cardTitle: "Get 5% Off On All New purchases.",
            verifyText: "Verified 1 Days Ago",
            usesText: "71 Uses Today",
            BoxDesc: "Get authentic, transformational RDP services for your business now. Avail 5% off by using our coupon code. Offer applicable only for new users.",
            btnLink: "https://homerdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Laidb817",
        },
        {
            id: 2,
            offText: "12% Off",
            rdpName: "HomeRDP",
            cardTitle: "Get 12% Off On All Quarterly plans.",
            verifyText: "Verified 2 Days Ago",
            usesText: "11 Uses Today",
            BoxDesc: "Cover your quarterly needs by taking a quarterly plan at 12% off.",
            btnLink: "https://homerdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Plasnjh872",
        },
        {
            id: 3,
            offText: "20% Off",
            rdpName: "HomeRDP",
            cardTitle: "Get 20% Off on All Annually plans.",
            verifyText: "Verified 3 Days Ago",
            usesText: "17 Uses Today",
            BoxDesc: "Running low on business’ yearly budget? Save more at the RDP front by taking a wholesome annual plan at 20% off.",
            btnLink: "https://homerdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Pkaoksn7654",
        },
        {
            id: 4,
            offText: "5% Off",
            rdpName: "HomeRDP",
            cardTitle: "Now Get 5% Off Each Time On Every Renewal.",
            verifyText: "Verified 3 Days Ago",
            usesText: "35 Uses Today",
            BoxDesc: "Intending to renew services we offer? Now you can do it instantly with a tempting offer at hand. Get 5% off each time you get a renewal.",
            btnLink: "https://homerdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Osjnfjb",
        },
        {
            id: 5,
            offText: "15% Off",
            rdpName: "HomeRDP",
            cardTitle: "Now Get 15% Off on All Plans - Elevate Your Experience with Secure and Efficient RDPs!",
            verifyText: "Verified 1 Days Ago",
            usesText: "5 Uses Today",
            BoxDesc: "Experience the next level of productivity with our diverse range of Remote Desktop Plans. Unlock a 15% discount on all plans, ensuring secure and efficient remote access tailored to your needs. Elevate your digital journey and enjoy seamless connectivity today!",
            btnLink: "https://homerdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PLANSAVER15",
        },
    ]

    return (
        <>
            {HomeRDPData.map((val) => {
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

export default HomeRDPCard