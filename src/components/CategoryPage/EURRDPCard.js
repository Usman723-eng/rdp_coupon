import React from 'react'
import DealsCard from '../DealsSection/DealsCard';

function EURRDPCard() {
    const EURRDPData = [
        {
            id: 0,
            offText: "5% Off",
            rdpName: "EURRDP",
            cardTitle: "Get 5% Off Each Time On Every Renewal.",
            verifyText: "Verified 1 Days Ago",
            usesText: "71 Uses Today",
            BoxDesc: "Having taken first-hand experience of our RDP services, are you planning a renewal? Well, we have got a 5% off coupon code for you on every renewal.",
            btnLink: "https://eurdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Eurbhsfgh",
        },
        {
            id: 1,
            offText: "5% Off",
            rdpName: "EURRDP",
            cardTitle: "Get 5% Off On All New Purchase.",
            verifyText: "Verified 1 Days Ago",
            usesText: "71 Uses Today",
            BoxDesc: "Avail a 5% off on amazing RDP plans for new subscriptions.",
            btnLink: "https://eurdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PosusTGF",
        },
        {
            id: 2,
            offText: "12% Off",
            rdpName: "EURRDP",
            cardTitle: "Now Get 12% Off On All Quarterly plans.",
            verifyText: "Verified 1 Days Ago",
            usesText: "71 Uses Today",
            BoxDesc: "Take a prolonged plan and save some extra money. Get RDP quarterly plans at 12% off.",
            btnLink: "https://eurdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Gfagsft298",
        },
        {
            id: 3,
            offText: "12% Off",
            rdpName: "EURRDP",
            cardTitle: "Get 12% Off On All Quarterly plans.",
            verifyText: "Verified 1 Days Ago",
            usesText: "71 Uses Today",
            BoxDesc: "Take a prolonged plan and save some extra money. Get RDP quarterly plans at 12% off.",
            btnLink: "https://eurdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Tfadgv298",
        },
        {
            id: 4,
            offText: "20% Off",
            rdpName: "EURRDP",
            cardTitle: "Now Get 20% Off on All Annually Plan.",
            verifyText: "Verified 31 Days Ago",
            usesText: "3 Uses Today",
            BoxDesc: "Get an all-round year of quality RDP services at a whopping 20% off.",
            btnLink: "https://eurdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Ojsidb109",
        },
        {
            id: 5,
            offText: "15% Off",
            rdpName: "EURRDP",
            cardTitle: "Now Get 15% Off on All Plans - Elevate Your Experience with Secure and Efficient RDPs!",
            verifyText: "Verified 1 Days Ago",
            usesText: "5 Uses Today",
            BoxDesc: "Experience the next level of productivity with our diverse range of Remote Desktop Plans. Unlock a 15% discount on all plans, ensuring secure and efficient remote access tailored to your needs. Elevate your digital journey and enjoy seamless connectivity today!",
            btnLink: "https://eurdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PLANSAVER15",
        },
    ]

    return (
        <>
            {EURRDPData.map((val) => {
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

export default EURRDPCard