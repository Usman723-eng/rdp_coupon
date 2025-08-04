import React from 'react'
import DealsCard from '../DealsSection/DealsCard';

function GPURDPCard() {
    const GPURDPData = [
        {
            id: 0,
            offText: "5% Off",
            rdpName: "GPURDP",
            cardTitle: "Affordable GPU Shared RDP $5 off",
            verifyText: "Verified 8 Days Ago",
            usesText: "7 Uses Today",
            BoxDesc: "Want To Run Emulators? Want To Do Graphics Intensive Work? No Worries We Got It Covered For You.",
            btnLink: "https://gpurdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Phdtw754",
        },
        {
            id: 1,
            offText: "10% Off",
            rdpName: "GPURDP",
            cardTitle: "Powerful GPU Dedicated Server. $10 off",
            verifyText: "Verified 8 Days Ago",
            usesText: "9 Uses Today",
            BoxDesc: "Powerful GPU Dedicated Server with GeForce® GTX 1080 configured so that you can run android emulators and online games smoothly.Get It At Just $159/m After Applying Coupon Code NVIDIA$10",
            btnLink: "https://gpurdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "LasvgRE",
        },
        {
            id: 2,
            offText: "5% Off",
            rdpName: "GPURDP",
            cardTitle: "Affordable GPU Shared RDP $5 off",
            verifyText: "Verified 8 Days Ago",
            usesText: "7 Uses Today",
            BoxDesc: "Want To Run Emulators? Want To Do Graphics Intensive Work? No Worries We Got It Covered For You.",
            btnLink: "https://gpurdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "Sdath43",
        },
        {
            id: 3,
            offText: "10% Off",
            rdpName: "GPURDP",
            cardTitle: "Powerful GPU Dedicated Server. $10 off",
            verifyText: "Verified 8 Days Ago",
            usesText: "9 Uses Today",
            BoxDesc: "Powerful GPU Dedicated Server with GeForce® GTX 1080 configured so that you can run android emulators and online games smoothly.Get It At Just $159/m After Applying Coupon Code NVIDIA$10",
            btnLink: "https://gpurdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "SdPjabs3",
        },
        {
            id: 4,
            offText: "10% Off",
            rdpName: "GPURDP",
            cardTitle: "Powerful GPU Dedicated Server. $10 off",
            verifyText: "Verified 8 Days Ago",
            usesText: "9 Uses Today",
            BoxDesc: "Powerful GPU Dedicated Server with GeForce® GTX 1080 configured so that you can run android emulators and online games smoothly.Get It At Just $159/m After Applying Coupon Code NVIDIA$10",
            btnLink: "https://gpurdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "psjdhEWQ",
        },
        {
            id: 5,
            offText: "15% Off",
            rdpName: "GPURDP",
            cardTitle: "Now Get 15% Off on All Plans - Elevate Your Experience with Secure and Efficient RDPs!",
            verifyText: "Verified 1 Days Ago",
            usesText: "5 Uses Today",
            BoxDesc: "Experience the next level of productivity with our diverse range of Remote Desktop Plans. Unlock a 15% discount on all plans, ensuring secure and efficient remote access tailored to your needs. Elevate your digital journey and enjoy seamless connectivity today!",
            btnLink: "https://gpurdp.com/",
            modalDesc: "Copy & paste the following code at checkout on",
            modalCode: "PLANSAVER15",
        },
    ]

    return (
        <>
            {GPURDPData.map((val) => {
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

export default GPURDPCard