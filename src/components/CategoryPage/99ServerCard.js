import React from 'react'
import DealsCard from '../DealsSection/DealsCard';

function NintyServerCard() {
    const NintyServerData = [
        {
            id: 0,
            offText: "5% Off",
            rdpName: "99Server",
            cardTitle: "USA Dedicated Server $5 off",
            verifyText: "Verified 8 Days Ago",
            usesText: "23 Uses Today",
            BoxDesc: "Want To Run Emulators? Want To Do Graphics Intensive Work? No Worries We Got It Covered For You.",
            btnLink: "https://99server.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Tdafr976",
        },
        {
            id: 1,
            offText: "15% Off",
            rdpName: "99Server",
            cardTitle: "Now Get 15% Off on Mexico Dedicated Server.",
            verifyText: "Verified 11 Days Ago",
            usesText: "34 Uses Today",
            BoxDesc: "Get an all-round year of quality RDP services at a whopping 15% off",
            btnLink: "https://99server.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Fjahki87",
        },
        {
            id: 2,
            offText: "20% Off",
            rdpName: "99Server",
            cardTitle: "Get 20% Off On Europe Dedicated Server.",
            verifyText: "Verified 4 Days Ago",
            usesText: "20 Uses Today",
            BoxDesc: "With a long term RDP plan, you can now save much more than before. Avail a 20% off on all quarterly plans.",
            btnLink: "https://99server.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "XKhsgd",
        },
        {
            id: 3,
            offText: "25% Off",
            rdpName: "99Server",
            cardTitle: "Get 25% Off Each Time On Netherlands Dedicated Server.",
            verifyText: "Verified 1 Days Ago",
            usesText: "71 Uses Today",
            BoxDesc: "Having taken first-hand experience of our RDP services, are you planning a renewal? Well, we have got a 25% off coupon code for you on every renewal.",
            btnLink: "https://99server.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Hfagva",
        },
        {
            id: 4,
            offText: "30% Off",
            rdpName: "99Server",
            cardTitle: "Get 30% Off Each Time On GPU Dedicated Server.",
            verifyText: "Verified 2 Days Ago",
            usesText: "30 Uses Today",
            BoxDesc: "Want to renew RDP services? Now get a 30% off every time you seek a renewal.",
            btnLink: "https://99server.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Dafdayt",
        },
        {
            id: 5,
            offText: "15% Off",
            rdpName: "99Server",
            cardTitle: "Now Get 15% Off on All Plans - Elevate Your Experience with Secure and Efficient RDPs!",
            verifyText: "Verified 1 Days Ago",
            usesText: "5 Uses Today",
            BoxDesc: "Experience the next level of productivity with our diverse range of Remote Desktop Plans. Unlock a 15% discount on all plans, ensuring secure and efficient remote access tailored to your needs. Elevate your digital journey and enjoy seamless connectivity today!",
            btnLink: "https://99server.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PLANSAVER15",
        },
    ]

    return (
        <>
            {NintyServerData.map((val) => {
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

export default NintyServerCard