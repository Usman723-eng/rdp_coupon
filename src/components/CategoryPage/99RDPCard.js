import React from 'react'
import DealsCard from '../DealsSection/DealsCard';

function NineRDPCard() {
    const NineRDPData = [
        {
            id: 0,
            offText: "10% Off",
            rdpName: "99RDP",
            cardTitle: "Now Get 10% off on All Plans.",
            verifyText: "Verified Yesterday",
            usesText: "61 Uses Today",
            BoxDesc: "Avail this offer and save big bucks on your reliable and cost-effective RDP services.",
            btnLink: "https://99rdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "R6D6P6",
        },
        {
            id: 1,
            offText: "5% Off",
            rdpName: "99RDP",
            cardTitle: "Get 5% Off Each Time On Every Renewal.",
            verifyText: "Verified 2 Days Ago",
            usesText: "33 Uses Today",
            BoxDesc: "Want to renew RDP services? Now get a 5% off every time you seek a renewal.",
            btnLink: "https://99rdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "lsjsfh23",
        },
        {
            id: 2,
            offText: "10% Off",
            rdpName: "99RDP",
            cardTitle: "Get 10% Off On the Streaming Plan.",
            verifyText: "Verified 4 Days Ago",
            usesText: "300 Uses Today",
            BoxDesc: "To get great speed and guaranteed quality services, get streaming plans from 99RDP at 10% off.",
            btnLink: "https://99rdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Lxjis765",
        },
        {
            id: 3,
            offText: "5% Off",
            rdpName: "99RDP",
            cardTitle: "Now Get 5% Off On All New purchases.",
            verifyText: "Verified 4 Days Ago",
            usesText: "20 Uses Today",
            BoxDesc: "Struggling to find new RDP services? Well, 99RDP is set to offer you all the amazing perks alongside a 5% off on every new purchase.",
            btnLink: "https://99rdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "LxsuycYT5",
        },
        {
            id: 4,
            offText: "12% Off",
            rdpName: "99RDP",
            cardTitle: "Get 12% Off On All Quarterly plans.",
            verifyText: "Verified 4 Days Ago",
            usesText: "20 Uses Today",
            BoxDesc: "With a long term RDP plan, you can now save much more than before. Avail a 12% off on all quarterly plans.    ",
            btnLink: "https://99rdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Ljshdbh654",
        },
        {
            id: 5,
            offText: "15% Off",
            rdpName: "99RDP",
            cardTitle: "Now Get 15% Off on All Plans - Elevate Your Experience with Secure and Efficient RDPs!",
            verifyText: "Verified 1 Days Ago",
            usesText: "5 Uses Today",
            BoxDesc: "Experience the next level of productivity with our diverse range of Remote Desktop Plans. Unlock a 15% discount on all plans, ensuring secure and efficient remote access tailored to your needs. Elevate your digital journey and enjoy seamless connectivity today!",
            btnLink: "https://99rdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PLANSAVER15",
        },
    ]

    return (
        <>
            {NineRDPData.map((val) => {
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

export default NineRDPCard