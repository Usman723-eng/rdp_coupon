import React from 'react'
import DealsCard from '../DealsSection/DealsCard';

function GoRDPCard() {
    const GoRDPData = [
        {
            id: 0,
            offText: "5% Off",
            rdpName: "GoRDP",
            cardTitle: "Affordable GPU Shared RDP $5 off",
            verifyText: "Verified 8 Days Ago",
            usesText: "7 Uses Today",
            BoxDesc: "Want To Run Emulators? Want To Do Graphics Intensive Work? No Worries We Got It Covered For You.",
            btnLink: "https://gordp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PRGrd56",
        },
        {
            id: 1,
            offText: "10% Off",
            rdpName: "GoRDP",
            cardTitle: "Powerful GPU Dedicated Server. $10 off",
            verifyText: "Verified 8 Days Ago",
            usesText: "9 Uses Today",
            BoxDesc: "Powerful GPU Dedicated Server with GeForce® GTX 1080 configured so that you can run android emulators and online games smoothly.Get It At Just $159/m After Applying Coupon Code Mnb2qxUne5",
            btnLink: "https://gordp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "P9B7V5",
        },
        {
            id: 2,
            offText: "12% Off",
            rdpName: "GoRDP",
            cardTitle: "Get 12% Off On All Quarterly plans.",
            verifyText: "Verified 1 Days Ago",
            usesText: "71 Uses Today",
            BoxDesc: "Take a prolonged plan and save some extra money. Get RDP quarterly plans at 12% off.",
            btnLink: "https://gordp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "LfeTYF",
        },
        {
            id: 3,
            offText: "20% Off",
            rdpName: "GoRDP",
            cardTitle: "Now Get 20% Off on All Annually Plan.",
            verifyText: "Verified 31 Days Ago",
            usesText: "3 Uses Today",
            BoxDesc: "Get an all-round year of quality RDP services at a whopping 20% off.",
            btnLink: "https://gordp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Jgacfa",
        },
        {
            id: 4,
            offText: "5% Off",
            rdpName: "GoRDP",
            cardTitle: "Now Get 5% Off On All New purchases.",
            verifyText: "Verified 4 Days Ago",
            usesText: "20 Uses Today",
            BoxDesc: "Struggling to find new RDP services? Well, GoRDP is set to offer you all the amazing perks alongside a 5% off on every new purchase.",
            btnLink: "https://gordp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Lkgac287",
        },
        {
            id: 5,
            offText: "15% Off",
            rdpName: "GoRDP",
            cardTitle: "Now Get 15% Off on All Plans - Elevate Your Experience with Secure and Efficient RDPs!",
            verifyText: "Verified 1 Days Ago",
            usesText: "5 Uses Today",
            BoxDesc: "Experience the next level of productivity with our diverse range of Remote Desktop Plans. Unlock a 15% discount on all plans, ensuring secure and efficient remote access tailored to your needs. Elevate your digital journey and enjoy seamless connectivity today!",
            btnLink: "https://gordp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PLANSAVER15",
        },
    ]

    return (
        <>
            {GoRDPData.map((val) => {
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

export default GoRDPCard