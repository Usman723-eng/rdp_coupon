import React from 'react'
import DealsCard from '../DealsSection/DealsCard';

function PCRDPCard() {
    const PCRDPData = [
        {
            id: 0,
            offText: "5% Off",
            rdpName: "PCRDP",
            cardTitle: "Now Get 5% Off On All New purchases.",
            verifyText: "Verified 4 Days Ago",
            usesText: "30 Uses Today",
            BoxDesc: "Struggling to find new RDP services? Well, PCRDP is set to offer you all the amazing perks alongside a 5% off on every new purchase.",
            btnLink: "https://pcrdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PFaeav10",
        },
        {
            id: 1,
            offText: "10% Off",
            rdpName: "PCRDP",
            cardTitle: "Get 10% Off On the Streaming Plan.",
            verifyText: "Verified 4 Days Ago",
            usesText: "300 Uses Today",
            BoxDesc: "To get great speed and guaranteed quality services, get streaming plans from PCRDP at 10% off.",
            btnLink: "https://pcrdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Hauh654",
        },
        {
            id: 2,
            offText: "15% Off",
            rdpName: "PCRDP",
            cardTitle: "15% Off on Residential RDP",
            verifyText: "Verified 2 Days Ago",
            usesText: "41 Uses Today",
            BoxDesc: "Did you expect RDP renewal at such decent rates? Instantly use this code for a 5% off on renewal.",
            btnLink: "https://pcrdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Lahfewq",
        },
        {
            id: 3,
            offText: "20% Off",
            rdpName: "PCRDP",
            cardTitle: "Now Get 20% Off On All Quarterly plans.",
            verifyText: "Verified 1 Days Ago",
            usesText: "71 Uses Today",
            BoxDesc: "Take a prolonged plan and save some extra money. Get RDP quarterly plans at 20% off.",
            btnLink: "https://pcrdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "plajhb",
        },
        {
            id: 4,
            offText: "22% Off",
            rdpName: "PCRDP",
            cardTitle: "Now Get 22% Off Each Time On Every Renewal.",
            verifyText: "Verified 3 Days Ago",
            usesText: "55 Uses Today",
            BoxDesc: "Intending to renew services we offer? Now you can do it instantly with a tempting offer at hand. Get 22% off each time you get a renewal.",
            btnLink: "https://pcrdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Vkjagb",
        },
        {
            id: 5,
            offText: "15% Off",
            rdpName: "PCRDP",
            cardTitle: "Now Get 15% Off on All Plans - Elevate Your Experience with Secure and Efficient RDPs!",
            verifyText: "Verified 1 Days Ago",
            usesText: "5 Uses Today",
            BoxDesc: "Experience the next level of productivity with our diverse range of Remote Desktop Plans. Unlock a 15% discount on all plans, ensuring secure and efficient remote access tailored to your needs. Elevate your digital journey and enjoy seamless connectivity today!",
            btnLink: "https://pcrdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PLANSAVER15",
        },
    ]

    return (
        <>
            {PCRDPData.map((val) => {
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

export default PCRDPCard